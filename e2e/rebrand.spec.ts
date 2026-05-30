import { expect, test, type Page } from "@playwright/test";

const brandedPages = ["/", "/about", "/contact", "/projects"];
const goto = (page: Page, path: string) =>
  page.goto(path, { waitUntil: "domcontentloaded" });

test.describe("wintima rebrand @rebrand", () => {
  test("header shows Wintima Foundation branding", async ({ page }) => {
    await goto(page, "/");
    await expect(page.getByRole("banner").getByText("Wintima Foundation")).toBeVisible();
    await expect(page.locator('header img[src*="logo.png"]')).toBeVisible();
  });

  test("home page title and hero reflect Wintima", async ({ page }) => {
    await goto(page, "/");
    await expect(page).toHaveTitle(/Wintima Foundation/i);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Restoring Smiles|Impacting Lives/i);
  });

  test("home page replaces fabricated sections with issue-approved content", async ({ page }) => {
    await goto(page, "/");
    const main = page.locator("main");

    await expect(main.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(main.getByRole("heading", { name: "Yizidug School Refurbishment" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Education in the Heart of Ghana" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "2015-2025 Milestones" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Every Contribution Keeps a Child in School" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Connect With Wintima" })).toBeVisible();

    await expect(main.getByRole("link", { name: /Support Us/i })).toHaveAttribute("href", "/donate");
    await expect(main.getByRole("link", { name: /Learn More/i })).toHaveAttribute("href", "/about");
    await expect(main.getByRole("link", { name: /Support this project/i })).toHaveAttribute("href", "/donate");

    await expect(main).not.toContainText("Our Impact in Numbers");
    await expect(main).not.toContainText("Northern Stars Mentorship");
    await expect(main).not.toContainText("J&C Diabetes Outreach");
    await expect(main).not.toContainText("Community Giving");
    await expect(main).not.toContainText("Voices of Change");
    await expect(main).not.toContainText("Fatima A.");
    await expect(main).not.toContainText("Subscribe");
    await expect(main).not.toContainText("newsletter");
  });

  test("home page exposes timeline and connection links accessibly", async ({ page }) => {
    await goto(page, "/");

    const timeline = page.locator('main ol[aria-label*="impact milestones"]');
    await expect(timeline.locator("li")).toHaveCount(9);
    await expect(timeline).toContainText("2015");
    await expect(timeline).toContainText("2025");
    await expect(timeline.locator("li[tabindex]")).toHaveCount(0);

    await expect(page.locator('main a[href="https://www.linkedin.com/company/wintima-foundation/"]')).toBeVisible();
    await expect(page.locator('main a[href="https://www.instagram.com/wintima.foundation/"]')).toBeVisible();
    await expect(page.locator('main a[href="mailto:wintimafoundation@gmail.com"]')).toBeVisible();
  });

  test("route aliases for homepage CTAs resolve", async ({ page }) => {
    const donateResponse = await page.request.get("/donate");
    expect(donateResponse.status()).toBeLessThan(400);
    expect(donateResponse.url()).toMatch(/\/get-involved(#donate)?$/);

    const projectsResponse = await page.request.get("/projects");
    expect(projectsResponse.status()).toBeLessThan(400);
    expect(projectsResponse.url()).toMatch(/\/projects$/);

    const programmesResponse = await page.request.get("/programmes");
    expect(programmesResponse.status()).toBeLessThan(400);
    expect(programmesResponse.url()).toMatch(/\/projects$/);
  });

  test("volunteer CTA preselects volunteer inquiry type", async ({ page }) => {
    await goto(page, "/");
    await page.locator("main").getByRole("link", { name: "Volunteer With Us" }).click();
    await expect(page).toHaveURL(/\/contact\?type=volunteer$/);
    await expect(page.locator("#type")).toHaveValue("volunteer");
  });

  for (const viewport of [
    { name: "iPhone SE", width: 375, height: 667 },
    { name: "iPhone 14", width: 390, height: 844 },
    { name: "iPad", width: 768, height: 1024 },
    { name: "MacBook", width: 1440, height: 900 },
  ]) {
    test(`home page is responsive on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await goto(page, "/");

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
      });
      expect(hasHorizontalOverflow).toBe(false);

      for (const name of ["Support Us", "Learn More"]) {
        const cta = page.getByRole("link", { name, exact: true });
        const box = await cta.boundingBox();
        expect(box?.height).toBeGreaterThanOrEqual(44);
        expect(box?.width).toBeGreaterThanOrEqual(44);
      }
    });
  }

  for (const path of brandedPages) {
    test(`no Yeremallu references on ${path}`, async ({ page }) => {
      await goto(page, path);
      const bodyText = await page.locator("body").innerText();
      expect(bodyText.toLowerCase()).not.toContain("yeremallu");
      expect(bodyText.toLowerCase()).not.toContain("yeremallufoundation.org");
    });
  }

  test("footer uses Wintima contact details", async ({ page }) => {
    await goto(page, "/");
    const footer = page.locator("footer");
    await expect(footer.getByText("Wintima Foundation", { exact: true })).toBeVisible();
    await expect(footer.getByRole("link", { name: /wintimafoundation@gmail.com/i })).toBeVisible();
    await expect(footer.getByText("Upper East Region", { exact: true })).toBeVisible();
  });

  test("footer social links point to Wintima profiles", async ({ page }) => {
    await goto(page, "/");
    await expect(page.locator('footer a[href*="instagram.com/wintima.foundation"]')).toHaveCount(1);
    await expect(page.locator('footer a[href*="linkedin.com/company/wintima-foundation"]')).toHaveCount(1);
  });

  test("about page keeps founder content while home page avoids founder teaser", async ({ page }) => {
    await goto(page, "/");
    await expect(page.locator("main")).not.toContainText(/Janet Zeylisa Dauda/i);

    await goto(page, "/about");
    await expect(page.locator("main").getByText(/Janet Zeylisa Dauda/i).first()).toBeVisible();
  });

  test("mobile menu shows Wintima branding", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await goto(page, "/");
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.getByText("Wintima Foundation").nth(1)).toBeVisible();
    await expect(page.locator('[data-slot="sheet-content"] img[src*="logo.png"]')).toBeVisible();
  });
});
