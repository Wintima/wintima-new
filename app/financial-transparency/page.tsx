'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, HandCoins, Mail, Shield, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FinancialTransparencyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const commitments = [
    {
      icon: <HandCoins className="h-8 w-8" />,
      title: 'Volunteer-Run',
      description:
        'Wintima Foundation is run by volunteers. Donations go directly to education projects in rural Ghana.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Direct Impact',
      description:
        'Funds support school supplies, uniforms, desks, and infrastructure — not administrative overhead.',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Reports Coming Soon',
      description:
        'Formal annual financial reports are being prepared. We will publish them here when available.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Open Communication',
      description:
        'Donors and partners can reach us anytime with questions about how contributions are used.',
    },
  ];

  return (
    <div className="from-wintima-light to-wintima-light min-h-screen bg-gradient-to-br via-white">
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="from-wintima-maroon/10 to-wintima-maroon/10 absolute inset-0 bg-gradient-to-r" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20 mb-6">
              <Shield className="mr-2 h-4 w-4" />
              Financial Accountability
            </Badge>
            <h1 className="text-wintima-charcoal mb-6 text-4xl font-bold md:text-6xl">
              Financial Transparency
            </h1>
            <p className="text-medium-gray mb-8 text-xl leading-relaxed md:text-2xl">
              Wintima Foundation is committed to honest stewardship of every donation we receive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              Our Approach to Stewardship
            </h2>
            <p className="text-medium-gray text-lg leading-relaxed">
              As a volunteer-run education non-profit, Wintima keeps costs low so contributions
              reach children in rural communities. We are working on formal annual reports and will
              share them on this page when they are ready.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="from-wintima-maroon/5 to-wintima-maroon/5 bg-gradient-to-r py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              What You Can Expect
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              Transparency principles that guide how we handle donations today
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {commitments.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-wintima-maroon mb-4 flex justify-center">{item.icon}</div>
                    <CardTitle className="text-wintima-charcoal">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="border-wintima-maroon/10 bg-wintima-light mx-auto max-w-2xl rounded-2xl border p-8 text-center md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FileText className="text-wintima-maroon mx-auto mb-4 h-10 w-10" />
            <h2 className="text-wintima-charcoal mb-4 text-2xl font-bold md:text-3xl">
              Annual Reports
            </h2>
            <p className="text-medium-gray mb-6 leading-relaxed">
              Published financial statements and impact reports will be added here as they become
              available. In the meantime, explore our project work or reach out with any questions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 rounded-full px-8"
              >
                <Link href="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon rounded-full px-8 hover:!text-white"
              >
                <Link href="/donate">Support Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="from-wintima-maroon to-wintima-maroon bg-gradient-to-r py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Questions About Our Finances?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              We&apos;re happy to answer questions about how donations are used. Email us or use the
              contact form.
            </p>
            <Button
              asChild
              size="lg"
              className="text-wintima-maroon transform rounded-full bg-white px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              <a href="mailto:wintimafoundation@gmail.com">
                wintimafoundation@gmail.com
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
