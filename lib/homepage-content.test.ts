import { describe, expect, it } from "vitest";
import {
  connectLinks,
  featuredProject,
  featuredProjectTotal,
  focusAreas,
  homepageCta,
  homepageHero,
  impactTimeline,
} from "./homepage-content";

describe("homepage content", () => {
  it("uses issue-approved hero copy and CTA links", () => {
    expect(homepageHero.title).toBe("Restoring Smiles, Impacting Lives");
    expect(homepageHero.description).toContain("education-focused non-profit");
    expect(homepageHero.ctas).toEqual([
      { text: "Support Us", href: "/donate", variant: "primary" },
      { text: "Learn More", href: "/about", variant: "secondary" },
    ]);
  });

  it("models the Yizidug project and accessible budget total", () => {
    expect(featuredProject.title).toBe("Yizidug School Refurbishment");
    expect(featuredProject.deliverables).toEqual([
      "Desks",
      "Classroom painting",
      "Windows",
      "Doors",
      "Roofing",
    ]);
    expect(featuredProjectTotal).toBe(50000);
  });

  it("covers the six real mission focus areas", () => {
    expect(focusAreas.map((area) => area.title)).toEqual([
      "School supplies & uniforms",
      "Sanitary pads",
      "Mentorship programs",
      "School infrastructure",
      "Community reading spaces",
      "Vocational skills",
    ]);
  });

  it("keeps the full impact timeline in chronological order", () => {
    expect(impactTimeline).toHaveLength(9);
    expect(impactTimeline.map((item) => item.year)).toEqual([
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2021",
      "2022",
      "2024",
      "2025",
    ]);
  });

  it("uses authentic contribution and contact links", () => {
    expect(homepageCta.ctas.map((cta) => cta.href)).toEqual([
      "/donate",
      "/contact?type=volunteer",
    ]);
    expect(connectLinks.map((link) => link.href)).toEqual([
      "https://www.linkedin.com/company/wintima-foundation/",
      "https://www.instagram.com/wintima.foundation/",
      "mailto:wintimafoundation@gmail.com",
    ]);
  });
});
