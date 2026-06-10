import { expect, test } from '@playwright/test';
import { collectInternalLinks, goto } from './fixtures/helpers';
import { PRIMARY_ROUTES } from './fixtures/routes';

test.describe('seo @seo', () => {
  for (const route of PRIMARY_ROUTES) {
    test(`${route.path} has required metadata`, async ({ page }) => {
      await goto(page, route.path);

      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      if (route.title) {
        expect(title).toMatch(route.title);
      }

      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        'content',
        /.+/
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /.+/);
      await expect(page.locator('h1')).toHaveCount(1);
    });
  }

  test('about page title is not duplicated', async ({ page }) => {
    await goto(page, '/about');
    await expect(page).toHaveTitle('About Us | Wintima Foundation');
  });

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

  test('internal links do not return 404', async ({ page, baseURL }) => {
    const origin = baseURL ?? 'http://127.0.0.1:3000';
    const visited = new Set<string>();

    for (const route of PRIMARY_ROUTES) {
      await goto(page, route.path);
      const links = await collectInternalLinks(page, origin);

      for (const href of links) {
        if (visited.has(href) || href.includes('#')) continue;
        visited.add(href);

        const response = await page.request.get(href);
        expect(response.status(), `Broken link: ${href}`).toBeLessThan(400);
      }
    }
  });
});
