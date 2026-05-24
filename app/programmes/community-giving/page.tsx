"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users,  
  HandHeart, 
  ArrowRight, 
  CheckCircle, 
  MapPin,
  Clock,
  Star,
  Home,
  BookOpen,
  Utensils,
  Shirt,
  Baby,
  School
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/sections/hero-section";

export default function CommunityGivingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const initiatives = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Housing Support",
      description: "Assisting families with housing needs, emergency shelter, and home improvement projects."
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Food Security",
      description: "Providing food assistance, community gardens, and nutrition education programs."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education Support",
      description: "School supplies, tutoring programs, and educational resources for children and families."
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Clothing & Essentials",
      description: "Distributing clothing, hygiene products, and essential items to those in need."
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Family Support",
      description: "Supporting families with young children through baby supplies and parenting resources."
    },
    {
      icon: <School className="h-8 w-8" />,
      title: "Youth Programs",
      description: "After-school programs, mentorship, and activities for children and teenagers."
    }
  ];

  const impactStats = [
    { number: "1000+", label: "Families Helped", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Communities Served", icon: <MapPin className="h-6 w-6" /> },
    { number: "500+", label: "Volunteers", icon: <Heart className="h-6 w-6" /> },
    { number: "98%", label: "Community Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  const volunteerOpportunities = [
    {
      title: "Food Distribution",
      time: "Weekly",
      commitment: "2-4 hours",
      description: "Help sort and distribute food items to families in need."
    },
    {
      title: "Tutoring & Mentoring",
      time: "Bi-weekly",
      commitment: "1-2 hours",
      description: "Provide academic support and mentorship to children and youth."
    },
    {
      title: "Community Events",
      time: "Monthly",
      commitment: "3-6 hours",
      description: "Assist with organizing and running community events and fundraisers."
    },
    {
      title: "Administrative Support",
      time: "Flexible",
      commitment: "2-8 hours",
      description: "Help with office tasks, data entry, and program coordination."
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Single Mother",
      content: "The Community Giving program helped my family when we were struggling. They provided food, school supplies for my kids, and most importantly, hope.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Volunteer",
      content: "Volunteering with the Community Giving program has been incredibly rewarding. I've seen firsthand how our efforts make a real difference in people's lives.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Community Partner",
      content: "The foundation's approach to community giving is thoughtful and sustainable. They don't just provide resources—they build relationships and empower people.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wintima-light via-white to-wintima-light">
      {/* Hero Section */}
      <HeroSection
        title="Community Giving Program"
        subtitle="Strengthening Communities"
        description="Annual distribution of essential items and support to families in need, strengthening community bonds and providing immediate relief"
        height="medium"
        textAlign="center"
        backgroundImage="/images/wintima-13.jpg"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <Badge className="mb-4 bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-6">
                Building Stronger Communities Together
              </h2>
              <div className="space-y-6 text-medium-gray leading-relaxed">
                <p>
                  The Community Giving program is the heart of our foundation&apos;s mission to support 
                  and strengthen the communities we serve. We believe that every individual and family 
                  deserves access to basic necessities, opportunities for growth, and a supportive network.
                </p>
                <p>
                  Our approach goes beyond simply providing resources—we build lasting relationships 
                  with community members, understand their unique needs, and work together to create 
                  sustainable solutions that empower individuals and families to thrive.
                </p>
                <p>
                  Through partnerships with local organizations, dedicated volunteers, and generous donors, 
                  we&apos;re able to address a wide range of community needs, from immediate assistance to 
                  long-term support programs that help build stronger, more resilient communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-wintima-maroon/20 to-wintima-maroon/20 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-wintima-charcoal mb-4">Our Approach</h3>
                  <p className="text-medium-gray mb-4">
                    We believe in meeting people where they are and providing support that respects dignity and builds capacity.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-wintima-maroon mr-3" />
                      <span className="text-wintima-charcoal">Dignified assistance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-wintima-maroon mr-3" />
                      <span className="text-wintima-charcoal">Relationship building</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-wintima-maroon mr-3" />
                      <span className="text-wintima-charcoal">Sustainable solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wintima-maroon/5 to-wintima-maroon/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
              Our Community Impact
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Making a measurable difference in the lives of families and communities
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-wintima-maroon mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-2">
                    {stat.number}
                  </div>
                  <div className="text-medium-gray text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
              Our Community Initiatives
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Comprehensive support programs addressing the diverse needs of our community
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="text-wintima-maroon mb-4 flex justify-center">
                      {initiative.icon}
                    </div>
                    <CardTitle className="text-wintima-charcoal">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center">{initiative.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wintima-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Join our team of dedicated volunteers and make a difference in your community
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-wintima-charcoal">{opportunity.title}</CardTitle>
                      <Badge className="bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20">
                        {opportunity.time}
                      </Badge>
                    </div>
                    <div className="flex items-center text-medium-gray text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {opportunity.commitment} commitment
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray">{opportunity.description}</p>
                    <Button 
                      variant="outline"
                      className="mt-4 border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:!text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Get Help */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
              How to Get Help
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Simple steps to access the support and resources you need
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Contact Us",
                description: "Reach out through phone, email, or visit our office to discuss your needs and how we can help."
              },
              {
                step: "02",
                title: "Assessment & Planning",
                description: "We'll work with you to understand your situation and create a personalized support plan."
              },
              {
                step: "03",
                title: "Ongoing Support",
                description: "Receive the assistance you need and stay connected with our community support network."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-wintima-maroon/10 to-wintima-maroon/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-wintima-maroon text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-wintima-charcoal mb-4">{item.title}</h3>
                  <p className="text-medium-gray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wintima-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-4">
              Community Voices
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Real stories from community members whose lives have been touched by our programs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-wintima-maroon fill-current" />
                      ))}
                    </div>
                    <p className="text-medium-gray mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <div className="font-semibold text-wintima-charcoal">{testimonial.name}</div>
                      <div className="text-sm text-medium-gray">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wintima-maroon to-wintima-maroon">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you need support or want to help others, we&apos;re here to connect you with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-wintima-maroon hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Request Support
                <HandHeart className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-wintima-maroon text-white hover:!bg-white hover:text-wintima-maroon px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Become a Volunteer
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
