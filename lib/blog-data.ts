export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

export const blogPosts: BlogPost[] = [
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
      
      <p>Recent studies show that diabetes prevalence in Ghana has increased by 300% over the past decade, with rural areas being disproportionately affected. Many people don't even know they have the condition until serious complications arise.</p>
      
      <h2>Our Comprehensive Approach</h2>
      <p>Our outreach program doesn't just focus on screening – we provide comprehensive education about diabetes prevention, management, and the importance of regular health check-ups. We work closely with local health centers to ensure continuity of care.</p>
      
      <p>Each outreach visit includes free blood glucose testing, blood pressure monitoring, educational workshops on nutrition and exercise, and distribution of educational materials in local languages.</p>
      
      <h2>Community Champions</h2>
      <p>We've trained local volunteers to become diabetes awareness champions in their communities. These individuals help us reach more people and ensure that health education continues long after our visits.</p>
      
      <p>Our champions receive ongoing training and support, and they've become trusted sources of health information in their communities. They also help identify people who need follow-up care.</p>
      
      <h2>Measurable Impact</h2>
      <p>To date, we've conducted over 300 screenings and identified numerous cases of undiagnosed diabetes. More importantly, we've empowered communities with knowledge to prevent and manage this condition.</p>
      
      <p>We've also established referral pathways to ensure that people with diabetes receive ongoing care, and we're working with local health facilities to improve diabetes management capabilities.</p>
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
      
      <p>Our needs assessment involves focus groups, household surveys, and consultations with local leaders. We've learned that listening is just as important as giving.</p>
      
      <h2>Beyond Material Support</h2>
      <p>While we provide essential items like school supplies, clothing, and household goods, the real impact comes from the connections we build and the trust we establish within communities.</p>
      
      <p>During each distribution, we spend time with families, share meals, and participate in community celebrations. These moments create bonds that last far beyond the giving events.</p>
      
      <h2>Sustainable Impact</h2>
      <p>Our giving program is designed to create ripple effects. When we support a child's education with supplies, we're investing in the future of the entire community. When we provide health-related items, we're promoting family wellness.</p>
      
      <p>We track the long-term impact of our giving and are proud to see improvements in school attendance, health outcomes, and overall community well-being.</p>
      
      <h2>Community Ownership</h2>
      <p>We always work with local leaders and volunteers to ensure our initiatives are culturally appropriate and community-driven. This approach has led to lasting partnerships and sustainable change.</p>
      
      <p>Local communities now take active roles in organizing distributions, identifying beneficiaries, and even contributing their own resources to support neighbors in need.</p>
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
      
      <p>Many of our international mentors have told us that their relationships with Ghanaian students have profoundly changed their worldview and understanding of global development challenges.</p>
      
      <h2>Preserving Cultural Identity</h2>
      <p>We're committed to ensuring that our programs strengthen rather than diminish local cultural identity. Students are encouraged to share their heritage and traditions with their mentors.</p>
      
      <p>We regularly organize virtual cultural exchange sessions where students present traditional music, dance, storytelling, and local customs to their mentors and the broader volunteer community.</p>
      
      <h2>Global Perspectives</h2>
      <p>Our students gain exposure to global perspectives while remaining grounded in their own cultural values. This balance is crucial for developing well-rounded, confident global citizens.</p>
      
      <p>Through our programs, students learn about different educational systems, career paths, and life experiences from around the world, broadening their horizons while staying connected to their roots.</p>
      
      <h2>Building Understanding</h2>
      <p>Through our programs, we're not just educating students – we're building cross-cultural understanding that breaks down barriers and creates lasting connections between communities worldwide.</p>
      
      <p>These connections often extend beyond the formal program period, with mentors and students maintaining lifelong friendships and many mentors becoming advocates for Ghana and African development in their home countries.</p>
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
      <p>Maria, a software engineer from Spain, has been mentoring students for two years. Her technical expertise has helped several students pursue STEM careers. "Working with my mentees has taught me as much as I've taught them," Maria says. "Their resilience and determination inspire me every day."</p>
      
      <p>James, a retired teacher from Australia, brings decades of educational experience to our literacy programs. He's helped develop our reading curriculum and trains other volunteers in effective teaching methods.</p>
      
      <p>Dr. Fatima, a physician from Canada, leads our health education initiatives and has trained community health workers in diabetes screening techniques. Her expertise has been invaluable in expanding our health programs.</p>
      
      <h2>Virtual Volunteering</h2>
      <p>Technology has enabled us to engage volunteers from around the world. Our virtual mentorship sessions, online workshops, and digital collaboration tools have made global volunteering more accessible than ever.</p>
      
      <p>We use video conferencing, collaborative online platforms, and mobile messaging to maintain regular contact between volunteers and the communities they serve.</p>
      
      <h2>Skills-Based Volunteering</h2>
      <p>We match volunteers with opportunities that align with their skills and interests. Whether you're a professional in healthcare, education, technology, or any other field, there's a way for you to contribute meaningfully.</p>
      
      <p>Our skills-matching process considers not just professional expertise but also personal interests, availability, and cultural sensitivity to ensure successful volunteer-community partnerships.</p>
      
      <h2>Building a Community</h2>
      <p>Our volunteers often form lasting friendships with each other and with the communities they serve. Annual volunteer gatherings and regular check-ins help maintain these important connections.</p>
      
      <p>We host quarterly virtual meetups, an annual in-person conference, and maintain active online communities where volunteers can share experiences, seek advice, and collaborate on projects.</p>
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
      
      <p>We measure our impact against SDG 4 indicators, including completion rates, learning outcomes, and access to higher education opportunities. Our students show significantly higher university enrollment rates compared to regional averages.</p>
      
      <h2>Good Health and Well-being (SDG 3)</h2>
      <p>Our diabetes outreach program contributes to better health outcomes by providing screening, education, and ongoing support for diabetes prevention and management.</p>
      
      <p>We track health indicators including disease detection rates, treatment adherence, and community health knowledge levels to ensure we're making meaningful progress toward SDG 3 targets.</p>
      
      <h2>Reduced Inequalities (SDG 10)</h2>
      <p>By focusing on underserved rural communities, we're working to reduce inequalities in access to education, healthcare, and opportunities for personal development.</p>
      
      <p>Our programs specifically target marginalized populations and ensure that gender, economic status, and geographic location don't become barriers to accessing our services.</p>
      
      <h2>Partnerships for Goals (SDG 17)</h2>
      <p>Our collaborative approach, working with local communities, international volunteers, and partner organizations, exemplifies the kind of partnerships needed to achieve the SDGs.</p>
      
      <p>We've established formal partnerships with universities, healthcare institutions, and development organizations to maximize our collective impact and avoid duplication of efforts.</p>
      
      <h2>Measuring Impact</h2>
      <p>We continuously measure our progress against SDG indicators to ensure our work is making a meaningful contribution to global development goals while meeting local needs.</p>
      
      <p>Our annual impact reports include detailed metrics aligned with SDG frameworks, and we participate in global development networks to share lessons learned and best practices.</p>
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
  },
  {
    id: 7,
    slug: "youth-leadership-northern-ghana",
    title: "Empowering Youth Leadership in Northern Ghana",
    excerpt: "How we're developing the next generation of leaders through mentorship, skills training, and community engagement opportunities that create lasting change.",
    content: `
      <p>Youth leadership development is at the core of everything we do. We believe that sustainable change comes from within communities, and young people are the catalysts for that transformation.</p>
      
      <h2>Identifying Future Leaders</h2>
      <p>Through our Northern Stars program, we identify young people who show leadership potential and provide them with additional opportunities to develop these skills.</p>
      
      <p>We look for students who demonstrate initiative, empathy, communication skills, and a genuine desire to help their communities. These qualities often matter more than academic performance alone.</p>
      
      <h2>Leadership Training Programs</h2>
      <p>Our leadership development includes workshops on public speaking, project management, community organizing, and conflict resolution. These skills are essential for effective leadership in any context.</p>
      
      <p>We also provide opportunities for young leaders to practice these skills through real community projects, giving them hands-on experience while creating positive change.</p>
      
      <h2>Peer-to-Peer Learning</h2>
      <p>We've established youth leadership networks where participants mentor younger students, share experiences, and collaborate on community initiatives.</p>
      
      <p>This peer learning model has proven especially effective because young leaders can relate to the challenges their mentees face and provide culturally relevant guidance.</p>
      
      <h2>Community Impact Projects</h2>
      <p>Each leadership program participant must design and implement a community impact project. These projects address local challenges and demonstrate the practical application of leadership skills.</p>
      
      <p>Past projects have included organizing literacy programs, establishing community gardens, creating awareness campaigns about health issues, and developing local business initiatives.</p>
      
      <h2>Long-term Vision</h2>
      <p>Our goal is to develop a network of young leaders who will drive positive change in Northern Ghana for generations to come. Many of our program alumni are now community leaders, teachers, healthcare workers, and entrepreneurs.</p>
    `,
    author: "Dr. Amina Hassan",
    authorRole: "Programs Director",
    authorBio: "Dr. Hassan leads our educational programs with over 15 years of experience in international development and education. She holds a PhD in Educational Psychology and is passionate about creating opportunities for underserved youth.",
    date: "2023-12-10",
    readTime: "6 min read",
    category: "Leadership",
    tags: ["Youth Leadership", "Community Development", "Skills Training", "Mentorship"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 523,
    likes: 41
  },
  {
    id: 8,
    slug: "technology-bridging-education-gap",
    title: "Technology: Bridging the Education Gap in Rural Ghana",
    excerpt: "Exploring how digital tools and innovative technology solutions are revolutionizing access to quality education in remote communities across Northern Ghana.",
    content: `
      <p>Technology has become a powerful equalizer in education, and we're leveraging digital tools to bring world-class learning opportunities to students in rural Northern Ghana.</p>
      
      <h2>Digital Learning Platforms</h2>
      <p>We've developed online learning platforms that work on basic smartphones and tablets, making quality educational content accessible even in areas with limited internet connectivity.</p>
      
      <p>Our platforms include interactive lessons, video tutorials, and practice exercises in subjects like mathematics, science, and English, all adapted for the local context.</p>
      
      <h2>Virtual Mentorship Technology</h2>
      <p>Advanced video conferencing and messaging platforms enable real-time communication between students and their international mentors, creating meaningful relationships despite geographical distances.</p>
      
      <p>We've optimized our technology to work with low bandwidth connections and provide offline capabilities for areas with intermittent internet access.</p>
      
      <h2>Mobile Learning Solutions</h2>
      <p>Recognizing that smartphones are more accessible than computers in rural areas, we've developed mobile-first learning applications that deliver educational content through familiar interfaces.</p>
      
      <p>These apps include features like offline content caching, progress tracking, and peer-to-peer learning networks that work even when internet connectivity is limited.</p>
      
      <h2>Digital Literacy Training</h2>
      <p>We provide comprehensive digital literacy training to ensure students and community members can effectively use technology tools for learning and communication.</p>
      
      <p>Our training covers basic computer skills, internet safety, digital citizenship, and how to access online educational resources effectively.</p>
      
      <h2>Sustainable Technology Solutions</h2>
      <p>We're exploring solar-powered learning centers and satellite internet solutions to overcome infrastructure challenges and ensure consistent access to digital learning tools.</p>
      
      <p>Our technology initiatives are designed to be sustainable and scalable, with local technical support and maintenance capabilities built into every deployment.</p>
    `,
    author: "Sarah Williams",
    authorRole: "International Relations",
    authorBio: "Sarah coordinates our international partnerships and volunteer programs. With a background in international relations and nonprofit management, she ensures our global connections strengthen local impact.",
    date: "2023-12-05",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Digital Learning", "Technology", "Innovation", "Educational Access"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 387,
    likes: 29
  }
];

export const categories = ["All", "Mentorship", "Health", "Community", "Culture", "Volunteering", "Impact", "Leadership", "Technology"];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && (
        post.category === currentPost.category || 
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
    )
    .slice(0, limit);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getFilteredPosts(category: string, searchQuery: string): BlogPost[] {
  return blogPosts.filter(post => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
} 