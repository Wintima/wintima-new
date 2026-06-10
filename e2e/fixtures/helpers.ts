import { expect, type Page } from '@playwright/test';

export async function goto(page: Page, path: string) {
  await page.goto(path, { waitUntil: 'domcontentloaded' });
}

export function attachConsoleErrorCollector(page: Page) {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });
  return errors;
}

export async function assertNoConsoleErrors(errors: string[]) {
  expect(errors).toEqual([]);
}

export async function assertImagesLoaded(page: Page) {
  const images = page.locator('img');
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    const src = await image.getAttribute('src');
    if (!src || src.startsWith('data:')) continue;

    await image.scrollIntoViewIfNeeded().catch(() => {});

    await expect(async () => {
      const naturalWidth = await image.evaluate(
        (element: HTMLImageElement) => element.naturalWidth
      );
      expect(naturalWidth, `Broken image: ${src}`).toBeGreaterThan(0);
    }).toPass({ timeout: 15_000 });
  }
}

export async function assertNoHorizontalOverflow(page: Page) {
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
  });
  expect(hasOverflow).toBe(false);
}

export async function assertTouchTargets(page: Page, selector = 'a, button') {
  const elements = page.locator(selector);
  const count = await elements.count();

  for (let index = 0; index < count; index += 1) {
    const element = elements.nth(index);
    if (!(await element.isVisible())) continue;

    const box = await element.boundingBox();
    if (!box) continue;

    expect(box.height, `Touch target too small at index ${index}`).toBeGreaterThanOrEqual(44);
    expect(box.width, `Touch target too small at index ${index}`).toBeGreaterThanOrEqual(44);
  }
}

export async function collectInternalLinks(page: Page, baseOrigin: string) {
  const hrefs = await page
    .locator('a[href]')
    .evaluateAll((anchors) =>
      anchors
        .map((anchor) => anchor.getAttribute('href'))
        .filter((href): href is string => Boolean(href))
    );

  return hrefs
    .filter((href) => href.startsWith('/') || href.startsWith(baseOrigin))
    .map((href) => (href.startsWith(baseOrigin) ? href.replace(baseOrigin, '') || '/' : href))
    .filter((href) => !href.startsWith('mailto:') && !href.startsWith('tel:'));
}

export async function assertExternalLinksSafe(page: Page) {
  const externalLinks = page.locator('a[target="_blank"]');
  const count = await externalLinks.count();

  for (let index = 0; index < count; index += 1) {
    const rel = await externalLinks.nth(index).getAttribute('rel');
    expect(rel ?? '').toMatch(/noopener/);
  }
}

export async function assertSingleH1(page: Page) {
  await expect(page.locator('main h1, h1')).toHaveCount(1);
}

export async function assertImagesHaveAlt(page: Page) {
  const images = page.locator('img');
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    const alt = await images.nth(index).getAttribute('alt');
    expect(alt, `Image at index ${index} missing alt text`).not.toBeNull();
    expect(alt?.trim()).not.toBe('');
  }
}
