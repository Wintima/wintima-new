"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Globe, 
  Calendar,
  Target,
  HandHeart,
  CheckCircle,
  ArrowRight,
  Award,
  DollarSign,
  Gift,
  Megaphone,
  Share2
} from "lucide-react";

const volunteerOpportunities = [
  {
    title: "Program Mentor",
    description: "Guide students in the Northern Stars program through one-on-one mentorship sessions.",
    commitment: "2-3 hours/month",
    skills: ["Communication", "Leadership", "Patience"],
    remote: true,
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Event Coordinator",
    description: "Help organize community events, fundraisers, and awareness campaigns.",
    commitment: "5-10 hours/month",
    skills: ["Organization", "Planning", "Communication"],
    remote: false,
    icon: <Calendar className="h-6 w-6" />
  },
  {
    title: "Content Creator",
    description: "Create engaging content for our social media, blog, and marketing materials.",
    commitment: "3-5 hours/week",
    skills: ["Writing", "Design", "Social Media"],
    remote: true,
    icon: <Megaphone className="h-6 w-6" />
  },
  {
    title: "Health Educator",
    description: "Support diabetes awareness sessions and health education programs.",
    commitment: "4-6 hours/month",
    skills: ["Healthcare", "Teaching", "Public Speaking"],
    remote: false,
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Fundraising Assistant",
    description: "Help with grant writing, donor outreach, and fundraising campaigns.",
    commitment: "6-8 hours/month",
    skills: ["Writing", "Research", "Communication"],
    remote: true,
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Community Liaison",
    description: "Build relationships with local communities and partner organizations.",
    commitment: "8-10 hours/month",
    skills: ["Networking", "Cultural Awareness", "Communication"],
    remote: false,
    icon: <Globe className="h-6 w-6" />
  }
];

const donationOptions = [
  {
    amount: "$25",
    impact: "Provides school supplies for one student for a month",
    popular: false
  },
  {
    amount: "$50",
    impact: "Funds diabetes screening for 5 community members",
    popular: false
  },
  {
    amount: "$100",
    impact: "Supports one mentorship session with technology and resources",
    popular: true
  },
  {
    amount: "$250",
    impact: "Sponsors a student's participation in the Northern Stars program for 3 months",
    popular: false
  },
  {
    amount: "$500",
    impact: "Funds a complete diabetes awareness workshop for a community",
    popular: false
  },
  {
    amount: "Custom",
    impact: "Choose an amount that works for you - every contribution makes a difference",
    popular: false
  }
];

const otherWaysToHelp = [
  {
    title: "Spread the Word",
    description: "Share our mission on social media and tell friends about our work.",
    icon: <Share2 className="h-6 w-6" />,
    action: "Share Now"
  },
  {
    title: "Corporate Partnership",
    description: "Partner with us through your company's CSR initiatives.",
    icon: <HandHeart className="h-6 w-6" />,
    action: "Learn More"
  },
  {
    title: "In-Kind Donations",
    description: "Donate goods, services, or equipment to support our programs.",
    icon: <Gift className="h-6 w-6" />,
    action: "Contact Us"
  },
  {
    title: "Professional Skills",
    description: "Offer your professional expertise in areas like legal, accounting, or marketing.",
    icon: <Award className="h-6 w-6" />,
    action: "Volunteer Skills"
  }
];

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Join Our Mission"
        subtitle="Get Involved"
        description="There are many ways to support our work and make a lasting impact in Northern Ghana. Find the perfect way for you to get involved."
        ctaButtons={[
          {
            text: "Volunteer Now",
            href: "#volunteer",
            variant: "primary"
          },
          {
            text: "Make a Donation",
            href: "#donate",
            variant: "secondary"
          }
        ]}
        height="large"
        textAlign="center"
      />

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Use your skills and passion to make a direct impact. We have opportunities for everyone, 
              whether you prefer remote work or hands-on community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-wintima-maroon/10 rounded-full text-wintima-maroon group-hover:!bg-wintima-maroon group-hover:!text-white transition-colors duration-300">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-wintima-charcoal group-hover:!text-wintima-maroon transition-colors duration-300">
                          {opportunity.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={opportunity.remote ? "default" : "secondary"} className="text-xs">
                            {opportunity.remote ? "Remote" : "On-site"}
                          </Badge>
                          <span className="text-sm text-medium-gray">{opportunity.commitment}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-medium-gray mb-4 leading-relaxed">
                      {opportunity.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-wintima-charcoal mb-2">Skills Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-wintima-maroon hover:!bg-wintima-maroon/90 text-white"
                    >
                      <Link href={`/contact?program=volunteer-${opportunity.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Apply Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
            <p className="text-medium-gray mb-6">
              Don&apos;t see a perfect fit? We&apos;re always looking for passionate people with diverse skills.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
            >
              <Link href="/contact?type=volunteer">
                Discuss Custom Opportunities
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 lg:py-24 bg-wintima-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Make a Donation
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Your financial support directly funds our programs and helps us reach more students and communities. 
              Every donation, no matter the size, makes a meaningful difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                  option.popular ? "ring-2 ring-wintima-maroon" : ""
                }`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-wintima-maroon text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <DollarSign className="h-8 w-8 text-wintima-maroon mx-auto mb-2" />
                      <h3 className="text-2xl font-bold text-wintima-charcoal mb-2">
                        {option.amount}
                      </h3>
                    </div>
                    <p className="text-medium-gray mb-6 leading-relaxed">
                      {option.impact}
                    </p>
                    <Button
                      asChild
                      className={`w-full ${
                        option.popular 
                          ? "bg-wintima-maroon hover:!bg-wintima-maroon/90" 
                          : "bg-wintima-maroon hover:!bg-wintima-maroon/90"
                      } text-white`}
                    >
                      <Link href={`/contact?type=donation&amount=${option.amount}`}>
                        Donate {option.amount}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-wintima-charcoal mb-4">
                Secure & Transparent Donations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-medium-gray">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Tax Deductible</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Impact Reports</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Help */}
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
              Other Ways to Help
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Not ready to volunteer or donate? There are still many ways you can support our mission 
              and help us reach more people in need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherWaysToHelp.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-wintima-maroon/10 rounded-full text-wintima-maroon group-hover:!bg-wintima-maroon group-hover:!text-white transition-colors duration-300">
                        {way.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-wintima-charcoal mb-3 group-hover:!text-wintima-maroon transition-colors duration-300">
                      {way.title}
                    </h3>
                    <p className="text-medium-gray mb-6 leading-relaxed">
                      {way.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
                    >
                      <Link href="/contact">
                        {way.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 lg:py-24 bg-wintima-maroon text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Impact Matters
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Every volunteer hour, every donation, and every share helps us build stronger communities 
              in Northern Ghana. When you get involved with Wintima Foundation, you&apos;re not just supporting 
              a cause – you&apos;re investing in the future of young people and the health of entire communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-wintima-gold mb-2">150+</div>
                <div className="text-white/80">Lives Directly Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-wintima-gold mb-2">8</div>
                <div className="text-white/80">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-wintima-gold mb-2">92%</div>
                <div className="text-white/80">Student Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-wintima-maroon hover:!bg-wintima-maroon/90 text-white px-8 py-3"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-wintima-maroon hover:!bg-wintima-maroon/90 hover:!text-white px-8 py-3"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 