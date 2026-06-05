export type NavItem = {
  name: string;
  href: string;
};

export type ConnectLink = {
  name: string;
  href: string;
  external: boolean;
};

export const mainNav: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export const donateCta: NavItem = { name: 'Donate', href: '/donate' };

export const footerQuickLinks: NavItem[] = [...mainNav, donateCta];

export const connectLinks: ConnectLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/wintima-foundation/',
    external: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wintima.foundation/',
    external: true,
  },
  {
    name: 'Email',
    href: 'mailto:wintimafoundation@gmail.com',
    external: false,
  },
];

export const foundationTagline = 'Restoring smiles, impacting lives';

export const foundationBrief =
  'An education-focused non-profit in Ghana ensuring children in rural communities have access to quality education.';

export function isNavActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}
