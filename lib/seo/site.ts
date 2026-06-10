export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wintima.org';

export const SITE_NAME = 'Wintima Foundation';

export const DEFAULT_OG_IMAGE = '/metadata-img.png';

export const DEFAULT_SITE_DESCRIPTION =
  'Wintima Foundation is an education-focused non-profit in Ghana ensuring children in rural communities have access to quality education through school supplies, uniforms, mentorship, and infrastructure support.';

export const PAGE_SEO = {
  about: {
    title: 'About Us',
    description:
      "Learn about Wintima Foundation's mission to provide quality education for children in rural Ghana through school supplies, mentorship, and community support.",
  },
  projects: {
    title: 'Our Projects',
    description:
      "Explore Wintima Foundation's decade of educational projects across Ghana's Upper East Region, from school supplies to infrastructure.",
  },
  team: {
    title: 'Our Team',
    description:
      'Meet the volunteers behind Wintima Foundation who work to improve education for children in rural Ghana.',
  },
  blog: {
    title: 'Blog',
    description:
      'Stories from the field about Wintima Foundation volunteers working in rural Ghana schools.',
  },
  gallery: {
    title: 'Gallery',
    description:
      "Photos from Wintima Foundation's educational projects across schools in Ghana's Upper East Region.",
  },
  donate: {
    title: 'Donate',
    description:
      "Support Wintima Foundation's mission to provide quality education for children in rural Ghana. Donate via GoFundMe or Mobile Money.",
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with Wintima Foundation about donations, volunteering, partnerships, or our education projects in rural Ghana.',
  },
} as const;
