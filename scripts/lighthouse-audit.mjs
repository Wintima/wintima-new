import { execFileSync } from 'node:child_process';
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

let hasFailure = false;

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

if (process.env.KEEP_LIGHTHOUSE_REPORTS !== '1') {
  rmSync(outputDir, { recursive: true, force: true });
}

if (hasFailure) {
  process.exit(1);
}
