import { expect, test } from '@playwright/test';

const coreRoutes = [
  { path: '/', heading: /Restoring Smiles|Empowering|Wintima/i },
  { path: '/about', heading: /Our Story|About|Mission/i },
  { path: '/projects', heading: /Projects|Impact/i },
  { path: '/gallery', heading: /Gallery/i },
  { path: '/blog', heading: /Blog|Stories|News/i },
  { path: '/contact', heading: /Contact|Get in Touch/i },
  { path: '/get-involved', heading: /Involved|Volunteer|Donate|Support/i },
];

test.describe('legacy smoke @legacy', () => {
  for (const route of coreRoutes) {
    test(`loads ${route.path}`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });
  }

  test('old programme subpages redirect to projects', async ({ page }) => {
    const subpages = [
      '/programmes/northern-stars',
      '/programmes/diabetes-outreach',
      '/programmes/community-giving',
    ];

    for (const path of subpages) {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page).toHaveURL(/\/projects$/);
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('footer quick links navigate', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation', { name: 'Footer navigation' })
      .getByRole('link', { name: 'About', exact: true })
      .click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('legal pages load', async ({ page }) => {
    for (const path of ['/privacy', '/terms', '/financial-transparency']) {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
    }
  });

  test('unknown route shows not found', async ({ page }) => {
    const response = await page.goto('/this-page-should-not-exist-404');
    expect(response?.status()).toBe(404);
  });
});
