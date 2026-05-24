import { test, expect } from "@playwright/test";

const brandedPages = ["/", "/about", "/contact", "/programmes"];

test.describe("wintima rebrand @rebrand", () => {
  test("header shows Wintima Foundation branding", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner").getByText("Wintima Foundation")).toBeVisible();
    await expect(page.locator('header img[src*="logo.png"]')).toBeVisible();
  });

  test("home page title and hero reflect Wintima", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Wintima Foundation/i);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Restoring Smiles|Impacting Lives/i);
  });

  for (const path of brandedPages) {
    test(`no Yeremallu references on ${path}`, async ({ page }) => {
      await page.goto(path);
      const bodyText = await page.locator("body").innerText();
      expect(bodyText.toLowerCase()).not.toContain("yeremallu");
      expect(bodyText.toLowerCase()).not.toContain("yeremallufoundation.org");
    });
  }

  test("footer uses Wintima contact details", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByText("Wintima Foundation", { exact: true })).toBeVisible();
    await expect(footer.getByRole("link", { name: /wintimafoundation@gmail.com/i })).toBeVisible();
    await expect(footer.getByText("Upper East Region", { exact: true })).toBeVisible();
  });

  test("footer social links point to Wintima profiles", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('footer a[href*="instagram.com/wintima.foundation"]')).toHaveCount(1);
    await expect(page.locator('footer a[href*="linkedin.com/company/wintima-foundation"]')).toHaveCount(1);
  });

  test("founder section uses founder image on home", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('img[src*="founder.jpg"]')).toBeVisible();
    await expect(page.getByText(/Janet Zeylisa Dauda/i)).toBeVisible();
  });

  test("mobile menu shows Wintima branding", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.getByText("Wintima Foundation").nth(1)).toBeVisible();
    await expect(page.locator('[data-slot="sheet-content"] img[src*="logo.png"]')).toBeVisible();
  });
});
