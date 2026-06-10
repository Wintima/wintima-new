import { describe, expect, it } from 'vitest';
import { buildAbsoluteTitle, buildPageMetadata } from '@/lib/seo/metadata';

describe('buildAbsoluteTitle', () => {
  it('returns the site name unchanged when passed the site name', () => {
    expect(buildAbsoluteTitle('Wintima Foundation')).toBe('Wintima Foundation');
  });

  it('appends the site name for page titles', () => {
    expect(buildAbsoluteTitle('About Us')).toBe('About Us | Wintima Foundation');
  });
});

describe('buildPageMetadata', () => {
  it('uses an absolute title to avoid layout template duplication', () => {
    const metadata = buildPageMetadata({
      title: 'About Us',
      description: 'Learn about our mission.',
      path: '/about',
    });

    expect(metadata.title).toEqual({ absolute: 'About Us | Wintima Foundation' });
    expect(metadata.alternates?.canonical).toBe('/about');
    expect(metadata.openGraph?.title).toBe('About Us | Wintima Foundation');
    expect(metadata.twitter).toMatchObject({ card: 'summary_large_image' });
  });
});
