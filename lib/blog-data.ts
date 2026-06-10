export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  datetime: string;
  location: string;
  image: string;
  imageAlt: string;
  author?: string;
  sections: BlogSection[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'a-long-journey-to-help',
    title: 'A Long Journey To Help',
    excerpt:
      'It all started on a sunny Friday at the O.A. station in Circle. A team of Wintima volunteers set off on an 18-hour journey to the Upper East Region to deliver books, uniforms, and sanitary supplies to Yizidug Basic School.',
    dateLabel: 'December 2021',
    datetime: '2021-12',
    location: 'Yizidug, Upper East',
    image: '/images/wintima-3.jpg',
    imageAlt:
      'Wintima Foundation volunteers distributing educational supplies to students in Ghana',
    author: 'Wintima Foundation volunteers',
    sections: [
      {
        paragraphs: [
          'It all started on a sunny Friday at the O.A. station in Circle. A team of Wintima volunteers set off on an 18-hour journey to the Upper East Region to deliver books, uniforms, and sanitary supplies to Yizidug Basic School.',
          'The trip brought together volunteers, donated materials, and a shared belief that practical support can help children stay in school with dignity.',
        ],
      },
      {
        heading: 'The Journey North',
        paragraphs: [
          'The road to Yizidug was long, but the purpose was clear. Every packed item represented a child who could walk into class with one fewer barrier in the way.',
          'By the time the team arrived, the journey had become more than a delivery. It was a reminder of why Wintima Foundation continues to show up for rural schools in Ghana.',
        ],
      },
      {
        heading: 'Arriving in Yizidug',
        paragraphs: [
          'At Yizidug Basic School, the volunteers met students, teachers, and community members whose welcome made the long trip worthwhile.',
          'Books, uniforms, and sanitary supplies were shared with care, supporting both classroom learning and the everyday needs that affect attendance.',
        ],
      },
      {
        heading: 'Why This Work Matters',
        paragraphs: [
          'Field visits like this help Wintima Foundation understand what students and schools need most. They also keep the work personal, grounded, and accountable to the communities being served.',
          "More stories from the field will continue to share the people, places, and moments behind Wintima Foundation's education-focused work.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentPost.slug);
}
