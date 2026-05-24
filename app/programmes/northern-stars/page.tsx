"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { Testimonial } from "@/components/sections/testimonial";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Calendar,
  BookOpen,
  Target,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Award
} from "lucide-react";

const programStats = [
  {
    end: 75,
    label: "Active Mentees",
    description: "Students currently in the program"
  },
  {
    end: 92,
    suffix: "%",
    label: "Success Rate",
    description: "Students advancing to higher education"
  },
  {
    end: 24,
    suffix: "+",
    label: "Monthly Sessions",
    description: "One-on-one mentorship meetings"
  },
  {
    end: 15,
    label: "Countries",
    description: "Global mentor network reach"
  }
];

const howItWorks = [
  {
    step: 1,
    title: "Application & Assessment",
    description: "Students apply through their schools or community leaders. We assess academic potential, motivation, and commitment to personal growth.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    step: 2,
    title: "Mentor Matching",
    description: "Each student is carefully matched with a mentor based on academic interests, career goals, and personality compatibility.",
    icon: <Users className="h-6 w-6" />
  },
  {
    step: 3,
    title: "Monthly Mentorship",
    description: "Regular one-on-one sessions via video calls, focusing on academic guidance, life skills, and career planning.",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    step: 4,
    title: "Skill Development",
    description: "Workshops on study techniques, university applications, scholarship opportunities, and professional development.",
    icon: <Target className="h-6 w-6" />
  },
  {
    step: 5,
    title: "Community Support",
    description: "Group activities, peer learning sessions, and community projects that build leadership and teamwork skills.",
    icon: <Heart className="h-6 w-6" />
  },
  {
    step: 6,
    title: "Transition Support",
    description: "Continued guidance through university applications, scholarship processes, and career planning beyond graduation.",
    icon: <Award className="h-6 w-6" />
  }
];

const successStories = [
  {
    quote: "My mentor helped me see that studying medicine wasn&apos;t just a dream - it was an achievable goal. Now I&apos;m in my second year at university, and I plan to return to serve my community.",
    author: "Amina S.",
    role: "Medical Student",
    program: "Northern Stars Graduate",
    image: "/images/wintima-1.jpg"
  },
  {
    quote: "The program taught me more than academics. I learned confidence, leadership, and how to think globally while staying rooted in my community values.",
    author: "Ibrahim K.",
    role: "Engineering Student",
    program: "Northern Stars Graduate",
    image: "/images/wintima-2.jpg"
  },
  {
    quote: "Through Northern Stars, I discovered my passion for education. I&apos;m now studying to become a teacher so I can give back to rural schools like mine.",
    author: "Fatima A.",
    role: "Education Student",
    program: "Current Mentee",
    image: "/images/wintima-3.jpg"
  }
];

const eligibilityCriteria = [
  "Students in Senior High School (SHS 1-3)",
  "Demonstrated academic potential and motivation",
  "Commitment to attending monthly mentorship sessions",
  "Interest in pursuing higher education",
  "Willingness to give back to their community",
  "Access to internet for virtual sessions"
];

const mentorBenefits = [
  "Make a direct impact on a young person&apos;s life",
  "Gain insights into Ghanaian culture and perspectives",
  "Develop cross-cultural communication skills",
  "Join a global network of changemakers",
  "Flexible commitment (2-3 hours per month)",
  "Comprehensive training and ongoing support"
];

export default function NorthernStarsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Northern Stars Mentorship Program"
        subtitle="Empowering Dreams"
        description="Connecting rural students in Northern Ghana with global mentors to unlock their potential and pursue higher education"
        height="medium"
        textAlign="center"
        backgroundImage="/images/wintima-9.jpg"
      />

      {/* Program Statistics */}
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
              Program Impact
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Transforming lives through mentorship, one student at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
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

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Our comprehensive mentorship journey guides students from application to university success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-wintima-maroon text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="p-3 bg-wintima-maroon/10 rounded-full text-wintima-maroon">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-wintima-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-wintima-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Success Stories
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Hear from students whose lives have been transformed through mentorship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Testimonial {...story} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Application Section */}
      <section id="apply-student" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
                Apply as a Student
              </h2>
              <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                Ready to unlock your potential? Join our community of ambitious students 
                working toward their dreams with the support of dedicated mentors.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-wintima-charcoal mb-4">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-3">
                    {eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-wintima-maroon mt-0.5 flex-shrink-0" />
                        <span className="text-medium-gray">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-wintima-light p-6 rounded-lg">
                  <h4 className="font-semibold text-wintima-charcoal mb-2">Application Timeline</h4>
                  <div className="flex items-center space-x-2 text-medium-gray">
                    <Clock className="h-4 w-4" />
                    <span>Applications open: January & September</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <GraduationCap className="h-12 w-12 text-wintima-maroon mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-wintima-charcoal mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-medium-gray">
                      Take the first step toward your educational goals
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white"
                    >
                      <Link href="/contact?program=northern-stars-student">
                        Apply Now
                      </Link>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:text-white"
                    >
                      <Link href="/contact">
                        Ask Questions
                      </Link>
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center text-sm text-medium-gray">
                    <p>Need help with your application?</p>
                    <p>Contact us at <span className="text-wintima-maroon font-medium">mentorship@wintima.org</span></p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Application Section */}
      <section id="become-mentor" className="py-16 lg:py-24 bg-wintima-maroon text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Globe className="h-12 w-12 text-wintima-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      Become a Mentor
                    </h3>
                    <p className="text-white/80">
                      Guide a young person toward their dreams
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white"
                    >
                      <Link href="/contact?program=northern-stars-mentor">
                        Join as Mentor
                      </Link>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-white text-white hover:bg-white hover:text-wintima-maroon"
                    >
                      <Link href="/contact">
                        Learn More
                      </Link>
                    </Button>
                  </div>

                  <Separator className="my-6 bg-white/20" />

                  <div className="text-center text-sm text-white/80">
                    <p>Questions about mentoring?</p>
                    <p>Email us at <span className="text-wintima-gold font-medium">mentors@wintima.org</span></p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Make a Global Impact
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Join our network of mentors from around the world who are helping 
                shape the next generation of leaders in Northern Ghana.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Why Become a Mentor?
                  </h3>
                  <ul className="space-y-3">
                    {mentorBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-wintima-gold mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Time Commitment</h4>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Clock className="h-4 w-4" />
                    <span>2-3 hours per month for 1-2 years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-wintima-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-8">
              Whether you&apos;re a student ready to unlock your potential or a professional 
              wanting to make a difference, we&apos;re here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 text-white px-8 py-3"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:text-white px-8 py-3"
              >
                <Link href="/programmes">View All Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 