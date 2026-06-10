import { expect, test } from '@playwright/test';
import { checkAccessibility } from '../fixtures/accessibility';
import {
  assertNoConsoleErrors,
  assertNoHorizontalOverflow,
  attachConsoleErrorCollector,
  goto,
  waitForContactForm,
} from '../fixtures/helpers';
import { VIEWPORTS } from '../fixtures/routes';

test.describe('contact page @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, '/contact');
    await waitForContactForm(page);
  });

  test('renders contact form and info', async ({ page }) => {
    const errors = attachConsoleErrorCollector(page);

    await expect(page.getByRole('heading', { level: 1, name: /Get in Touch/i })).toBeVisible();
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.getByText('wintimafoundation@gmail.com').first()).toBeVisible();

    await assertNoConsoleErrors(errors);
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toBeVisible();
    await form.evaluate((element) => element.setAttribute('novalidate', 'novalidate'));

    await expect(async () => {
      await page.getByRole('button', { name: 'Send Message' }).click();
      await expect(page.locator('#name')).toHaveAttribute('aria-invalid', 'true');
      await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'true');
    }).toPass({ timeout: 15_000 });
  });

  test('shows error for invalid email', async ({ page }) => {
    await page.evaluate(() => {
      document.querySelector('form')?.setAttribute('novalidate', 'novalidate');
    });
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('not-an-email');
    await page.locator('#subject').fill('Test subject line');
    await page.locator('#message').fill('This is a test message with enough characters.');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.locator('#email-error')).toContainText(/valid email/i);
  });

  test('shows success state after valid submission', async ({ page }) => {
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#subject').fill('Test subject line');
    await page.locator('#message').fill('This is a test message with enough characters.');
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText("Thank you! We'll get back to you soon.")).toBeVisible({
      timeout: 15_000,
    });
  });

  test('volunteer query param loads contact page', async ({ page }) => {
    await goto(page, '/contact?type=volunteer');
    await waitForContactForm(page);
    await expect(page).toHaveURL(/\/contact\?type=volunteer$/);
  });

  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    if (name === 'narrow') continue;
    test(`renders without horizontal overflow at ${name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/contact');
      await assertNoHorizontalOverflow(page);
    });
  }

  test('passes accessibility scan on main content', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Tell Us How We Can Help' })).toBeVisible();
    await checkAccessibility(page, { scope: 'main' });
    await expect(page.locator('main h1')).toHaveCount(1);
  });
});
