import { expect, test } from '@playwright/test';
import { goto } from './fixtures/helpers';

test.describe('404 page @smoke', () => {
  test('shows branded not found page', async ({ page }) => {
    const response = await page.goto('/nonexistent-page-404-test');
    expect(response?.status()).toBe(404);

    const main = page.locator('main');
    await expect(main.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
    await expect(main.getByText("This page doesn't exist, but our work does.")).toBeVisible();
    await expect(page.locator('header').getByText('Wintima Foundation')).toBeVisible();
  });

  test('has helpful recovery links', async ({ page }) => {
    await goto(page, '/this-page-should-not-exist-404');

    const main = page.locator('main');
    await expect(main.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    await expect(main.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    await expect(main.getByRole('link', { name: 'Donate' })).toHaveAttribute('href', '/donate');
  });
});
