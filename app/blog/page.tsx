"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  ArrowRight,
  Heart,
  BookOpen,
  Users
} from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: "transforming-lives-through-mentorship",
    title: "Transforming Lives Through Mentorship: The Northern Stars Success Story",
    excerpt: "Discover how our flagship mentorship program is creating lasting change in the lives of students across Northern Ghana, connecting them with global mentors who believe in their potential.",
    author: "Dr. Amina Hassan",
    authorRole: "Programs Director",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Mentorship",
    tags: ["Northern Stars", "Education", "Mentorship", "Success Stories"],
    image: "/api/placeholder/800/400",
    featured: true,
    views: 1420,
    likes: 89
  },
  {
    id: 2,
    slug: "diabetes-awareness-rural-communities",
    title: "Breaking Barriers: Diabetes Awareness in Rural Communities",
    excerpt: "How the J&C Diabetes Outreach program is revolutionizing health education and screening in underserved areas, honoring the memory of Charles and Juliet while saving lives.",
    author: "Samuel Osei",
    authorRole: "Community Liaison",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Health",
    tags: ["Diabetes", "Health Screening", "Community Outreach", "Prevention"],
    image: "/api/placeholder/800/400",
    featured: false,
    views: 892,
    likes: 67
  },
  {
    id: 3,
    slug: "power-of-community-giving",
    title: "The Power of Community Giving: Building Stronger Bonds",
    excerpt: "Explore how our annual community giving initiatives strengthen relationships, provide essential support, and create lasting positive change in Northern Ghana.",
    author: "Sarah Williams",
    authorRole: "International Relations",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Community",
    tags: ["Community Giving", "Sustainability", "Partnerships", "Impact"],
    image: "/api/placeholder/800/400",
    featured: false,
    views: 756,
    likes: 45
  },
  {
    id: 4,
    slug: "cultural-bridge-building-through-education",
    title: "Cultural Bridge Building Through Education",
    excerpt: "How our programs create meaningful connections between cultures, fostering understanding and collaboration across continents while preserving local traditions.",
    author: "John Doe",
    authorRole: "Chairman",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Culture",
    tags: ["Cultural Exchange", "Global Citizenship", "Traditions", "Understanding"],
    image: "/api/placeholder/800/400",
    featured: true,
    views: 1156,
    likes: 78
  },
  {
    id: 5,
    slug: "volunteer-spotlight-making-difference",
    title: "Volunteer Spotlight: Making a Difference from Afar",
    excerpt: "Meet our incredible volunteers who are making a real impact in Northern Ghana from around the world, and learn how you can join this amazing community of changemakers.",
    author: "Jane Smith",
    authorRole: "Secretary",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Volunteering",
    tags: ["Volunteers", "Remote Work", "Community", "Skills"],
    image: "/api/placeholder/800/400",
    featured: false,
    views: 634,
    likes: 52
  },
  {
    id: 6,
    slug: "sustainable-development-goals-alignment",
    title: "Aligning with Sustainable Development Goals",
    excerpt: "Discover how our programs directly contribute to the UN Sustainable Development Goals and our commitment to creating measurable, sustainable impact in Northern Ghana.",
    author: "Michael Johnson",
    authorRole: "Treasurer",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Impact",
    tags: ["SDGs", "Sustainability", "Impact Measurement", "Global Goals"],
    image: "/api/placeholder/800/400",
    featured: false,
    views: 445,
    likes: 34
  }
];

const categories = ["All", "Mentorship", "Health", "Community", "Culture", "Volunteering", "Impact"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-earthy-green to-earthy-green/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stories of Impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover the stories behind our mission, the people we serve, and the communities we&apos;re building together.
            </p>
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>6 Contributors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>{blogPosts.reduce((sum, post) => sum + post.likes, 0)} Likes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Highlighting our most impactful stories and recent updates from the field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sunset-orange text-white">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-deep-charcoal border-0 mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-medium-gray mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-earthy-green/10 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-earthy-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-deep-charcoal">{post.author}</p>
                          <p className="text-xs text-medium-gray">{post.authorRole}</p>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-earthy-green hover:!text-white hover:!bg-earthy-green"
                      >
                        <Link href={`/blog/${post.slug}`} className="flex items-center space-x-1">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              All Stories
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto mb-8">
              Explore all our articles and stories from the field. Filter by category or search for specific topics.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-gray" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-earthy-green"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-earthy-green text-white"
                      : "border-earthy-green text-earthy-green hover:!bg-earthy-green hover:!text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-deep-charcoal border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-3 line-clamp-2 group-hover:text-earthy-green transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-medium-gray mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-medium-gray mb-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-earthy-green/10 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3 text-earthy-green" />
                        </div>
                        <span className="text-sm font-medium text-deep-charcoal">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-medium-gray">
                        <span className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </span>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-earthy-green hover:!text-white hover:!bg-earthy-green p-2"
                        >
                          <Link href={`/blog/${post.slug}`}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-medium-gray">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-earthy-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest stories, updates, and insights from our work in Northern Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button
                className="bg-sunset-orange hover:!bg-sunset-orange/90 text-white px-8"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 