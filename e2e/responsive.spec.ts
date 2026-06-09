import { expect, test } from '@playwright/test';
import { assertNoHorizontalOverflow, goto } from './fixtures/helpers';
import { PRIMARY_ROUTES, VIEWPORTS } from './fixtures/routes';

test.describe('responsive layout @smoke', () => {
  test('header collapses to hamburger on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await goto(page, '/');
    await expect(page.getByRole('button', { name: /open menu/i })).toBeVisible();
  });

  test('footer stacks on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await goto(page, '/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const box = await footer.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(400);
  });

  for (const route of PRIMARY_ROUTES) {
    test(`no horizontal overflow at 320px on ${route.path}`, async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.narrow);
      await goto(page, route.path);
      await assertNoHorizontalOverflow(page);
    });
  }

  test('home CTAs meet minimum touch target size on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await goto(page, '/');

    for (const name of ['Support Us', 'Learn about Wintima']) {
      const cta = page.getByRole('link', { name, exact: true });
      const box = await cta.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
      expect(box?.width).toBeGreaterThanOrEqual(44);
    }
  });
});
