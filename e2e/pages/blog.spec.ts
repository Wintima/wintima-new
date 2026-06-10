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

test.describe('blog page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/blog');
  });

  test('renders blog post card', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);

    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Stories from the Field/i);
    await expect(page.getByText('A Long Journey To Help')).toBeVisible();
    await expect(page.getByText(/December 2021/i)).toBeVisible();

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('read more link navigates to post', async ({ page }) => {
    const readLink = page.getByRole('link', { name: /Read (More|the Story)/i }).first();
    await readLink.click();
    await expect(page).toHaveURL(/\/blog\/a-long-journey-to-help/);
    await expect(
      page.getByRole('heading', { level: 1, name: 'A Long Journey To Help' })
    ).toBeVisible();
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/blog');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
