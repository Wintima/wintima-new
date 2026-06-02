import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartHandshake,
  Library,
  PackageCheck,
} from 'lucide-react';

export const homepageHero = {
  title: 'Restoring Smiles, Impacting Lives',
  description:
    "Wintima Foundation is an education-focused non-profit ensuring children in Ghana's rural communities have access to quality education.",
  image: '/images/wintima-15.jpg',
  imageAlt:
    'Wintima Foundation volunteers and students gathered during an education outreach in rural Ghana',
  ctas: [
    { text: 'Support Us', href: '/donate', variant: 'primary' as const },
    { text: 'Learn More', href: '/about', variant: 'secondary' as const },
  ],
};

export const featuredProject = {
  eyebrow: 'Current Initiative',
  title: 'Yizidug School Refurbishment',
  location: 'Yizidug, Upper East Region, Ghana',
  description:
    'The school faces infrastructure challenges including broken doors, damaged windows, and leaking roofs. Students currently sit on the floor during lessons.',
  image: '/images/wintima-16.jpg',
  imageAlt: 'Students at a rural Ghanaian school receiving support from Wintima Foundation',
  deliverables: ['Desks', 'Classroom painting', 'Windows', 'Doors', 'Roofing'],
  costs: [
    { label: 'Classroom Doors', amount: 12000 },
    { label: 'Windows', amount: 10000 },
    { label: 'Roofing', amount: 10000 },
    { label: 'Labour & Misc.', amount: 18000 },
  ],
  cta: { text: 'Support this project', href: '/donate' },
};

export const featuredProjectTotal = featuredProject.costs.reduce(
  (total, item) => total + item.amount,
  0
);

export const focusAreas = [
  {
    title: 'School supplies & uniforms',
    description:
      'Provide the learning materials and clothing children need to attend school with dignity.',
    icon: PackageCheck,
  },
  {
    title: 'Sanitary pads',
    description:
      'Support female students with menstrual care so school attendance is not interrupted.',
    icon: HeartHandshake,
  },
  {
    title: 'Mentorship programs',
    description:
      'Connect young learners with guidance, encouragement, and practical pathways forward.',
    icon: GraduationCap,
  },
  {
    title: 'School infrastructure',
    description:
      'Repair classrooms and provide desks, doors, windows, and safer learning environments.',
    icon: Building2,
  },
  {
    title: 'Community reading spaces',
    description: 'Create box libraries and reading corners that make books easier to reach.',
    icon: Library,
  },
  {
    title: 'Vocational skills',
    description:
      'Help community members build practical skills that strengthen household resilience.',
    icon: BriefcaseBusiness,
  },
];

export const impactTimeline = [
  {
    year: '2015',
    location: 'Zaari',
    school: 'Kolemasega Basic School',
    description: 'First donation supporting pupils with essential school items.',
    image: '/images/wintima-1.jpg',
  },
  {
    year: '2016',
    location: 'Bolgatanga',
    school: 'ChangeMakers Girl Club',
    description: "Girls' club launched to encourage confidence and peer support.",
    image: '/images/wintima-2.jpg',
  },
  {
    year: '2017',
    location: 'Zaari',
    school: 'Zaari Primary School',
    description: 'Educational materials distributed to help pupils stay equipped.',
    image: '/images/wintima-3.jpg',
  },
  {
    year: '2018',
    location: 'Yizidug',
    school: 'Yizidug Basic School',
    description: '"Dressing a Student" project clothed 25 children for school.',
    image: '/images/wintima-4.jpg',
  },
  {
    year: '2019',
    location: 'Nisbuliga',
    school: 'Nisbuliga Basic School',
    description: 'Uniforms, sanitary pads, and learning materials provided.',
    image: '/images/wintima-5.jpg',
  },
  {
    year: '2021',
    location: 'Yizidug',
    school: 'Yizidug Basic School',
    description: 'Box Library Project and uniform support expanded access to books.',
    image: '/images/wintima-6.jpg',
  },
  {
    year: '2022',
    location: 'Kpatua',
    school: 'Kpatua Primary School',
    description: 'Floor mats and sanitary pads supplied to support daily learning.',
    image: '/images/wintima-7.jpg',
  },
  {
    year: '2024',
    location: 'Kpatua',
    school: 'Kpatua Primary School',
    description: 'Fifty dual desks supplied so more pupils could sit and learn.',
    image: '/images/wintima-8.jpg',
  },
  {
    year: '2025',
    location: 'Yizidug',
    school: 'Yizidug Primary School',
    description: 'Assessment visit documented infrastructure needs for refurbishment.',
    image: '/images/wintima-9.jpg',
  },
];

export const homepageCta = {
  title: 'Every Contribution Keeps a Child in School',
  description:
    'Wintima Foundation is volunteer-run. Every pesewa goes directly to children in rural communities across Ghana.',
  ctas: [
    { text: 'Donate Now', href: '/donate' },
    { text: 'Volunteer With Us', href: '/contact?type=volunteer' },
  ],
};

export const connectLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/wintima-foundation/',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wintima.foundation/',
  },
  {
    name: 'Email',
    href: 'mailto:wintimafoundation@gmail.com',
  },
];

export const homepageSectionLinks = {
  about: { text: 'Read more about Wintima', href: '/about' },
  projects: { text: 'See all projects', href: '/projects' },
};
