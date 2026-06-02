'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Heart, Search, User, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { blogPosts, categories, getFeaturedPosts, getFilteredPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = getFeaturedPosts();
  const filteredPosts = getFilteredPosts(selectedCategory, searchQuery);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="from-wintima-maroon to-wintima-maroon/80 bg-gradient-to-br py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Stories of Impact</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl">
              Discover the stories behind our mission, the people we serve, and the communities
              we&apos;re building together.
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
      <section className="bg-wintima-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              Featured Stories
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-lg">
              Highlighting our most impactful stories and recent updates from the field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group h-full overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-wintima-maroon text-white">Featured</Badge>
                    </div>
                    <div className="absolute right-4 bottom-4 left-4">
                      <Badge
                        variant="outline"
                        className="text-wintima-charcoal mb-2 border-0 bg-white/90"
                      >
                        {post.category}
                      </Badge>
                      <h3 className="mb-2 line-clamp-2 text-xl font-bold text-white">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-white/80">
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
                    <p className="text-medium-gray mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-wintima-maroon/10 flex h-8 w-8 items-center justify-center rounded-full">
                          <User className="text-wintima-maroon h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-wintima-charcoal text-sm font-medium">{post.author}</p>
                          <p className="text-medium-gray text-xs">{post.authorRole}</p>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
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
            className="mb-12 text-center"
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              All Stories
            </h2>
            <p className="text-medium-gray mx-auto mb-8 max-w-2xl text-lg">
              Explore all our articles and stories from the field. Filter by category or search for
              specific topics.
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto mb-8 max-w-md">
              <Search className="text-medium-gray absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:border-wintima-maroon border-2 border-gray-200 py-3 pr-4 pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-wintima-maroon text-white'
                      : 'border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="outline"
                        className="text-wintima-charcoal border-0 bg-white/90"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-wintima-charcoal group-hover:text-wintima-maroon mb-3 line-clamp-2 text-xl font-bold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-medium-gray mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="text-medium-gray mb-4 flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="bg-wintima-maroon/10 flex h-6 w-6 items-center justify-center rounded-full">
                          <User className="text-wintima-maroon h-3 w-3" />
                        </div>
                        <span className="text-wintima-charcoal text-sm font-medium">
                          {post.author}
                        </span>
                      </div>
                      <div className="text-medium-gray flex items-center space-x-3 text-sm">
                        <span className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </span>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-wintima-maroon hover:!bg-wintima-maroon p-2 hover:!text-white"
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
              className="py-12 text-center"
            >
              <p className="text-medium-gray text-lg">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Stay Updated</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Subscribe to our newsletter to receive the latest stories, updates, and insights from
              our work in Northern Ghana.
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button className="bg-wintima-maroon hover:!bg-wintima-maroon/90 px-8 text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
