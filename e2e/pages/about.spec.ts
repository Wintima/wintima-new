import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertImagesLoaded,
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { ABOUT_FOCUS_AREAS, STRATEGY_STEPS, VIEWPORTS } from '../fixtures/routes';

test.describe('about page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/about');
  });

  test('renders foundation description and founder', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      /Education in the Heart of Ghana/i
    );
    await expect(
      page
        .locator('main')
        .getByText(/Wintima Foundation/i)
        .first()
    ).toBeVisible();
    await expect(
      page
        .locator('main')
        .getByText(/Janet Zeylisa Dauda/i)
        .first()
    ).toBeVisible();

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('shows six focus areas', async ({ page }) => {
    for (const area of ABOUT_FOCUS_AREAS) {
      await expect(page.getByRole('heading', { name: area }).first()).toBeVisible();
    }
  });

  test('shows four-tier strategy plan', async ({ page }) => {
    for (const step of STRATEGY_STEPS) {
      await expect(page.getByRole('heading', { name: step })).toBeVisible();
    }
  });

  test('has no Yeremallu references', async ({ page }) => {
    const bodyText = await page.locator('body').innerText();
    expect(bodyText.toLowerCase()).not.toContain('yeremallu');
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/about');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
