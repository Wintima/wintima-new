import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertImagesHaveAlt,
  assertImagesLoaded,
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { VIEWPORTS } from '../fixtures/routes';

test.describe('home page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/');
  });

  test('renders hero and key sections', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);
    const main = page.locator('main');

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      /Restoring Smiles|Impacting Lives/i
    );
    await expect(main.getByRole('heading', { name: 'Yizidug School Refurbishment' })).toBeVisible();
    await expect(main.getByRole('heading', { name: '2015-2025 Milestones' })).toBeVisible();
    await expect(main.getByRole('heading', { name: 'Connect With Wintima' })).toBeVisible();

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('CTA buttons navigate correctly', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Support Us', exact: true })).toHaveAttribute(
      'href',
      '/donate'
    );
    await expect(page.getByRole('link', { name: /Learn about Wintima/i })).toHaveAttribute(
      'href',
      '/about'
    );
    await expect(page.getByRole('link', { name: /Support this project/i })).toHaveAttribute(
      'href',
      '/donate'
    );
  });

  test('timeline and social links are present', async ({ page }) => {
    const timeline = page.locator('main ol[aria-label*="impact milestones"]');
    await expect(timeline.locator('li')).toHaveCount(9);
    await expect(
      page.locator('main a[href="https://www.linkedin.com/company/wintima-foundation/"]')
    ).toBeVisible();
    await expect(
      page.locator('main a[href="https://www.instagram.com/wintima.foundation/"]')
    ).toBeVisible();
    await expect(page.locator('main a[href="mailto:wintimafoundation@gmail.com"]')).toBeVisible();
  });

  test('has no Yeremallu references', async ({ page }) => {
    const bodyText = await page.locator('body').innerText();
    expect(bodyText.toLowerCase()).not.toContain('yeremallu');
    expect(bodyText.toLowerCase()).not.toContain('yeremallufoundation.org');
  });

  test('does not show founder name on homepage', async ({ page }) => {
    await expect(page.locator('main')).not.toContainText(/Janet Zeylisa Dauda/i);
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await assertImagesHaveAlt(page);
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
