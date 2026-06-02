'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  DollarSign,
  Gift,
  Globe,
  HandHeart,
  Heart,
  Megaphone,
  Share2,
  Target,
  Users,
} from 'lucide-react';
import { HeroSection } from '@/components/sections/hero-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const volunteerOpportunities = [
  {
    title: 'Program Mentor',
    description:
      'Guide students in the Northern Stars program through one-on-one mentorship sessions.',
    commitment: '2-3 hours/month',
    skills: ['Communication', 'Leadership', 'Patience'],
    remote: true,
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Event Coordinator',
    description: 'Help organize community events, fundraisers, and awareness campaigns.',
    commitment: '5-10 hours/month',
    skills: ['Organization', 'Planning', 'Communication'],
    remote: false,
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: 'Content Creator',
    description: 'Create engaging content for our social media, blog, and marketing materials.',
    commitment: '3-5 hours/week',
    skills: ['Writing', 'Design', 'Social Media'],
    remote: true,
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: 'Health Educator',
    description: 'Support diabetes awareness sessions and health education programs.',
    commitment: '4-6 hours/month',
    skills: ['Healthcare', 'Teaching', 'Public Speaking'],
    remote: false,
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: 'Fundraising Assistant',
    description: 'Help with grant writing, donor outreach, and fundraising campaigns.',
    commitment: '6-8 hours/month',
    skills: ['Writing', 'Research', 'Communication'],
    remote: true,
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: 'Community Liaison',
    description: 'Build relationships with local communities and partner organizations.',
    commitment: '8-10 hours/month',
    skills: ['Networking', 'Cultural Awareness', 'Communication'],
    remote: false,
    icon: <Globe className="h-6 w-6" />,
  },
];

const donationOptions = [
  {
    amount: '$25',
    impact: 'Provides school supplies for one student for a month',
    popular: false,
  },
  {
    amount: '$50',
    impact: 'Funds diabetes screening for 5 community members',
    popular: false,
  },
  {
    amount: '$100',
    impact: 'Supports one mentorship session with technology and resources',
    popular: true,
  },
  {
    amount: '$250',
    impact: "Sponsors a student's participation in the Northern Stars program for 3 months",
    popular: false,
  },
  {
    amount: '$500',
    impact: 'Funds a complete diabetes awareness workshop for a community',
    popular: false,
  },
  {
    amount: 'Custom',
    impact: 'Choose an amount that works for you - every contribution makes a difference',
    popular: false,
  },
];

const otherWaysToHelp = [
  {
    title: 'Spread the Word',
    description: 'Share our mission on social media and tell friends about our work.',
    icon: <Share2 className="h-6 w-6" />,
    action: 'Share Now',
  },
  {
    title: 'Corporate Partnership',
    description: "Partner with us through your company's CSR initiatives.",
    icon: <HandHeart className="h-6 w-6" />,
    action: 'Learn More',
  },
  {
    title: 'In-Kind Donations',
    description: 'Donate goods, services, or equipment to support our programs.',
    icon: <Gift className="h-6 w-6" />,
    action: 'Contact Us',
  },
  {
    title: 'Professional Skills',
    description: 'Offer your professional expertise in areas like legal, accounting, or marketing.',
    icon: <Award className="h-6 w-6" />,
    action: 'Volunteer Skills',
  },
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
            text: 'Volunteer Now',
            href: '#volunteer',
            variant: 'primary',
          },
          {
            text: 'Make a Donation',
            href: '#donate',
            variant: 'secondary',
          },
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
            className="mb-16 text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Volunteer Opportunities
            </h2>
            <p className="text-medium-gray mx-auto max-w-3xl text-lg md:text-xl">
              Use your skills and passion to make a direct impact. We have opportunities for
              everyone, whether you prefer remote work or hands-on community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center space-x-3">
                      <div className="bg-wintima-maroon/10 text-wintima-maroon group-hover:!bg-wintima-maroon rounded-full p-3 transition-colors duration-300 group-hover:!text-white">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-wintima-charcoal group-hover:!text-wintima-maroon text-xl font-bold transition-colors duration-300">
                          {opportunity.title}
                        </h3>
                        <div className="mt-1 flex items-center space-x-2">
                          <Badge
                            variant={opportunity.remote ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {opportunity.remote ? 'Remote' : 'On-site'}
                          </Badge>
                          <span className="text-medium-gray text-sm">{opportunity.commitment}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-medium-gray mb-4 leading-relaxed">
                      {opportunity.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-wintima-charcoal mb-2 text-sm font-semibold">
                        Skills Needed:
                      </h4>
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
                      className="bg-wintima-maroon hover:!bg-wintima-maroon/90 w-full text-white"
                    >
                      <Link
                        href={`/contact?program=volunteer-${opportunity.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
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
            className="mt-12 text-center"
          >
            <p className="text-medium-gray mb-6">
              Don&apos;t see a perfect fit? We&apos;re always looking for passionate people with
              diverse skills.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon border-2 hover:!text-white"
            >
              <Link href="/contact?type=volunteer">Discuss Custom Opportunities</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="bg-wintima-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Make a Donation
            </h2>
            <p className="text-medium-gray mx-auto max-w-3xl text-lg md:text-xl">
              Your financial support directly funds our programs and helps us reach more students
              and communities. Every donation, no matter the size, makes a meaningful difference.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`group relative h-full border-0 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    option.popular ? 'ring-wintima-maroon ring-2' : ''
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      <Badge className="bg-wintima-maroon px-3 py-1 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <DollarSign className="text-wintima-maroon mx-auto mb-2 h-8 w-8" />
                      <h3 className="text-wintima-charcoal mb-2 text-2xl font-bold">
                        {option.amount}
                      </h3>
                    </div>
                    <p className="text-medium-gray mb-6 leading-relaxed">{option.impact}</p>
                    <Button
                      asChild
                      className={`w-full ${
                        option.popular
                          ? 'bg-wintima-maroon hover:!bg-wintima-maroon/90'
                          : 'bg-wintima-maroon hover:!bg-wintima-maroon/90'
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
            className="mt-12 text-center"
          >
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-wintima-charcoal mb-4 text-xl font-bold">
                Secure & Transparent Donations
              </h3>
              <div className="text-medium-gray grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
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
            className="mb-16 text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Other Ways to Help
            </h2>
            <p className="text-medium-gray mx-auto max-w-3xl text-lg md:text-xl">
              Not ready to volunteer or donate? There are still many ways you can support our
              mission and help us reach more people in need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {otherWaysToHelp.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-0 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-wintima-maroon/10 text-wintima-maroon group-hover:!bg-wintima-maroon rounded-full p-4 transition-colors duration-300 group-hover:!text-white">
                        {way.icon}
                      </div>
                    </div>
                    <h3 className="text-wintima-charcoal group-hover:!text-wintima-maroon mb-3 text-xl font-bold transition-colors duration-300">
                      {way.title}
                    </h3>
                    <p className="text-medium-gray mb-6 leading-relaxed">{way.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon w-full hover:!text-white"
                    >
                      <Link href="/contact">{way.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Your Impact Matters</h2>
            <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-white/90 md:text-xl">
              Every volunteer hour, every donation, and every share helps us build stronger
              communities in Northern Ghana. When you get involved with Wintima Foundation,
              you&apos;re not just supporting a cause – you&apos;re investing in the future of young
              people and the health of entire communities.
            </p>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-wintima-gold mb-2 text-4xl font-bold">150+</div>
                <div className="text-white/80">Lives Directly Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-wintima-gold mb-2 text-4xl font-bold">8</div>
                <div className="text-white/80">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-wintima-gold mb-2 text-4xl font-bold">92%</div>
                <div className="text-white/80">Student Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-wintima-maroon hover:!bg-wintima-maroon/90 px-8 py-3 text-white"
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
                className="text-wintima-maroon hover:!bg-wintima-maroon/90 border-2 border-white px-8 py-3 hover:!text-white"
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
