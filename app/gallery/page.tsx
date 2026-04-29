"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Users, 
  GraduationCap, 
  HeartPulse, 
  HandHeart,
  Calendar,
  MapPin
} from "lucide-react";
import Image from "next/image";

const galleryCategories = [
  { id: "all", label: "All Photos", icon: <Camera className="h-4 w-4" /> },
  { id: "mentorship", label: "Mentorship", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "health", label: "Health Outreach", icon: <HeartPulse className="h-4 w-4" /> },
  { id: "community", label: "Community Giving", icon: <HandHeart className="h-4 w-4" /> },
  { id: "events", label: "Events", icon: <Users className="h-4 w-4" /> },
];

const galleryItems = [
  {
    id: 1,
    title: "Northern Stars Mentorship Session",
    description: "Students participating in virtual mentorship sessions with international mentors",
    category: "mentorship",
    date: "2024-01-15",
    location: "Tamale, Northern Region",
    image: "/images/yeremallu-5.JPG"
  },
  {
    id: 2,
    title: "Diabetes Awareness Workshop",
    description: "Community members learning about diabetes prevention and management",
    category: "health",
    date: "2024-02-20",
    location: "Yendi, Northern Region",
    image: "/images/yeremallu-12.JPG"
  },
  {
    id: 3,
    title: "Community Giving Distribution",
    description: "Annual distribution of essential items to families in need",
    category: "community",
    date: "2023-12-10",
    location: "Gushegu, Northern Region",
    image: "/images/yeremallu-16.JPG"
  },
  {
    id: 4,
    title: "Student Graduation Ceremony",
    description: "Celebrating Northern Stars graduates advancing to university",
    category: "events",
    date: "2024-03-05",
    location: "Tamale, Northern Region",
    image: "/images/yeremallu-20.JPG"
  },
  {
    id: 5,
    title: "Health Screening Camp",
    description: "Free diabetes and blood pressure screening for community members",
    category: "health",
    date: "2024-01-28",
    location: "Savelugu, Northern Region",
    image: "/images/yeremallu-21.JPG"
  },
  {
    id: 6,
    title: "Mentor Training Workshop",
    description: "Training session for new international mentors joining the program",
    category: "mentorship",
    date: "2024-02-14",
    location: "Virtual Event",
    image: "/images/yeremallu-22.JPG"
  },
  {
    id: 7,
    title: "Community Leaders Meeting",
    description: "Meeting with traditional leaders to discuss program expansion",
    category: "events",
    date: "2024-01-10",
    location: "Dagbon Palace, Yendi",
    image: "/images/yeremallu-23.JPG"
  },
  {
    id: 8,
    title: "School Supply Distribution",
    description: "Providing educational materials to students in rural schools",
    category: "community",
    date: "2024-02-01",
    location: "Kumbungu, Northern Region",
    image: "/images/yeremallu-24.JPG"
  },
  {
    id: 9,
    title: "Student Success Stories",
    description: "Former mentees sharing their university experiences with current students",
    category: "mentorship",
    date: "2024-03-12",
    location: "University of Ghana, Legon",
    image: "/images/yeremallu-25.JPG"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-earthy-green hover:bg-earthy-green/90 text-white"
                    : "border-earthy-green text-earthy-green hover:!bg-earthy-green hover:!text-white"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      width={500}
                      height={500}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-earthy-green">
                        {galleryCategories.find(cat => cat.id === item.category)?.label}
                      </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="border-white text-white bg-earthy-green hover:!bg-white hover:!text-earthy-green"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2 group-hover:text-earthy-green transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-medium-gray mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-medium-gray">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
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
              className="text-center py-16"
            >
              <Camera className="h-16 w-16 text-medium-gray mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-deep-charcoal mb-2">
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
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-8">
              Every photo tells a story of transformation and hope. Join us in creating more 
              moments worth capturing and lives worth celebrating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-earthy-green hover:bg-earthy-green/90 text-white px-8 py-3"
              >
                <a href="/get-involved">Get Involved</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-earthy-green text-earthy-green hover:!bg-earthy-green hover:!text-white px-8 py-3"
              >
                <a href="/programmes">Our Programs</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 