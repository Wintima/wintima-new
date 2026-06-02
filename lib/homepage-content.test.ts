import { describe, expect, it } from 'vitest';
import {
  connectLinks,
  featuredProject,
  featuredProjectTotal,
  focusAreas,
  homepageCta,
  homepageHero,
  impactTimeline,
} from './homepage-content';

describe('homepage content', () => {
  it('uses valid hero content and CTA links', () => {
    expect(homepageHero.title).toBeTruthy();
    expect(homepageHero.description.length).toBeGreaterThan(40);
    expect(homepageHero.image).toMatch(/^\/images\/.+\.jpg$/);
    expect(homepageHero.imageAlt).toBeTruthy();
    expect(homepageHero.ctas).toHaveLength(2);
    expect(homepageHero.ctas.every((cta) => cta.href.startsWith('/'))).toBe(true);
  });

  it('models a complete featured project and accessible budget total', () => {
    expect(featuredProject.title).toBeTruthy();
    expect(featuredProject.location).toContain('Ghana');
    expect(featuredProject.description.length).toBeGreaterThan(40);
    expect(featuredProject.deliverables.length).toBeGreaterThanOrEqual(5);
    expect(featuredProject.costs.every((cost) => cost.amount > 0)).toBe(true);
    expect(featuredProjectTotal).toBe(50000);
  });

  it('covers the six real mission focus areas', () => {
    expect(focusAreas.map((area) => area.title)).toEqual([
      'School supplies & uniforms',
      'Sanitary pads',
      'Mentorship programs',
      'School infrastructure',
      'Community reading spaces',
      'Vocational skills',
    ]);
  });

  it('keeps the full impact timeline in chronological order', () => {
    expect(impactTimeline).toHaveLength(9);
    expect(impactTimeline.map((item) => item.year)).toEqual(
      [...impactTimeline].map((item) => item.year).sort()
    );
    expect(impactTimeline.every((item) => item.location && item.school)).toBe(true);
  });

  it('uses authentic contribution and contact links', () => {
    expect(homepageCta.ctas.map((cta) => cta.href)).toEqual(['/donate', '/contact?type=volunteer']);
    expect(connectLinks.map((link) => link.href)).toEqual([
      'https://www.linkedin.com/company/wintima-foundation/',
      'https://www.instagram.com/wintima.foundation/',
      'mailto:wintimafoundation@gmail.com',
    ]);
  });
});
