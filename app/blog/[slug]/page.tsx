import React from "react";
import { notFound } from "next/navigation";
import { BlogPostClient } from "./blog-post-client";

// Sample blog data (same as in main blog page)
const blogPosts = [
  {
    id: 1,
    slug: "transforming-lives-through-mentorship",
    title: "Transforming Lives Through Mentorship: The Northern Stars Success Story",
    excerpt: "Discover how our flagship mentorship program is creating lasting change in the lives of students across Northern Ghana, connecting them with global mentors who believe in their potential.",
    content: `
      <p>The Northern Stars Mentorship Program has been at the heart of our mission since day one. What started as a simple idea to connect rural students with mentors has evolved into a comprehensive support system that's transforming lives across Northern Ghana.</p>
      
      <h2>The Challenge We Faced</h2>
      <p>In many rural communities of Northern Ghana, talented students face significant barriers to pursuing higher education. Limited access to guidance, lack of role models, and insufficient resources often prevent bright minds from reaching their full potential.</p>
      
      <p>When we first visited these communities, we met countless brilliant young people who had dreams of becoming doctors, engineers, teachers, and leaders, but lacked the guidance and support needed to turn those dreams into reality. The gap between potential and opportunity was heartbreaking.</p>
      
      <h2>Our Solution</h2>
      <p>The Northern Stars program bridges this gap by connecting students with mentors from around the world. These mentors provide not just academic guidance, but also emotional support, career advice, and most importantly, belief in their mentees' potential.</p>
      
      <p>Each mentorship relationship is carefully matched based on academic interests, career goals, and personality compatibility. Our mentors undergo comprehensive training to understand the cultural context and specific challenges their mentees face.</p>
      
      <h2>Real Impact Stories</h2>
      <p>Take Amina, a 17-year-old from Tamale who dreams of becoming a doctor. Through her mentor Sarah, a medical student in Canada, Amina has gained confidence in her abilities and clear direction for her future. Sarah helped Amina navigate the complex university application process and provided emotional support during challenging times.</p>
      
      <p>Or consider Kwame, who was struggling with mathematics until his mentor, a software engineer from Germany, introduced him to coding. Today, Kwame is not only excelling in math but has also developed a passion for computer science that's opening new possibilities for his future.</p>
      
      <h2>The Ripple Effect</h2>
      <p>The impact extends far beyond individual students. When these young people succeed, they become role models in their communities, inspiring other children to dream big and work hard. They also often return to give back, creating a cycle of positive change that continues to grow.</p>
      
      <h2>Looking Forward</h2>
      <p>As we continue to grow, our goal is to reach even more students and create a network of support that extends far beyond graduation. The Northern Stars program isn't just about education – it's about empowerment, hope, and building bridges across cultures.</p>
      
      <p>We're also developing an alumni network where former mentees can stay connected with each other and their mentors, and eventually become mentors themselves. This creates a sustainable ecosystem of support that can last for generations.</p>
    `,
    author: "Dr. Amina Hassan",
    authorRole: "Programs Director",
    authorBio: "Dr. Hassan leads our educational programs with over 15 years of experience in international development and education. She holds a PhD in Educational Psychology and is passionate about creating opportunities for underserved youth.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Mentorship",
    tags: ["Northern Stars", "Education", "Mentorship", "Success Stories"],
    image: "/api/placeholder/1200/600",
    featured: true,
    views: 1420,
    likes: 89
  },
  {
    id: 2,
    slug: "diabetes-awareness-rural-communities",
    title: "Breaking Barriers: Diabetes Awareness in Rural Communities",
    excerpt: "How the J&C Diabetes Outreach program is revolutionizing health education and screening in underserved areas, honoring the memory of Charles and Juliet while saving lives.",
    content: `
      <p>The J&C Diabetes Outreach program holds a special place in our hearts and work. Named in honor of Charles and Juliet, this initiative has become a beacon of hope for communities struggling with diabetes awareness and care.</p>
      
      <h2>The Growing Health Crisis</h2>
      <p>Diabetes is increasingly prevalent in Ghana, yet many rural communities lack access to proper screening, education, and treatment. The consequences of undiagnosed diabetes can be devastating for individuals and families.</p>
      
      <h2>Our Comprehensive Approach</h2>
      <p>Our outreach program doesn't just focus on screening – we provide comprehensive education about diabetes prevention, management, and the importance of regular health check-ups. We work closely with local health centers to ensure continuity of care.</p>
      
      <h2>Community Champions</h2>
      <p>We've trained local volunteers to become diabetes awareness champions in their communities. These individuals help us reach more people and ensure that health education continues long after our visits.</p>
      
      <h2>Measurable Impact</h2>
      <p>To date, we've conducted over 300 screenings and identified numerous cases of undiagnosed diabetes. More importantly, we've empowered communities with knowledge to prevent and manage this condition.</p>
    `,
    author: "Samuel Osei",
    authorRole: "Community Liaison",
    authorBio: "Samuel serves as our bridge between the foundation and local communities. Born and raised in Northern Ghana, he brings deep cultural understanding and community connections to our work.",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Health",
    tags: ["Diabetes", "Health Screening", "Community Outreach", "Prevention"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 892,
    likes: 67
  },
  {
    id: 3,
    slug: "power-of-community-giving",
    title: "The Power of Community Giving: Building Stronger Bonds",
    excerpt: "Explore how our annual community giving initiatives strengthen relationships, provide essential support, and create lasting positive change in Northern Ghana.",
    content: `
      <p>Community giving is more than just distributing items – it's about building relationships, understanding needs, and creating a foundation for sustainable development. Our annual giving program has become a cornerstone of community engagement.</p>
      
      <h2>Understanding Real Needs</h2>
      <p>We spend months before each distribution talking with community leaders, families, and individuals to understand their most pressing needs. This ensures our giving is targeted and meaningful.</p>
      
      <h2>Beyond Material Support</h2>
      <p>While we provide essential items like school supplies, clothing, and household goods, the real impact comes from the connections we build and the trust we establish within communities.</p>
      
      <h2>Sustainable Impact</h2>
      <p>Our giving program is designed to create ripple effects. When we support a child's education with supplies, we're investing in the future of the entire community. When we provide health-related items, we're promoting family wellness.</p>
      
      <h2>Community Ownership</h2>
      <p>We always work with local leaders and volunteers to ensure our initiatives are culturally appropriate and community-driven. This approach has led to lasting partnerships and sustainable change.</p>
    `,
    author: "Sarah Williams",
    authorRole: "International Relations",
    authorBio: "Sarah coordinates our international partnerships and volunteer programs. With a background in international relations and nonprofit management, she ensures our global connections strengthen local impact.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Community",
    tags: ["Community Giving", "Sustainability", "Partnerships", "Impact"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 756,
    likes: 45
  },
  {
    id: 4,
    slug: "cultural-bridge-building-through-education",
    title: "Cultural Bridge Building Through Education",
    excerpt: "How our programs create meaningful connections between cultures, fostering understanding and collaboration across continents while preserving local traditions.",
    content: `
      <p>One of the most beautiful aspects of our work is how it brings together people from different cultures and backgrounds. Our programs create bridges that span continents and create lasting friendships.</p>
      
      <h2>Learning Goes Both Ways</h2>
      <p>While our mentors provide guidance to students, they also learn immensely about Ghanaian culture, traditions, and perspectives. This exchange enriches everyone involved.</p>
      
      <h2>Preserving Cultural Identity</h2>
      <p>We're committed to ensuring that our programs strengthen rather than diminish local cultural identity. Students are encouraged to share their heritage and traditions with their mentors.</p>
      
      <h2>Global Perspectives</h2>
      <p>Our students gain exposure to global perspectives while remaining grounded in their own cultural values. This balance is crucial for developing well-rounded, confident global citizens.</p>
      
      <h2>Building Understanding</h2>
      <p>Through our programs, we're not just educating students – we're building cross-cultural understanding that breaks down barriers and creates lasting connections between communities worldwide.</p>
    `,
    author: "John Doe",
    authorRole: "Chairman",
    authorBio: "John founded the Wintima Foundation with a vision of connecting communities across the globe. His leadership experience spans both corporate and nonprofit sectors, focusing on sustainable development.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Culture",
    tags: ["Cultural Exchange", "Global Citizenship", "Traditions", "Understanding"],
    image: "/api/placeholder/1200/600",
    featured: true,
    views: 1156,
    likes: 78
  },
  {
    id: 5,
    slug: "volunteer-spotlight-making-difference",
    title: "Volunteer Spotlight: Making a Difference from Afar",
    excerpt: "Meet our incredible volunteers who are making a real impact in Northern Ghana from around the world, and learn how you can join this amazing community of changemakers.",
    content: `
      <p>Our volunteers are the backbone of everything we do. From mentors who spend hours each week guiding students to content creators who help us share our story, each volunteer makes a unique and valuable contribution.</p>
      
      <h2>Meet Our Volunteers</h2>
      <p>Maria, a software engineer from Spain, has been mentoring students for two years. Her technical expertise has helped several students pursue STEM careers. James, a retired teacher from Australia, brings decades of educational experience to our literacy programs.</p>
      
      <h2>Virtual Volunteering</h2>
      <p>Technology has enabled us to engage volunteers from around the world. Our virtual mentorship sessions, online workshops, and digital collaboration tools have made global volunteering more accessible than ever.</p>
      
      <h2>Skills-Based Volunteering</h2>
      <p>We match volunteers with opportunities that align with their skills and interests. Whether you're a professional in healthcare, education, technology, or any other field, there's a way for you to contribute meaningfully.</p>
      
      <h2>Building a Community</h2>
      <p>Our volunteers often form lasting friendships with each other and with the communities they serve. Annual volunteer gatherings and regular check-ins help maintain these important connections.</p>
    `,
    author: "Jane Smith",
    authorRole: "Secretary",
    authorBio: "Jane manages our volunteer coordination and administrative functions. Her organizational skills and passion for community building help create meaningful connections between volunteers and our mission.",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Volunteering",
    tags: ["Volunteers", "Remote Work", "Community", "Skills"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 634,
    likes: 52
  },
  {
    id: 6,
    slug: "sustainable-development-goals-alignment",
    title: "Aligning with Sustainable Development Goals",
    excerpt: "Discover how our programs directly contribute to the UN Sustainable Development Goals and our commitment to creating measurable, sustainable impact in Northern Ghana.",
    content: `
      <p>Our work is deeply aligned with the United Nations Sustainable Development Goals (SDGs). This alignment ensures that our efforts contribute to global development priorities while addressing local needs.</p>
      
      <h2>Quality Education (SDG 4)</h2>
      <p>Through the Northern Stars program, we're directly supporting quality education by providing mentorship, resources, and guidance to students who might otherwise lack access to educational support.</p>
      
      <h2>Good Health and Well-being (SDG 3)</h2>
      <p>Our diabetes outreach program contributes to better health outcomes by providing screening, education, and ongoing support for diabetes prevention and management.</p>
      
      <h2>Reduced Inequalities (SDG 10)</h2>
      <p>By focusing on underserved rural communities, we're working to reduce inequalities in access to education, healthcare, and opportunities for personal development.</p>
      
      <h2>Partnerships for Goals (SDG 17)</h2>
      <p>Our collaborative approach, working with local communities, international volunteers, and partner organizations, exemplifies the kind of partnerships needed to achieve the SDGs.</p>
      
      <h2>Measuring Impact</h2>
      <p>We continuously measure our progress against SDG indicators to ensure our work is making a meaningful contribution to global development goals while meeting local needs.</p>
    `,
    author: "Michael Johnson",
    authorRole: "Treasurer",
    authorBio: "Michael oversees our financial operations and impact measurement. With a background in finance and development economics, he ensures our resources are used effectively and transparently.",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Impact",
    tags: ["SDGs", "Sustainability", "Impact Measurement", "Global Goals"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 445,
    likes: 34
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category or similar tags)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
} 