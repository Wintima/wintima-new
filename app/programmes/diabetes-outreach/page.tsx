"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Activity, 
  Award, 
  CheckCircle, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/sections/hero-section";

export default function DiabetesOutreachPage() {
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

  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Diabetes Screening",
      description: "Free blood glucose testing and comprehensive health assessments for early detection and prevention."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Educational Workshops",
      description: "Interactive sessions on diabetes management, nutrition, and lifestyle modifications."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Support Groups",
      description: "Peer support networks and counseling services for individuals and families affected by diabetes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Resource Distribution",
      description: "Providing educational materials, monitoring supplies, and nutritional guidance."
    }
  ];

  const impactStats = [
    { number: "500+", label: "Individuals Screened", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Communities Reached", icon: <MapPin className="h-6 w-6" /> },
    { number: "95%", label: "Satisfaction Rate", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Member",
      content: "The diabetes screening saved my life. I had no idea I was at risk, and now I&apos;m managing my condition with proper support.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      content: "The educational workshops helped me understand how to support my employees with diabetes. It&apos;s made a real difference in our workplace.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Healthcare Provider",
      content: "The J&C Diabetes Outreach program fills a crucial gap in our community&apos;s healthcare. Their preventive approach is exactly what we need.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-white to-light-gray">
      {/* Hero Section */}
      <HeroSection
        title="J&C Diabetes Outreach Program"
        subtitle="Honoring Lives, Saving Lives"
        description="Comprehensive diabetes education, screening, and support services for communities across Northern Ghana"
        height="medium"
        textAlign="center"
        backgroundImage="/images/yeremallu-12.JPG"
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
              <Badge className="mb-4 bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                The Heart Behind J&C Diabetes Outreach
              </h2>
              <div className="space-y-6 text-medium-gray leading-relaxed">
                <p>
                  The J&C Diabetes Outreach program was born from a deeply personal experience. 
                  When our founder&apos;s family was directly affected by diabetes, we witnessed firsthand 
                  the devastating impact this disease can have on individuals, families, and entire communities.
                </p>
                <p>
                  What started as a family&apos;s journey to understand and manage diabetes has grown into 
                  a comprehensive community initiative. We recognized that many people in our community 
                  lacked access to proper diabetes education, screening, and support systems.
                </p>
                <p>
                  Named in honor of family members who inspired this mission, the J&C Diabetes Outreach 
                  program represents our commitment to turning personal challenges into community solutions. 
                  We believe that no one should face diabetes alone, and that prevention and early detection 
                  can save lives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-earthy-green/20 to-sunset-orange/20 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-deep-charcoal mb-4">Our Mission</h3>
                  <p className="text-medium-gray mb-4">
                    To reduce the impact of diabetes in our community through education, 
                    prevention, early detection, and ongoing support.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-earthy-green mr-3" />
                      <span className="text-deep-charcoal">Free community screenings</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-earthy-green mr-3" />
                      <span className="text-deep-charcoal">Educational workshops</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-earthy-green mr-3" />
                      <span className="text-deep-charcoal">Support networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-earthy-green/5 to-sunset-orange/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Making a measurable difference in community health and diabetes awareness
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
                  <div className="text-earthy-green mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-2">
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

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Comprehensive diabetes support and education for individuals and communities
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="text-earthy-green mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-deep-charcoal">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-light-gray to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              How Our Program Works
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Simple steps to better health and diabetes awareness
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
                title: "Schedule Your Visit",
                description: "Contact us to schedule a free diabetes screening or educational session at a location convenient for you."
              },
              {
                step: "02",
                title: "Get Screened & Educated",
                description: "Receive comprehensive health assessments, blood glucose testing, and educational materials about diabetes prevention and management."
              },
              {
                step: "03",
                title: "Ongoing Support",
                description: "Join our support networks, attend follow-up sessions, and access resources to maintain your health journey."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-earthy-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-deep-charcoal mb-4">{item.title}</h3>
                  <p className="text-medium-gray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Real stories from real people whose lives have been impacted by our program
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
                        <Star key={i} className="h-5 w-5 text-sunset-orange fill-current" />
                      ))}
                    </div>
                    <p className="text-medium-gray mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <div className="font-semibold text-deep-charcoal">{testimonial.name}</div>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-earthy-green to-sunset-orange">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in the fight against diabetes. Get screened, get educated, and get supported.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-earthy-green hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Schedule Screening
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-sunset-orange text-white hover:!bg-white hover:text-earthy-green px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
