import AxeBuilder from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';

export async function checkAccessibility(page: Page, options: { scope?: string } = {}) {
  await page.addStyleTag({
    content:
      '*, *::before, *::after { animation-duration: 0s !important; animation-delay: 0s !important; transition-duration: 0s !important; transition-delay: 0s !important; opacity: 1 !important; transform: none !important; }',
  });
  await page.waitForTimeout(100);
  let builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

  if (options.scope) {
    builder = builder.include(options.scope);
  }

  const results = await builder.analyze();
  const serious = results.violations.filter((violation) =>
    ['critical', 'serious'].includes(violation.impact ?? '')
  );

  expect(serious).toEqual([]);
}
