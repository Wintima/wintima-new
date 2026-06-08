import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const baseUrl = process.env.LIGHTHOUSE_BASE_URL ?? 'http://127.0.0.1:3000';
const paths = ['/', '/about', '/donate'];
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
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  });

  startedServer = true;

  serverProcess.stdout?.on('data', (chunk) => process.stdout.write(chunk));
  serverProcess.stderr?.on('data', (chunk) => process.stderr.write(chunk));

  await waitForServer(baseUrl);
}

function stopServer() {
  if (!serverProcess || serverProcess.killed) {
    return;
  }

  serverProcess.kill('SIGTERM');
}

async function warmUp(urls) {
  console.log('Warming up routes before Lighthouse audits...');

  for (const url of urls) {
    for (let attempt = 0; attempt < 3; attempt += 1) {
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
      '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage',
    ],
    { stdio: 'inherit' }
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

    console.log(`Running Lighthouse for ${url}`);

    const reports = [
      runLighthouse(url, join(outputDir, `${slug}-1.json`)),
      runLighthouse(url, join(outputDir, `${slug}-2.json`)),
    ];

    const report = mergeReports(reports);

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
} finally {
  if (startedServer) {
    stopServer();
  }

  if (process.env.KEEP_LIGHTHOUSE_REPORTS !== '1') {
    rmSync(outputDir, { recursive: true, force: true });
  }
}

if (hasFailure) {
  process.exit(1);
}
