import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertImagesLoaded,
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
} from '../fixtures/helpers';
import { TEAM_MEMBERS, VIEWPORTS } from '../fixtures/routes';

test.describe('team page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/team');
  });

  test('renders all team members', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      /Meet the People Behind the Work/i
    );
    for (const member of TEAM_MEMBERS) {
      await expect(page.getByText(member, { exact: true })).toBeVisible();
    }

    await assertImagesLoaded(page);
    await assertNoConsoleErrors(errors);
  });

  test('lists Janet Zeylisa Dauda as Founder', async ({ page }) => {
    await expect(page.getByText('Janet Zeylisa Dauda')).toBeVisible();
    await expect(page.getByText('Founder')).toBeVisible();
  });

  test('shows initials avatars for members without photos', async ({ page }) => {
    const initials = page.locator('[aria-label="Wintima Foundation team members"] [aria-label]');
    const count = await initials.count();
    expect(count).toBeGreaterThan(0);
  });

  test('volunteer CTA section is present', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Want to Volunteer or Join Our Team/i })
    ).toBeVisible();
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/team');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
