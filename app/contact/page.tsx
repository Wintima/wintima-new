import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './contact-form';

const email = 'wintimafoundation@gmail.com';

const contactMethods = [
  {
    title: 'Email',
    description: email,
    href: `mailto:${email}`,
    icon: Mail,
    isPrimary: true,
  },
  {
    title: 'LinkedIn',
    description: 'Wintima Foundation',
    href: 'https://www.linkedin.com/company/wintima-foundation/',
    icon: Linkedin,
  },
  {
    title: 'Instagram',
    description: '@wintima.foundation',
    href: 'https://www.instagram.com/wintima.foundation/',
    icon: Instagram,
  },
];

const faqs = [
  {
    question: 'How can I donate?',
    answer: (
      <>
        Visit our{' '}
        <Link href="/donate" className="text-wintima-maroon font-medium hover:underline">
          donate page
        </Link>{' '}
        or contribute via GoFundMe/Mobile Money.
      </>
    ),
  },
  {
    question: 'Can I volunteer?',
    answer: (
      <>
        Yes. Email us at{' '}
        <a href={`mailto:${email}`} className="text-wintima-maroon font-medium hover:underline">
          {email}
        </a>{' '}
        to learn about volunteer opportunities.
      </>
    ),
  },
  {
    question: 'Where does my donation go?',
    answer:
      '100% of donations go directly to our educational projects. We are entirely volunteer-run.',
  },
  {
    question: 'Which schools do you work with?',
    answer:
      'We currently work with schools in the Upper East Region of Ghana, including Yizidug Basic School and Kpatua Primary School.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />

      <section className="bg-wintima-charcoal pt-28 pb-20 text-white lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-wintima-gold mb-4 text-sm font-bold tracking-wide uppercase">
            Contact Us
          </p>
          <h1 className="mb-5 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Have questions about our work or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-wintima-light py-16 lg:py-24" aria-labelledby="contact-info-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
              Contact Information
            </p>
            <h2
              id="contact-info-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Reach Wintima Foundation
            </h2>
            <p className="text-medium-gray text-base leading-8 md:text-lg">
              Email is the best way to contact our volunteer team.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5 md:grid-cols-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <Card
                    key={method.title}
                    className={`border-wintima-maroon/10 h-full rounded-lg bg-white shadow-sm ${
                      method.isPrimary ? 'md:col-span-3 lg:col-span-1' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="bg-wintima-maroon/10 text-wintima-maroon mb-5 flex h-12 w-12 items-center justify-center rounded-md">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-wintima-charcoal mb-2 text-xl font-bold">
                        {method.title}
                      </h3>
                      <a
                        href={method.href}
                        className="text-medium-gray hover:text-wintima-maroon font-medium break-words hover:underline"
                        aria-label={`${method.title}: ${method.description}`}
                      >
                        {method.description}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-wintima-maroon/10 rounded-lg bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="bg-wintima-maroon/10 text-wintima-maroon mb-5 flex h-12 w-12 items-center justify-center rounded-md">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-wintima-charcoal mb-2 text-xl font-bold">Location</h3>
                <p className="text-medium-gray font-medium">Ghana, West Africa</p>
                <p className="text-medium-gray mt-1">Operating in the Upper East Region</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="message-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
                Send a Message
              </p>
              <h2
                id="message-heading"
                className="text-wintima-charcoal mb-5 text-3xl font-bold md:text-4xl lg:text-5xl"
              >
                Tell Us How We Can Help
              </h2>
              <p className="text-medium-gray text-base leading-8 md:text-lg">
                Share your question, volunteer interest, or support inquiry. We keep the form short
                so you only send what we need to respond.
              </p>
            </div>

            <ContactForm contactEmail={email} />
          </div>
        </div>
      </section>

      <section className="bg-wintima-light py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Quick Answers
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className="border-wintima-maroon/10 h-full rounded-lg bg-white shadow-sm"
              >
                <CardContent className="p-6">
                  <h3 className="text-wintima-charcoal mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-medium-gray text-sm leading-6">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
