"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { ProgramCard } from "@/components/sections/program-card";
import { Testimonial } from "@/components/sections/testimonial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  HeartPulse, 
  HandHeart, 
  Users, 
  ArrowRight,
  Mail 
} from "lucide-react";
import Image from "next/image";

const impactStats = [
  {
    end: 150,
    suffix: "+",
    label: "Students Mentored",
    description: "Young minds guided towards brighter futures"
  },
  {
    end: 8,
    label: "Communities Served",
    description: "Rural communities in the Upper East Region"
  },
  {
    end: 300,
    suffix: "+",
    label: "Health Screenings",
    description: "Lives touched through diabetes awareness"
  },
  {
    end: 24,
    suffix: "+",
    label: "Mentorship Sessions",
    description: "Monthly guidance and support"
  }
];

const programs = [
  {
    title: "Northern Stars Mentorship",
    description: "Empowering the next generation through one-on-one mentorship, connecting rural students with global mentors to unlock their potential and pursue higher education.",
    icon: <GraduationCap className="h-6 w-6" />,
    href: "/programmes/northern-stars",
    stats: [
      { label: "Active Mentees", value: "75" },
      { label: "Success Rate", value: "92%" }
    ]
  },
  {
    title: "J&C Diabetes Outreach",
    description: "Honoring the memory of Charles and Juliet through diabetes education, screening, and support services for communities across Northern Ghana.",
    icon: <HeartPulse className="h-6 w-6" />,
    href: "/programmes/diabetes-outreach",
    stats: [
      { label: "Screenings", value: "300+" },
      { label: "Lives Saved", value: "15" }
    ]
  },
  {
    title: "Community Giving",
    description: "Annual distribution of essential items and support to families in need, strengthening community bonds and providing immediate relief.",
    icon: <HandHeart className="h-6 w-6" />,
    href: "/programmes/community-giving",
    stats: [
      { label: "Families Helped", value: "120" },
      { label: "Items Distributed", value: "500+" }
    ]
  }
];

const testimonials = [
  {
    quote: "The Northern Stars program opened my eyes to possibilities I never knew existed. My mentor helped me see that my dreams were not too big.",
    author: "Fatima A.",
    role: "Senior High School Student",
    program: "Northern Stars Mentorship"
  },
  {
    quote: "The diabetes education session saved my father's life. We learned the warning signs just in time.",
    author: "Mohammed K.",
    role: "Community Member",
    program: "J&C Diabetes Outreach"
  },
  {
    quote: "Being a mentor for Wintima Foundation has been one of the most rewarding experiences. These young people inspire me every day.",
    author: "Dr. Sarah Wilson",
    role: "International Mentor",
    program: "Northern Stars Mentorship"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Restoring Smiles, Impacting Lives"
        description="Wintima Foundation ensures children in rural and deprived communities across Ghana's Upper East Region have access to quality education through school supplies, uniforms, mentorship, and infrastructure support."
        ctaButtons={[
          {
            text: "Support Our Cause",
            href: "/get-involved",
            variant: "primary"
          },
          {
            text: "Learn Our Story",
            href: "/about",
            variant: "secondary"
          }
        ]}
        height="full"
        //backgroundVideo="/backgroundVideo.mp4"
        backgroundImage="/hero-background.jpg"
      />

      {/* Impact Statistics Section */}
      <section className="py-16 lg:py-24 bg-wintima-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Every number tells a story of transformation, hope, and lasting change in the Upper East Region&apos;s communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Our Programs
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Three pillars of transformation: education, health, and community support working together to create lasting change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-wintima-maroon hover:bg-wintima-maroon/90 text-white px-8 py-3 rounded-full font-medium"
            >
              <Link href="/programmes" className="flex items-center space-x-2">
                <span>Explore All Programs</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Founder's Story Teaser */}
      <section className="py-16 lg:py-24 bg-wintima-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/founder.jpg" 
                  alt="Janet Zeylisa Dauda, Founder of Wintima Foundation" 
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
                Founded on Education &amp; Hope
              </h2>
              <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                Wintima Foundation was founded by Janet Zeylisa Dauda in 2015 with a simple conviction: every child
                in rural Ghana deserves the tools to learn, grow, and dream without limits. What began as informal
                community outreach in the Upper East Region has grown into a registered non-profit committed to
                lasting change.
              </p>
              <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                Today we provide educational materials, uniforms, mentorship, and school infrastructure support to
                children in deprived communities — restoring smiles and opening doors to brighter futures across
                the Upper East Region.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-wintima-charcoal text-wintima-charcoal hover:!bg-wintima-charcoal hover:!text-white"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Read Full Story</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Voices of Change
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Hear from the students, families, and mentors whose lives have been transformed through our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 lg:py-24 bg-wintima-maroon text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Together, we can create lasting change. Whether through volunteering, mentoring, or supporting our programs, 
              your involvement makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-wintima-gold" />
                    <h3 className="text-xl font-semibold">Stay Connected</h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    Subscribe to our newsletter for updates on our programs and impact stories.
                  </p>
                  <form className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white focus:ring-white/50"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white"
                    >
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Get Involved CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-wintima-gold" />
                    <h3 className="text-xl font-semibold">Get Involved</h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    Ready to make a difference? Explore volunteer opportunities and ways to support our mission.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-white text-wintima-maroon hover:bg-white/90"
                    >
                      <Link href="/get-involved">Volunteer With Us</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white bg-wintima-maroon text-white hover:!bg-white hover:!text-wintima-maroon"
                    >
                      <Link href="/programmes/northern-stars">Become a Mentor</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
