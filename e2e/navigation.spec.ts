import { expect, test } from '@playwright/test';
import { goto } from './fixtures/helpers';
import { LEGAL_ROUTES, MAIN_NAV_LABELS, PRIMARY_ROUTES } from './fixtures/routes';

test.describe('navigation @smoke', () => {
  for (const route of PRIMARY_ROUTES) {
    test(`header is visible on ${route.path}`, async ({ page }) => {
      await goto(page, route.path);
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }

  test('desktop nav links navigate correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await goto(page, '/');

    for (const label of MAIN_NAV_LABELS) {
      if (label === 'Home') continue;
      const nav = page.getByRole('navigation', { name: 'Main navigation' });
      await nav.getByRole('link', { name: label, exact: true }).click();
      await expect(page.locator('header')).toBeVisible();
      await goto(page, '/');
    }
  });

  test('active page is highlighted in nav', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await goto(page, '/about');
    const aboutLink = page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'About', exact: true });
    await expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  test('donate CTA is present in header', async ({ page }) => {
    await goto(page, '/');
    await expect(page.locator('header').getByRole('link', { name: 'Donate' })).toBeVisible();
  });

  test('mobile menu opens, closes, and navigates', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await goto(page, '/');
    await page.waitForLoadState('networkidle');

    const menuButton = page.locator('#mobile-menu-button');
    await expect(menuButton).toBeVisible();
    await menuButton.click({ force: true });
    const sheet = page.locator('[data-slot="sheet-content"]');
    await expect.poll(async () => sheet.isVisible(), { timeout: 15_000 }).toBe(true);
    await expect(sheet.getByRole('link', { name: 'Donate' })).toBeVisible();
    await expect(sheet.getByText('Get Involved', { exact: true })).toHaveCount(0);

    await sheet.getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('footer quick links navigate', async ({ page }) => {
    await goto(page, '/');
    await page
      .getByRole('navigation', { name: 'Footer navigation' })
      .getByRole('link', { name: 'About', exact: true })
      .click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('footer social links point to Wintima profiles', async ({ page }) => {
    await goto(page, '/');
    await expect(page.locator('footer a[href*="instagram.com/wintima.foundation"]')).toHaveCount(1);
    await expect(
      page.locator('footer a[href*="linkedin.com/company/wintima-foundation"]')
    ).toHaveCount(1);
  });

  test('footer uses Wintima foundation content', async ({ page }) => {
    await goto(page, '/');
    const footer = page.locator('footer');
    await expect(footer.getByText('Wintima Foundation', { exact: true })).toBeVisible();
    await expect(footer.getByText('Restoring smiles, impacting lives')).toBeVisible();
    await expect(footer.getByRole('link', { name: /Email Wintima Foundation/i })).toBeVisible();
    await expect(footer.getByText('wintimafoundation@gmail.com')).toBeVisible();
  });

  test('logo links to homepage from every page', async ({ page }) => {
    for (const route of PRIMARY_ROUTES.slice(1, 3)) {
      await goto(page, route.path);
      await page.locator('header a[href="/"]').first().click();
      await expect(page).toHaveURL('/');
    }
  });

  test('legal pages load', async ({ page }) => {
    for (const path of LEGAL_ROUTES) {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
    }
  });

  test('legacy redirects resolve', async ({ page, request }) => {
    for (const [source, destination] of [
      ['/programmes', '/projects'],
      ['/get-involved', '/donate'],
    ] as const) {
      const response = await request.get(source, { maxRedirects: 0 });
      expect([301, 308]).toContain(response.status());
      expect(response.headers().location).toMatch(new RegExp(`${destination}$`));
    }

    await goto(page, '/get-involved');
    await expect(page).toHaveURL(/\/donate$/);
  });

  test('volunteer CTA navigates to contact page', async ({ page }) => {
    await goto(page, '/');
    await page.locator('main').getByRole('link', { name: 'Volunteer With Us' }).click();
    await expect(page).toHaveURL(/\/contact\?type=volunteer$/);
    await expect(page.locator('#name')).toBeVisible({ timeout: 15_000 });
  });
});
