'use client';

import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import * as z from 'zod';
import { HeroSection } from '@/components/sections/hero-section';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const inquiryTypeSchema = z.enum([
  'general',
  'volunteer',
  'mentor',
  'student',
  'partnership',
  'media',
]);

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  program: z.string().optional(),
  type: inquiryTypeSchema,
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Us',
    details: ['wintimafoundation@gmail.com', 'programs@wintima.org'],
    description: 'We respond within 24 hours',
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Call Us',
    details: ['+233 (0) 123 456 789', '+233 (0) 987 654 321'],
    description: 'Monday - Friday, 9AM - 5PM GMT',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Visit Us',
    details: ['Upper East Region', 'Ghana, West Africa'],
    description: 'By appointment only',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Office Hours',
    details: ['Monday - Friday: 9AM - 5PM', 'Saturday: 10AM - 2PM'],
    description: 'GMT (Greenwich Mean Time)',
  },
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'volunteer', label: 'Volunteer Opportunities' },
  { value: 'mentor', label: 'Become a Mentor' },
  { value: 'student', label: 'Student Application' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'media', label: 'Media & Press' },
];

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const parsedType = inquiryTypeSchema.safeParse(searchParams.get('type'));
  const defaultInquiryType = parsedType.success ? parsedType.data : 'general';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: defaultInquiryType,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset({ type: defaultInquiryType });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to make a difference? We'd love to hear from you. Reach out to learn more about our programs or explore ways to get involved."
        height="medium"
        textAlign="center"
      />

      {/* Contact Information */}
      <section className="bg-wintima-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Contact Information
            </h2>
            <p className="text-medium-gray mx-auto max-w-3xl text-lg md:text-xl">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-wintima-maroon/10 text-wintima-maroon rounded-full p-3">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-wintima-charcoal mb-3 text-xl font-bold">{info.title}</h3>
                    <div className="mb-3 space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-medium-gray font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-medium-gray text-sm">{info.description}</p>
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
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                Send Us a Message
              </h2>
              <p className="text-medium-gray mb-8 text-lg leading-relaxed">
                Whether you&apos;re interested in our programs, want to volunteer, or have questions
                about our work, we&apos;re here to help. Fill out the form and we&apos;ll get back
                to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="bg-wintima-warm rounded-lg p-6">
                  <h3 className="text-wintima-charcoal mb-2 font-semibold">Quick Response</h3>
                  <p className="text-medium-gray text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>

                <div className="bg-wintima-maroon/10 rounded-lg p-6">
                  <h3 className="text-wintima-charcoal mb-2 font-semibold">
                    Program-Specific Inquiries
                  </h3>
                  <p className="text-wintima-charcoal/80 text-sm">
                    For faster responses about specific programs, please select the relevant inquiry
                    type in the form.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {submitStatus === 'success' && (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Message sent successfully!</p>
                        <p className="text-sm text-green-600">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 flex items-center space-x-3 rounded-lg border border-red-200 bg-red-50 p-4"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium text-red-800">Something went wrong</p>
                        <p className="text-sm text-red-600">
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-wintima-charcoal mb-2 block text-sm font-medium"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          aria-required="true"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          {...register('name')}
                          className={`${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-wintima-charcoal mb-2 block text-sm font-medium"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          {...register('email')}
                          className={`${errors.email ? 'border-red-500' : ''}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-wintima-charcoal mb-2 block text-sm font-medium"
                        >
                          Phone Number
                        </label>
                        <Input id="phone" {...register('phone')} placeholder="+233 123 456 789" />
                      </div>

                      <div>
                        <label
                          htmlFor="type"
                          className="text-wintima-charcoal mb-2 block text-sm font-medium"
                        >
                          Inquiry Type *
                        </label>
                        <select
                          id="type"
                          aria-required="true"
                          {...register('type')}
                          className="focus:ring-wintima-maroon w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none"
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
                      <label
                        htmlFor="subject"
                        className="text-wintima-charcoal mb-2 block text-sm font-medium"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        aria-required="true"
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        {...register('subject')}
                        className={`${errors.subject ? 'border-red-500' : ''}`}
                        placeholder="Brief description of your inquiry"
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-wintima-charcoal mb-2 block text-sm font-medium"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        aria-required="true"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        {...register('message')}
                        className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Please provide details about your inquiry..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full py-3 text-base font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
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
      <section className="bg-wintima-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-wintima-charcoal mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-medium-gray mx-auto max-w-3xl text-lg md:text-xl">
              Quick answers to common questions about our education projects and how you can support
              rural schools in Ghana.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-wintima-charcoal mb-3 text-lg font-bold">
                    How can I donate to Wintima Foundation?
                  </h3>
                  <p className="text-medium-gray">
                    Visit our{' '}
                    <Link
                      href="/donate"
                      className="text-wintima-maroon font-medium hover:underline"
                    >
                      donate page
                    </Link>{' '}
                    for Mobile Money and bank transfer details. Every contribution goes directly to
                    school supplies, uniforms, and infrastructure in rural Ghana.
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
                  <h3 className="text-wintima-charcoal mb-3 text-lg font-bold">
                    How can I volunteer with the foundation?
                  </h3>
                  <p className="text-medium-gray">
                    Wintima is volunteer-run. Use our{' '}
                    <Link
                      href="/contact?type=volunteer"
                      className="text-wintima-maroon font-medium hover:underline"
                    >
                      volunteer inquiry form
                    </Link>{' '}
                    to share your skills and availability. We welcome help with outreach, logistics,
                    and field support.
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
                  <h3 className="text-wintima-charcoal mb-3 text-lg font-bold">
                    What projects does Wintima support?
                  </h3>
                  <p className="text-medium-gray">
                    We focus on education in rural Ghana — school supplies, uniforms, desks, and
                    infrastructure. See our{' '}
                    <Link
                      href="/projects"
                      className="text-wintima-maroon font-medium hover:underline"
                    >
                      projects page
                    </Link>{' '}
                    for initiatives in communities like Yizidug, Kpatua, and Nisbuliga.
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
                  <h3 className="text-wintima-charcoal mb-3 text-lg font-bold">
                    Are there partnership opportunities?
                  </h3>
                  <p className="text-medium-gray">
                    Yes! We welcome partnerships with schools, NGOs, and businesses that share our
                    education mission.{' '}
                    <Link
                      href="/contact?type=partnership"
                      className="text-wintima-maroon font-medium hover:underline"
                    >
                      Contact us
                    </Link>{' '}
                    to explore collaboration opportunities.
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
