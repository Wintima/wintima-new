import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, DEFAULT_SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo/site';

type BuildPageMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

export function buildAbsoluteTitle(title: string): string {
  if (title === SITE_NAME) {
    return SITE_NAME;
  }

  return `${title} | ${SITE_NAME}`;
}

export function buildPageMetadata({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: BuildPageMetadataOptions): Metadata {
  const absoluteTitle = buildAbsoluteTitle(title);
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: {
      absolute: absoluteTitle,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: absoluteTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Restoring smiles, impacting lives through education in Ghana`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle,
      description,
      images: [image],
    },
  };
}

export function buildBlogPostMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  publishedTime: string;
}): Metadata {
  const absoluteTitle = buildAbsoluteTitle(title);
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: {
      absolute: absoluteTitle,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: absoluteTitle,
      description,
      publishedTime,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle,
      description,
      images: [image],
    },
  };
}
