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

let hasFailure = false;

try {
  await ensureServer();

  for (const path of paths) {
    const url = `${baseUrl}${path}`;
    const slug = path === '/' ? 'home' : path.slice(1);
    const outputPath = join(outputDir, `${slug}.json`);

    console.log(`Running Lighthouse for ${url}`);

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

    const report = JSON.parse(readFileSync(outputPath, 'utf8'));

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
