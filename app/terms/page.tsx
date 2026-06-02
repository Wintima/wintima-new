"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
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

  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using the Wintima Foundation website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Wintima Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Disclaimer",
      content: "The materials on Wintima Foundation's website are provided on an 'as is' basis. Wintima Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      title: "Limitations",
      content: "In no event shall Wintima Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wintima Foundation's website.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Accuracy of Materials",
      content: "The materials appearing on Wintima Foundation's website could include technical, typographical, or photographic errors. Wintima Foundation does not warrant that any of the materials on its website are accurate, complete, or current.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Links",
      content: "Wintima Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wintima Foundation of the site.",
      icon: <ArrowRight className="h-6 w-6" />
    },
    {
      title: "Modifications",
      content: "Wintima Foundation may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const keyPoints = [
    "Clear and transparent terms of service",
    "Protection of user rights and privacy",
    "Compliance with legal requirements",
    "Regular updates and modifications",
    "Professional legal framework"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wintima-light via-white to-wintima-light">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wintima-charcoal/10 to-wintima-maroon/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-wintima-charcoal/10 text-wintima-charcoal border-wintima-charcoal/20">
              <FileText className="h-4 w-4 mr-2" />
              Legal Information
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-wintima-charcoal mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-8 leading-relaxed">
              Understanding the terms and conditions for using our website and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-wintima-charcoal hover:bg-wintima-charcoal/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Download PDF
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:!text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Legal Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
                Last Updated: January 2024
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-wintima-charcoal mb-6">
                Our Commitment to Transparency
              </h2>
              <div className="space-y-6 text-medium-gray leading-relaxed">
                <p>
                  At the Wintima Foundation, we believe in complete transparency in all our operations, 
                  including our legal terms and conditions. These terms of service outline the rules and 
                  guidelines for using our website and services.
                </p>
                <p>
                  We are committed to protecting your rights while ensuring the integrity and security 
                  of our platform. These terms are designed to be clear, fair, and in compliance with 
                  applicable laws and regulations.
                </p>
                <p>
                  By using our services, you agree to these terms. We encourage you to read them carefully 
                  and contact us if you have any questions or concerns.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-wintima-charcoal/20 to-wintima-maroon/20 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-wintima-charcoal mb-4">Key Points</h3>
                  <div className="space-y-3">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-wintima-maroon mr-3" />
                        <span className="text-wintima-charcoal">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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
              Terms and Conditions
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Comprehensive terms governing the use of our website and services
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-wintima-maroon">
                        {section.icon}
                      </div>
                      <CardTitle className="text-wintima-charcoal">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
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
              Additional Information
            </h2>
            <p className="text-xl text-medium-gray max-w-2xl mx-auto">
              Important details about our terms and how to contact us
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
                title: "Privacy Policy",
                description: "Learn about how we collect, use, and protect your personal information.",
                link: "/privacy",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Cookie Policy",
                description: "Information about how we use cookies and similar technologies on our website.",
                link: "#",
                icon: <FileText className="h-8 w-8" />
              },
              {
                title: "Contact Information",
                description: "Get in touch with our legal team for questions about these terms.",
                link: "/contact",
                icon: <Mail className="h-8 w-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="text-wintima-maroon mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <CardTitle className="text-wintima-charcoal">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-gray text-center mb-4">{item.description}</p>
                    <Button 
                      variant="outline"
                      className="w-full border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:!text-white"
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

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wintima-charcoal to-wintima-maroon">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our legal team is here to help clarify any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-wintima-charcoal hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Legal Team
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:!text-wintima-charcoal px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Download Terms
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
