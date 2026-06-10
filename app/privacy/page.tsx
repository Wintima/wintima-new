'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Database,
  Eye,
  FileText,
  Key,
  Lock,
  Mail,
  Shield,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
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

  const privacyPrinciples = [
    {
      title: 'Transparency',
      description: 'We are open about how we collect, use, and protect your personal information.',
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: 'Security',
      description:
        'We implement robust security measures to protect your data from unauthorized access.',
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: 'Control',
      description:
        'You have control over your personal information and can manage your preferences.',
      icon: <Key className="h-6 w-6" />,
    },
    {
      title: 'Minimization',
      description: 'We only collect the information necessary to provide our services effectively.',
      icon: <Database className="h-6 w-6" />,
    },
  ];

  const dataCollection = [
    {
      category: 'Personal Information',
      examples: [
        'Name, email address, phone number',
        'Donation history and preferences',
        'Volunteer registration details',
      ],
      purpose: 'To provide services, process donations, and communicate with you',
    },
    {
      category: 'Website Usage',
      examples: [
        'Pages visited, time spent on site',
        'Browser type and device information',
        'IP address and location data',
      ],
      purpose: 'To improve our website and user experience',
    },
    {
      category: 'Program Participation',
      examples: [
        'Program enrollment information',
        'Feedback and testimonials',
        'Impact assessment data',
      ],
      purpose: 'To deliver programs effectively and measure impact',
    },
  ];

  const userRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we hold about you.',
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: 'Update Information',
      description: 'Correct or update your personal information at any time.',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: 'Delete Data',
      description: 'Request deletion of your personal information from our systems.',
      icon: <AlertTriangle className="h-6 w-6" />,
    },
    {
      title: 'Opt-Out',
      description: 'Unsubscribe from communications or withdraw consent for data processing.',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'Data Portability',
      description: 'Request your data in a portable format for transfer to another service.',
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: 'Lodge Complaints',
      description: 'Contact us or relevant authorities if you have privacy concerns.',
      icon: <Mail className="h-6 w-6" />,
    },
  ];

  const securityMeasures = [
    'Encryption of data in transit and at rest',
    'Regular security audits and assessments',
    'Access controls and authentication',
    'Employee training on data protection',
    'Incident response procedures',
    'Compliance with industry standards',
  ];

  return (
    <div className="from-wintima-light to-wintima-light min-h-screen bg-gradient-to-br via-white">
      {/* Hero Section */}
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
              Data Protection
            </Badge>
            <h1 className="text-wintima-charcoal mb-6 text-4xl font-bold md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-medium-gray mb-8 text-xl leading-relaxed md:text-2xl">
              How we protect and respect your personal information and privacy rights
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 transform rounded-full px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
              >
                Download Policy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon transform rounded-full border-2 px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:!text-white"
              >
                Contact Privacy Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <Badge className="bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20 mb-4">
                Last Updated: January 2024
              </Badge>
              <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl">
                Your Privacy Matters to Us
              </h2>
              <div className="text-medium-gray space-y-6 leading-relaxed">
                <p>
                  At the Wintima Foundation, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This privacy policy explains
                  how we collect, use, and safeguard your data.
                </p>
                <p>
                  We believe in transparency and giving you control over your personal information.
                  This policy outlines your rights and our responsibilities in protecting your
                  privacy.
                </p>
                <p>
                  By using our services, you trust us with your information. We take this
                  responsibility seriously and are committed to protecting your privacy rights in
                  accordance with applicable data protection laws.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="from-wintima-maroon/20 to-wintima-maroon/20 rounded-2xl bg-gradient-to-br p-8">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-wintima-charcoal mb-4 text-xl font-semibold">
                    Our Commitment
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">Never sell your personal data</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">
                        Use data only for stated purposes
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">
                        Implement strong security measures
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">Respect your privacy rights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              The fundamental principles that guide how we handle your personal information
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {privacyPrinciples.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-wintima-maroon mb-4 flex justify-center">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-wintima-charcoal">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              What Information We Collect
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              Transparent information about the data we collect and how we use it
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {dataCollection.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-wintima-charcoal">{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-wintima-charcoal mb-2 font-semibold">Examples:</h4>
                        <ul className="text-medium-gray space-y-1 text-sm">
                          {item.examples.map((example, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-wintima-maroon mr-2">•</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-wintima-charcoal mb-2 font-semibold">Purpose:</h4>
                        <p className="text-medium-gray text-sm">{item.purpose}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Rights */}
      <section className="from-wintima-light bg-gradient-to-r to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl">
              Your Privacy Rights
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              You have control over your personal information and these important rights
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {userRights.map((right, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-wintima-maroon">{right.icon}</div>
                      <CardTitle className="text-wintima-charcoal">{right.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray">{right.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <Badge className="bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20 mb-4">
                Data Security
              </Badge>
              <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl">
                How We Protect Your Data
              </h2>
              <p className="text-medium-gray mb-8 text-lg leading-relaxed">
                We implement comprehensive security measures to ensure your personal information is
                protected against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="space-y-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-wintima-maroon mr-3 h-5 w-5" />
                    <span className="text-wintima-charcoal">{measure}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="from-wintima-maroon/20 to-wintima-maroon/20 rounded-2xl bg-gradient-to-br p-8">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-wintima-charcoal mb-4 text-xl font-semibold">
                    Security Commitment
                  </h3>
                  <p className="text-medium-gray mb-4">
                    We continuously monitor and update our security practices to protect your data.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">Regular security audits</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">Encrypted data transmission</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-wintima-maroon mr-3 h-5 w-5" />
                      <span className="text-wintima-charcoal">Trained staff on privacy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="from-wintima-maroon to-wintima-maroon bg-gradient-to-r py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Questions About Your Privacy?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Our privacy team is here to help with any questions about your data and privacy
              rights.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="text-wintima-maroon transform rounded-full bg-white px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                <a href="mailto:wintimafoundation@gmail.com">
                  Contact Privacy Team
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
