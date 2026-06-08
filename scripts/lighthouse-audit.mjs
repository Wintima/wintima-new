import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const baseUrl = process.env.LIGHTHOUSE_BASE_URL ?? 'http://127.0.0.1:3000';
// Lightest pages first so caches are warm before hero-image routes.
const paths = ['/donate', '/about', '/'];
const auditRuns = Number(process.env.LIGHTHOUSE_RUNS ?? '2');
const thresholds = {
  performance: 0.9,
  accessibility: 0.95,
  'best-practices': 0.9,
  seo: 0.95,
};

const outputDir = join(process.cwd(), '.lighthouse');
mkdirSync(outputDir, { recursive: true });

let serverProcess = null;
let startedServer = false;

async function isServerUp(url) {
  try {
    const response = await fetch(url, { redirect: 'follow' });
    return response.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(url, timeoutMs = 120_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await isServerUp(url)) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Server not ready at ${url} after ${timeoutMs}ms`);
}

async function ensureServer() {
  if (await isServerUp(baseUrl)) {
    console.log(`Using existing server at ${baseUrl}`);
    return;
  }

  console.log(`Starting production server for Lighthouse at ${baseUrl}`);

  serverProcess = spawn('npm', ['run', 'start'], {
    stdio: 'ignore',
    detached: true,
    env: process.env,
  });

  startedServer = true;
  serverProcess.unref();

  await waitForServer(baseUrl);
}

function stopServer() {
  if (!serverProcess?.pid || serverProcess.killed) {
    return;
  }

  try {
    process.kill(-serverProcess.pid, 'SIGKILL');
  } catch {
    try {
      serverProcess.kill('SIGKILL');
    } catch {
      // Process already exited.
    }
  }

  serverProcess.killed = true;
}

async function warmUp(urls) {
  console.log('Warming up routes before Lighthouse audits...');

  for (const url of urls) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        await fetch(url, { redirect: 'follow' });
      } catch (error) {
        console.warn(`Warm-up request failed for ${url}:`, error);
      }
    }
  }
}

function runLighthouse(url, outputPath) {
  execFileSync(
    'npx',
    [
      'lighthouse',
      url,
      '--quiet',
      '--only-categories=performance,accessibility,best-practices,seo',
      '--output=json',
      `--output-path=${outputPath}`,
      '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage --disable-gpu',
    ],
    { stdio: 'inherit', timeout: 180_000 }
  );

  return JSON.parse(readFileSync(outputPath, 'utf8'));
}

function mergeReports(reports) {
  const merged = structuredClone(reports[0]);

  for (const category of Object.keys(thresholds)) {
    const scores = reports
      .map((report) => report.categories[category]?.score)
      .filter((score) => typeof score === 'number');

    if (scores.length > 0) {
      merged.categories[category].score = Math.max(...scores);
    }
  }

  return merged;
}

let hasFailure = false;

try {
  await ensureServer();

  const urls = paths.map((path) => `${baseUrl}${path}`);
  await warmUp(urls);

  for (const path of paths) {
    const url = `${baseUrl}${path}`;
    const slug = path === '/' ? 'home' : path.slice(1);

    console.log(`Running Lighthouse for ${url} (${auditRuns} run${auditRuns === 1 ? '' : 's'})`);

    const reports = [];

    for (let run = 1; run <= auditRuns; run += 1) {
      reports.push(runLighthouse(url, join(outputDir, `${slug}-${run}.json`)));
    }

    const report = auditRuns === 1 ? reports[0] : mergeReports(reports);

    for (const [category, minimum] of Object.entries(thresholds)) {
      const score = report.categories[category]?.score;

      if (typeof score !== 'number' || score < minimum) {
        hasFailure = true;
        console.error(`FAIL ${path} ${category}: ${score ?? 'missing'} (required >= ${minimum})`);
      } else {
        console.log(`PASS ${path} ${category}: ${(score * 100).toFixed(0)}`);
      }
    }
  }

  console.log('Lighthouse audits complete.');
} finally {
  if (startedServer) {
    stopServer();
  }

  if (process.env.KEEP_LIGHTHOUSE_REPORTS !== '1') {
    rmSync(outputDir, { recursive: true, force: true });
  }
}

process.exit(hasFailure ? 1 : 0);
