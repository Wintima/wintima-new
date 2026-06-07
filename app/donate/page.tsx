import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CreditCard, Globe2, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CopyNumberButton } from './copy-number-button';

export const metadata: Metadata = {
  title: 'Donate | Wintima Foundation',
  description:
    "Support Wintima Foundation's mission to provide quality education for children in rural Ghana. Donate via GoFundMe or Mobile Money.",
};

const mobileMoneyNumber = '+233 54 976 4925';
const mobileMoneyTel = '+233549764925';
const email = 'wintimafoundation@gmail.com';
const goFundMeUrl = 'https://gofund.me/eef22009e';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-wintima-charcoal flex min-h-[440px] items-center text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-wintima-gold mb-4 text-sm font-bold tracking-wide uppercase">
            Every contribution keeps a child in school.
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Support Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Wintima Foundation is volunteer-run. Every pesewa goes directly to children in rural
            communities across Ghana.
          </p>
        </div>
      </section>

      <section className="bg-wintima-warm py-14 lg:py-20" aria-labelledby="current-project">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-wintima-maroon/10 mx-auto max-w-5xl rounded-lg border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
                  Current Need
                </p>
                <h2
                  id="current-project"
                  className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
                >
                  Yizidug School Refurbishment
                </h2>
                <p className="text-medium-gray max-w-3xl text-base leading-7 md:text-lg">
                  We are currently raising funds for the Yizidug School Refurbishment project,
                  repairing classrooms, doors, windows, and roofs for students who currently sit on
                  the floor.
                </p>
              </div>
              <div className="lg:text-right">
                <p className="text-medium-gray text-sm font-semibold">Target</p>
                <p className="text-wintima-maroon mb-5 text-3xl font-bold">GHS 50,000</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon min-h-11 rounded-full hover:!text-white"
                >
                  <Link href="/projects" className="inline-flex items-center gap-2">
                    View project details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="donation-methods">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="donation-methods"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
            >
              Donation Methods
            </h2>
            <p className="text-medium-gray text-lg leading-8">
              Choose the giving method that works best for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-wintima-maroon/20 h-full rounded-lg border-2 shadow-md">
              <CardContent className="flex h-full flex-col p-6">
                <div className="bg-wintima-maroon text-wintima-gold mb-5 flex h-12 w-12 items-center justify-center rounded-full">
                  <Globe2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-wintima-charcoal mb-3 text-2xl font-bold">Donate Online</h3>
                <p className="text-medium-gray mb-6 leading-7">
                  Donate via our GoFundMe campaign. This is the easiest option for international
                  donors.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-wintima-maroon hover:bg-wintima-maroon/90 mt-auto min-h-12 rounded-full text-white"
                >
                  <Link
                    href={goFundMeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to Wintima Foundation GoFundMe campaign, opens in a new tab"
                  >
                    Go to GoFundMe
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-wintima-maroon/10 h-full rounded-lg shadow-sm">
              <CardContent className="flex h-full flex-col p-6">
                <div className="bg-wintima-maroon/10 text-wintima-maroon mb-5 flex h-12 w-12 items-center justify-center rounded-full">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-wintima-charcoal mb-3 text-2xl font-bold">Mobile Money</h3>
                <p className="text-medium-gray mb-5 leading-7">Send via MTN Mobile Money.</p>
                <dl className="mb-6 space-y-3 text-sm">
                  <div>
                    <dt className="text-wintima-charcoal font-bold">Network</dt>
                    <dd className="text-medium-gray">MTN Mobile Money</dd>
                  </div>
                  <div>
                    <dt className="text-wintima-charcoal font-bold">Number</dt>
                    <dd>
                      <Link
                        href={`tel:${mobileMoneyTel}`}
                        className="text-wintima-maroon font-semibold underline-offset-4 hover:underline"
                      >
                        {mobileMoneyNumber}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-wintima-charcoal font-bold">Name</dt>
                    <dd className="text-medium-gray">Zeylisa Janet Dauda</dd>
                  </div>
                </dl>
                <p className="text-medium-gray mb-6 text-sm leading-6">
                  Please send us an email after your transfer so we can acknowledge your donation.
                </p>
                <div className="mt-auto">
                  <CopyNumberButton number={mobileMoneyNumber} />
                </div>
              </CardContent>
            </Card>

            <Card
              className="h-full rounded-lg border-gray-200 bg-gray-50 opacity-80 shadow-sm"
              aria-disabled="true"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    <CreditCard className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                    Coming Soon
                  </Badge>
                </div>
                <h3 className="text-wintima-charcoal mb-3 text-2xl font-bold">Card Payment</h3>
                <p className="text-medium-gray mb-6 leading-7">
                  Online debit and credit card payments are coming soon.
                </p>
                <Button
                  type="button"
                  disabled
                  className="mt-auto min-h-12 rounded-full bg-gray-300 text-gray-700"
                >
                  Not available yet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-wintima-light py-16 lg:py-20" aria-labelledby="donation-questions">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="bg-wintima-maroon/10 text-wintima-maroon mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2
              id="donation-questions"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
            >
              Questions About Donating?
            </h2>
            <p className="text-medium-gray mb-8 text-lg leading-8">
              Reach out to us at{' '}
              <Link
                href={`mailto:${email}`}
                className="text-wintima-maroon font-semibold underline-offset-4 hover:underline"
              >
                {email}
              </Link>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-wintima-maroon hover:bg-wintima-maroon/90 min-h-11 rounded-full px-8 text-white"
            >
              <Link href={`mailto:${email}`}>Email Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20" aria-labelledby="volunteer">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-wintima-maroon/10 mx-auto max-w-4xl rounded-lg border bg-white p-6 text-center shadow-sm sm:p-8">
            <h2
              id="volunteer"
              className="text-wintima-charcoal mb-3 text-2xl font-bold md:text-3xl"
            >
              Want to Volunteer?
            </h2>
            <p className="text-medium-gray mx-auto mb-6 max-w-2xl leading-7">
              We are always looking for people who want to make a difference for children in rural
              communities.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon min-h-11 rounded-full hover:!text-white"
            >
              <Link href="/contact?type=volunteer">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
