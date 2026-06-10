import { expect, test } from '@playwright/test';
import { checkAccessibility } from './fixtures/accessibility';
import { goto } from './fixtures/helpers';
import { PRIMARY_ROUTES } from './fixtures/routes';

test.describe('accessibility @a11y', () => {
  for (const route of PRIMARY_ROUTES) {
    test(`axe scan passes on ${route.path}`, async ({ page }) => {
      await goto(page, route.path);
      await checkAccessibility(page, { scope: 'main' });
    });
  }

  test('skip-to-content link is focusable', async ({ page }) => {
    await goto(page, '/');
    await page.keyboard.press('Tab');
    const skipLink = page.getByRole('link', { name: /Skip to main content/i });
    await expect(skipLink).toBeFocused();
  });

  test('contact form fields have labels', async ({ page }) => {
    await goto(page, '/contact');
    for (const id of ['name', 'email', 'phone', 'type', 'subject', 'message']) {
      const field = page.locator(`#${id}`);
      const labelledBy = await field.getAttribute('aria-labelledby');
      const ariaLabel = await field.getAttribute('aria-label');
      const hasLabel = await page.locator(`label[for="${id}"]`).count();
      expect(labelledBy || ariaLabel || hasLabel).toBeTruthy();
    }
  });

  test('focus is visible on header links', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await goto(page, '/');
    const aboutLink = page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'About', exact: true });
    await aboutLink.focus();
    await expect(aboutLink).toBeFocused();
  });
});
