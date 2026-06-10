import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertImagesLoaded,
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { VIEWPORTS } from '../fixtures/routes';

test.describe('gallery page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/gallery');
  });

  test('renders gallery images', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);

    await expect(page.getByRole('heading', { level: 1, name: 'Project Gallery' })).toBeVisible();
    await expect(page.locator('main img').first()).toBeVisible();

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('opens and closes lightbox with keyboard', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    const photoButton = page
      .locator('section[aria-labelledby="full-gallery-heading"] button[aria-label^="Open photo:"]')
      .first();
    await expect(photoButton).toBeVisible({ timeout: 20_000 });
    await photoButton.scrollIntoViewIfNeeded();
    await photoButton.click({ force: true });

    const lightbox = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(lightbox).toBeVisible({ timeout: 15_000 });
    await page.keyboard.press('Escape');
    await expect(lightbox).toHaveCount(0);
  });

  test('filter buttons work when present', async ({ page }) => {
    const filters = page.locator('[aria-label="Gallery filters"] button');
    const count = await filters.count();

    if (count > 1) {
      await filters.nth(1).click();
      await expect(filters.nth(1)).toHaveAttribute('aria-pressed', 'true');
    }
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/gallery');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
