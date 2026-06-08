import { expect, test } from '@playwright/test';

test.describe('seo and routing @seo', () => {
  test('sitemap includes public pages and excludes legal pages', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('/about');
    expect(body).toContain('/donate');
    expect(body).toContain('/blog/a-long-journey-to-help');
    expect(body).not.toContain('/privacy');
    expect(body).not.toContain('/terms');
    expect(body).not.toContain('/financial-transparency');
  });

  test('robots.txt allows crawlers and references sitemap', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toMatch(/Allow:\s*\//);
    expect(body).toMatch(/Sitemap:\s*https?:\/\/.+\/sitemap\.xml/);
  });

  test('legacy routes return permanent redirects', async ({ request }) => {
    for (const [source, destination] of [
      ['/programmes', '/projects'],
      ['/programmes/northern-stars', '/projects'],
      ['/get-involved', '/donate'],
    ] as const) {
      const response = await request.get(source, { maxRedirects: 0 });
      expect([301, 308]).toContain(response.status());
      expect(response.headers().location).toMatch(new RegExp(`${destination}$`));
    }
  });

  test('about page title is not duplicated', async ({ page }) => {
    await page.goto('/about', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle('About Us | Wintima Foundation');
  });

  test('not-found page includes helpful recovery links', async ({ page }) => {
    await page.goto('/this-page-should-not-exist-404', { waitUntil: 'domcontentloaded' });

    const main = page.locator('main');

    await expect(main.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
    await expect(main.getByText("This page doesn't exist, but our work does.")).toBeVisible();
    await expect(main.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    await expect(main.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    await expect(main.getByRole('link', { name: 'Donate' })).toHaveAttribute('href', '/donate');
  });
});
