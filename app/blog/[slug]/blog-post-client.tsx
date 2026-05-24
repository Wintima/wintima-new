"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  Eye,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";

interface BlogPost {
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

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-wintima-maroon text-white mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <span className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>{post.views} views</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-wintima-maroon/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-wintima-maroon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-wintima-charcoal">{post.author}</h3>
                        <p className="text-sm text-medium-gray">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-medium-gray hover:!text-wintima-maroon"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-medium-gray hover:!text-wintima-maroon"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-wintima-charcoal prose-headings:font-bold prose-p:text-medium-gray prose-p:leading-relaxed prose-a:text-wintima-maroon prose-a:no-underline hover:prose-a:underline prose-strong:text-wintima-charcoal"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-wintima-charcoal mb-4">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-wintima-maroon border-wintima-maroon">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-8 sticky top-24"
                >
                  {/* Author Bio */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-wintima-charcoal mb-3">About the Author</h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-wintima-maroon/10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-wintima-maroon" />
                        </div>
                        <div>
                          <p className="font-semibold text-wintima-charcoal">{post.author}</p>
                          <p className="text-sm text-medium-gray">{post.authorRole}</p>
                        </div>
                      </div>
                      <p className="text-sm text-medium-gray leading-relaxed">
                        {post.authorBio}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Share Links */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-wintima-charcoal mb-4">Share This Article</h3>
                      <div className="space-y-3">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-200 text-blue-600 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Facebook className="h-4 w-4 mr-2" />
                            Facebook
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-400 text-blue-500 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-700 text-blue-700 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-gray-400 text-gray-600 hover:!bg-gray-50"
                        >
                          <a
                            href={`mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-wintima-charcoal mb-4">Article Stats</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Views</span>
                          <span className="font-semibold text-wintima-charcoal">{post.views}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Likes</span>
                          <span className="font-semibold text-wintima-charcoal">{post.likes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Read Time</span>
                          <span className="font-semibold text-wintima-charcoal">{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-wintima-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-medium-gray">
                Continue exploring our impact stories and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${relatedPost.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-wintima-charcoal border-0">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-wintima-charcoal mb-3 line-clamp-2 group-hover:text-wintima-maroon transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-medium-gray mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-medium-gray">
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-wintima-maroon hover:!text-white hover:!bg-wintima-maroon p-2"
                        >
                          <Link href={`/blog/${relatedPost.slug}`}>
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
      )}

      {/* Navigation */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button
              asChild
              variant="outline"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
            >
              <Link href="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                asChild
                className="bg-wintima-maroon hover:!bg-wintima-maroon/90 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
