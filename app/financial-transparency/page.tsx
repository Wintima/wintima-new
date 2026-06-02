'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle,
  Download,
  FileText,
  PieChart,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';
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

  const financialMetrics = [
    {
      number: '95%',
      label: 'Program Efficiency',
      description: 'Percentage of funds directly supporting our programs',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-wintima-maroon',
    },
    {
      number: '5%',
      label: 'Administrative Costs',
      description: 'Minimal overhead to maximize impact',
      icon: <PieChart className="h-6 w-6" />,
      color: 'text-wintima-maroon',
    },
    {
      number: '100%',
      label: 'Transparency',
      description: 'Complete financial disclosure and accountability',
      icon: <Shield className="h-6 w-6" />,
      color: 'text-wintima-charcoal',
    },
    {
      number: '4.9/5',
      label: 'Donor Trust Rating',
      description: 'Based on transparency and impact metrics',
      icon: <Award className="h-6 w-6" />,
      color: 'text-wintima-maroon',
    },
  ];

  const annualReports = [
    {
      year: '2023',
      title: 'Annual Impact Report 2023',
      description:
        'Comprehensive overview of our programs, financial performance, and community impact.',
      downloadUrl: '#',
      highlights: ['$2.5M in program funding', '15,000+ lives impacted', '95% program efficiency'],
    },
    {
      year: '2022',
      title: 'Annual Impact Report 2022',
      description: 'Year in review showcasing our growth and expanded community reach.',
      downloadUrl: '#',
      highlights: ['$2.1M in program funding', '12,000+ lives impacted', '93% program efficiency'],
    },
    {
      year: '2021',
      title: 'Annual Impact Report 2021',
      description: "Foundation's first full year of operations and community engagement.",
      downloadUrl: '#',
      highlights: ['$1.8M in program funding', '8,000+ lives impacted', '90% program efficiency'],
    },
  ];

  const expenseBreakdown = [
    { category: 'Program Services', percentage: 75, amount: '$1.875M', color: 'bg-wintima-maroon' },
    { category: 'Community Outreach', percentage: 15, amount: '$375K', color: 'bg-wintima-maroon' },
    { category: 'Administrative', percentage: 5, amount: '$125K', color: 'bg-wintima-charcoal' },
    { category: 'Fundraising', percentage: 5, amount: '$125K', color: 'bg-medium-gray' },
  ];

  const transparencyCommitments = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Annual Audits',
      description:
        'Independent financial audits conducted annually by certified public accountants.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Public Disclosure',
      description: 'All financial statements and tax returns available for public review.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Impact Reporting',
      description: 'Regular reporting on program outcomes and community impact metrics.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Donor Communication',
      description: 'Transparent communication with donors about fund allocation and impact.',
    },
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
              Financial Accountability
            </Badge>
            <h1 className="text-wintima-charcoal mb-6 text-4xl font-bold md:text-6xl">
              Financial Transparency
            </h1>
            <p className="text-medium-gray mb-8 text-xl leading-relaxed md:text-2xl">
              Complete transparency in how we use your donations to create lasting community impact
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 transform rounded-full px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
              >
                View Annual Reports
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon transform rounded-full border-2 px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:!text-white"
              >
                Download Financials
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Overview */}
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
              Our Financial Commitment
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              We believe in complete transparency about how every dollar is used to serve our
              community
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {financialMetrics.map((metric, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className={`${metric.color} mb-4 flex justify-center`}>{metric.icon}</div>
                    <CardTitle className="text-wintima-charcoal mb-2 text-3xl font-bold md:text-4xl">
                      {metric.number}
                    </CardTitle>
                    <CardTitle className="text-wintima-charcoal">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center text-sm">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expense Breakdown */}
      <section className="from-wintima-maroon/5 to-wintima-maroon/5 bg-gradient-to-r py-16 md:py-24">
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
                Fund Allocation
              </Badge>
              <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl">
                How We Use Your Donations
              </h2>
              <p className="text-medium-gray mb-8 text-lg leading-relaxed">
                Every dollar donated to the Wintima Foundation is carefully allocated to maximize
                community impact while maintaining the highest standards of transparency and
                accountability.
              </p>

              <div className="space-y-4">
                {expenseBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`h-4 w-4 rounded-full ${item.color}`}></div>
                      <span className="text-wintima-charcoal font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-wintima-charcoal font-bold">{item.percentage}%</div>
                      <div className="text-medium-gray text-sm">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-wintima-charcoal mb-6 text-center text-xl font-semibold">
                  Total Budget: $2.5M
                </h3>
                <div className="relative mx-auto h-64 w-64">
                  <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      className="transition-all duration-1000"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="188.4"
                      className="transition-all duration-1000"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="235.5"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-wintima-charcoal text-2xl font-bold">95%</div>
                      <div className="text-medium-gray text-sm">Programs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Annual Reports */}
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
              Annual Reports & Financial Statements
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              Complete transparency through detailed annual reports and financial documentation
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {annualReports.map((report, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <Badge className="bg-wintima-maroon/10 text-wintima-maroon border-wintima-maroon/20">
                        {report.year}
                      </Badge>
                      <FileText className="text-medium-gray h-6 w-6" />
                    </div>
                    <CardTitle className="text-wintima-charcoal">{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray mb-6">{report.description}</p>
                    <div className="mb-6 space-y-2">
                      {report.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="text-wintima-maroon mr-2 h-4 w-4" />
                          <span className="text-wintima-charcoal text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transparency Commitments */}
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
              Our Transparency Commitments
            </h2>
            <p className="text-medium-gray mx-auto max-w-2xl text-xl">
              We are committed to maintaining the highest standards of financial transparency and
              accountability
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {transparencyCommitments.map((commitment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-wintima-maroon mb-4 flex justify-center">
                      {commitment.icon}
                    </div>
                    <CardTitle className="text-wintima-charcoal">{commitment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center">{commitment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Questions About Our Finances?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              We&apos;re here to answer any questions about our financial practices and how your
              donations are used.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-wintima-maroon transform rounded-full bg-white px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                Contact Finance Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:!text-wintima-maroon transform rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Request Information
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
