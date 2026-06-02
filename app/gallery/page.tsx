'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  Camera,
  GraduationCap,
  HandHeart,
  HeartPulse,
  MapPin,
  Users,
} from 'lucide-react';
import { HeroSection } from '@/components/sections/hero-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const galleryCategories = [
  { id: 'all', label: 'All Photos', icon: <Camera className="h-4 w-4" /> },
  { id: 'mentorship', label: 'Mentorship', icon: <GraduationCap className="h-4 w-4" /> },
  { id: 'health', label: 'Health Outreach', icon: <HeartPulse className="h-4 w-4" /> },
  { id: 'community', label: 'Community Giving', icon: <HandHeart className="h-4 w-4" /> },
  { id: 'events', label: 'Events', icon: <Users className="h-4 w-4" /> },
];

const galleryItems = [
  {
    id: 1,
    title: 'Northern Stars Mentorship Session',
    description: 'Students participating in virtual mentorship sessions with international mentors',
    category: 'mentorship',
    date: '2024-01-15',
    location: 'Tamale, Northern Region',
    image: '/images/wintima-5.jpg',
  },
  {
    id: 2,
    title: 'Diabetes Awareness Workshop',
    description: 'Community members learning about diabetes prevention and management',
    category: 'health',
    date: '2024-02-20',
    location: 'Yendi, Northern Region',
    image: '/images/wintima-12.jpg',
  },
  {
    id: 3,
    title: 'Community Giving Distribution',
    description: 'Annual distribution of essential items to families in need',
    category: 'community',
    date: '2023-12-10',
    location: 'Gushegu, Northern Region',
    image: '/images/wintima-13.jpg',
  },
  {
    id: 4,
    title: 'Student Graduation Ceremony',
    description: 'Celebrating Northern Stars graduates advancing to university',
    category: 'events',
    date: '2024-03-05',
    location: 'Tamale, Northern Region',
    image: '/images/wintima-10.jpg',
  },
  {
    id: 5,
    title: 'Health Screening Camp',
    description: 'Free diabetes and blood pressure screening for community members',
    category: 'health',
    date: '2024-01-28',
    location: 'Savelugu, Northern Region',
    image: '/images/wintima-11.jpg',
  },
  {
    id: 6,
    title: 'Mentor Training Workshop',
    description: 'Training session for new international mentors joining the program',
    category: 'mentorship',
    date: '2024-02-14',
    location: 'Virtual Event',
    image: '/images/wintima-1.jpg',
  },
  {
    id: 7,
    title: 'Community Leaders Meeting',
    description: 'Meeting with traditional leaders to discuss program expansion',
    category: 'events',
    date: '2024-01-10',
    location: 'Dagbon Palace, Yendi',
    image: '/images/wintima-2.jpg',
  },
  {
    id: 8,
    title: 'School Supply Distribution',
    description: 'Providing educational materials to students in rural schools',
    category: 'community',
    date: '2024-02-01',
    location: 'Kumbungu, Northern Region',
    image: '/images/wintima-3.jpg',
  },
  {
    id: 9,
    title: 'Student Success Stories',
    description: 'Former mentees sharing their university experiences with current students',
    category: 'mentorship',
    date: '2024-03-12',
    location: 'University of Ghana, Legon',
    image: '/images/wintima-4.jpg',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Gallery"
        subtitle="Visual Stories"
        description="Witness the impact of our work through photos capturing moments of transformation, hope, and community in Northern Ghana"
        height="medium"
        textAlign="center"
      />

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-wrap justify-center gap-4"
          >
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-wintima-maroon hover:bg-wintima-maroon/90 text-white'
                    : 'border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={500}
                      height={500}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="text-wintima-maroon bg-white/90">
                        {galleryCategories.find((cat) => cat.id === item.category)?.label}
                      </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button
                        variant="outline"
                        className="bg-wintima-maroon hover:!text-wintima-maroon border-white text-white hover:!bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-wintima-charcoal group-hover:text-wintima-maroon mb-2 text-xl font-bold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-medium-gray mb-4 leading-relaxed">{item.description}</p>

                    <div className="text-medium-gray space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <Camera className="text-medium-gray mx-auto mb-4 h-16 w-16" />
              <h3 className="text-wintima-charcoal mb-2 text-xl font-semibold">
                No photos in this category yet
              </h3>
              <p className="text-medium-gray">
                Check back soon for more photos from our programs and events.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-wintima-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Be Part of Our Story
            </h2>
            <p className="text-medium-gray mx-auto mb-8 max-w-3xl text-lg md:text-xl">
              Every photo tells a story of transformation and hope. Join us in creating more moments
              worth capturing and lives worth celebrating.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 px-8 py-3 text-white"
              >
                <a href="/get-involved">Get Involved</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon border-2 px-8 py-3 hover:!text-white"
              >
                <a href="/projects">Our Projects</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
