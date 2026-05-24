"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  program: z.string().optional(),
  type: z.enum(["general", "volunteer", "mentor", "student", "partnership", "media"]),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: ["wintimafoundation@gmail.com", "programs@wintima.org"],
    description: "We respond within 24 hours"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: ["+233 (0) 123 456 789", "+233 (0) 987 654 321"],
    description: "Monday - Friday, 9AM - 5PM GMT"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: ["Upper East Region", "Ghana, West Africa"],
    description: "By appointment only"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Office Hours",
    details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM"],
    description: "GMT (Greenwich Mean Time)"
  }
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer Opportunities" },
  { value: "mentor", label: "Become a Mentor" },
  { value: "student", label: "Student Application" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "media", label: "Media & Press" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to make a difference? We'd love to hear from you. Reach out to learn more about our programs or explore ways to get involved."
        height="medium"
        textAlign="center"
      />

      {/* Contact Information */}
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
              Contact Information
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-wintima-maroon/10 rounded-full text-wintima-maroon">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-wintima-charcoal mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-medium-gray font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-medium-gray">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                Whether you&apos;re interested in our programs, want to volunteer, or have questions 
                about our work, we&apos;re here to help. Fill out the form and we&apos;ll get back to you 
                as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="bg-wintima-warm p-6 rounded-lg">
                  <h3 className="font-semibold text-wintima-charcoal mb-2">Quick Response</h3>
                  <p className="text-medium-gray text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                
                <div className="bg-wintima-maroon/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-wintima-charcoal mb-2">Program-Specific Inquiries</h3>
                  <p className="text-medium-gray text-sm">
                    For faster responses about specific programs, please select the relevant 
                    inquiry type in the form.
                  </p>
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
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-600 text-sm">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-red-800 font-medium">Something went wrong</p>
                        <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-wintima-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          {...register("name")}
                          className={`${errors.name ? "border-red-500" : ""}`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-wintima-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={`${errors.email ? "border-red-500" : ""}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-wintima-charcoal mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+233 123 456 789"
                        />
                      </div>

                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-wintima-charcoal mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="type"
                          {...register("type")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wintima-maroon focus:border-transparent"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-wintima-charcoal mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className={`${errors.subject ? "border-red-500" : ""}`}
                        placeholder="Brief description of your inquiry"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-wintima-charcoal mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                        placeholder="Please provide details about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Quick answers to common questions about our programs and how to get involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-wintima-charcoal mb-3">
                    How can I apply for the Northern Stars program?
                  </h3>
                  <p className="text-medium-gray">
                    Students can apply through their schools or directly through our website. 
                    Applications are reviewed twice yearly in January and September.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-wintima-charcoal mb-3">
                    What are the requirements to become a mentor?
                  </h3>
                  <p className="text-medium-gray">
                    Mentors should have a bachelor&apos;s degree, professional experience, and 
                    commitment to 2-3 hours monthly for 1-2 years. We provide full training.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-wintima-charcoal mb-3">
                    How can I volunteer with the foundation?
                  </h3>
                  <p className="text-medium-gray">
                    We offer various volunteer opportunities from event support to program 
                    assistance. Contact us to discuss how your skills can make an impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-wintima-charcoal mb-3">
                    Are there partnership opportunities?
                  </h3>
                  <p className="text-medium-gray">
                    Yes! We welcome partnerships with organizations, schools, and businesses 
                    that share our mission. Reach out to explore collaboration opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 