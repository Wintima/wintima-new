import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { VIEWPORTS } from '../fixtures/routes';

test.describe('donate page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/donate');
  });

  test('renders three donation methods', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);

    await expect(page.getByRole('heading', { level: 1, name: 'Support Us' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Donate Online' })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Mobile Money/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Card Payment/i })).toBeVisible();
    await expect(page.getByText('Coming Soon').first()).toBeVisible();

    await assertNoConsoleErrors(errors);
  });

  test('GoFundMe link opens in new tab', async ({ page }) => {
    const link = page.getByRole('link', {
      name: /Go to Wintima Foundation GoFundMe campaign/i,
    });
    await expect(link).toHaveAttribute('href', 'https://gofund.me/eef22009e');
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  });

  test('displays mobile money number', async ({ page }) => {
    await expect(page.getByText('+233 54 976 4925')).toBeVisible();
  });

  test('copy number button works', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    const copyButton = page.getByRole('button', {
      name: /Copy Mobile Money number/i,
    });
    await copyButton.scrollIntoViewIfNeeded();
    await copyButton.click();
    await expect(copyButton).toContainText('Copied', { timeout: 5_000 });
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/donate');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
