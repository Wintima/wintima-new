import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertImagesLoaded,
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { COMPLETED_PROJECT_SCHOOLS, VIEWPORTS } from '../fixtures/routes';

test.describe('projects page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/projects');
  });

  test('renders current project and timeline', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);
    const main = page.locator('main');

    await expect(page.getByRole('heading', { level: 1 })).toContainText(/A Decade of Impact/i);
    await expect(main.getByText('Yizidug School Refurbishment').first()).toBeVisible();
    await expect(main.getByText('Yizidug, Upper East Region, Ghana')).toBeVisible();

    const timeline = page.locator('main ol[aria-label*="completed projects"]');
    await expect(timeline.locator('li')).toHaveCount(9);

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('shows completed project schools', async ({ page }) => {
    for (const school of COMPLETED_PROJECT_SCHOOLS) {
      await expect(page.locator('main').getByText(school, { exact: false }).first()).toBeVisible();
    }
  });

  test('support CTA links to donate', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Support this project/i })).toHaveAttribute(
      'href',
      '/donate'
    );
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/projects');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
