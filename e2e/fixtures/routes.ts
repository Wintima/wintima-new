export type RouteConfig = {
  path: string;
  h1: RegExp | string;
  title?: RegExp | string;
};

export const PRIMARY_ROUTES: RouteConfig[] = [
  { path: '/', h1: /Restoring Smiles|Impacting Lives/i, title: /Wintima Foundation/i },
  { path: '/about', h1: /Education in the Heart of Ghana/i, title: /About Us/i },
  { path: '/projects', h1: /A Decade of Impact/i, title: /Our Projects/i },
  { path: '/team', h1: /Meet the People Behind the Work/i, title: /Our Team/i },
  { path: '/blog', h1: /Stories from the Field/i, title: /Blog/i },
  { path: '/gallery', h1: /Project Gallery/i, title: /Gallery/i },
  { path: '/donate', h1: /Support Us/i, title: /Donate/i },
  { path: '/contact', h1: /Get in Touch/i, title: /Contact Us/i },
];

export const LEGAL_ROUTES = ['/privacy', '/terms', '/financial-transparency'] as const;

export const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
  narrow: { width: 320, height: 568 },
} as const;

export const TEAM_MEMBERS = [
  'Janet Zeylisa Dauda',
  'Denzel Oduro',
  'Esmeralda Afenyo',
  'Gilgal Ansah',
  'Beryl Brown',
  'Prince Tuffour',
  'Paa Kwabena Dankyi',
  'Hussein Faara',
  'Alfred Oduro',
  'Selina Oduro',
  'Frederick Obboh',
] as const;

export const ABOUT_FOCUS_AREAS = [
  'Uniforms & Footwear',
  'Sanitary Pads',
  'Mentorship',
  'Reading Spaces',
  'Vocational Skills',
  'Non-Academic Support',
] as const;

export const STRATEGY_STEPS = [
  'Educational Wellbeing',
  'Extracurricular Activities',
  'Mentorship Program',
  'Domestic & Community Wellbeing',
] as const;

export const COMPLETED_PROJECT_SCHOOLS = [
  'Kolemasega Basic School',
  'Frafra Catholic School',
  'Zaari Primary School',
  'Yizidug Basic School',
  'Nisbuliga Basic School',
  'Kpatua Primary School',
  'Yizidug Primary School',
] as const;

export const MAIN_NAV_LABELS = [
  'Home',
  'About',
  'Projects',
  'Blog',
  'Gallery',
  'Team',
  'Contact',
] as const;
