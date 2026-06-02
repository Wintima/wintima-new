import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  HandCoins,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { HeroSection } from '@/components/sections/hero-section';
import { ImpactTimeline } from '@/components/sections/impact-timeline';
import { Button } from '@/components/ui/button';
import {
  connectLinks,
  featuredProject,
  featuredProjectTotal,
  focusAreas,
  homepageCta,
  homepageHero,
  homepageSectionLinks,
} from '@/lib/homepage-content';

const formatGhs = (amount: number) =>
  new Intl.NumberFormat('en-GH', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'GHS',
  }).format(amount);

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Email: Mail,
};

export default function HomePage() {
  return (
    <div id="homepage-content" className="min-h-screen bg-white">
      <Link
        href="#current-initiative"
        className="focus:text-wintima-maroon focus:ring-wintima-maroon sr-only focus:not-sr-only focus:fixed focus:top-24 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:shadow-lg focus:ring-2"
      >
        Skip to content
      </Link>

      <HeroSection
        title={homepageHero.title}
        description={homepageHero.description}
        backgroundImage={homepageHero.image}
        backgroundImageAlt={homepageHero.imageAlt}
        ctaButtons={homepageHero.ctas}
        height="full"
        overlay
        priorityImage
        imageSizes="100vw"
      />

      <section id="current-initiative" className="bg-wintima-warm py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
                {featuredProject.eyebrow}
              </p>
              <h2 className="text-wintima-charcoal mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                {featuredProject.title}
              </h2>
              <p className="text-wintima-charcoal mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                <MapPin className="text-wintima-maroon h-4 w-4" aria-hidden="true" />
                {featuredProject.location}
              </p>
              <p className="text-medium-gray mb-8 max-w-2xl text-lg leading-8">
                {featuredProject.description}
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {featuredProject.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="border-wintima-maroon/10 text-wintima-charcoal flex min-h-11 items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm font-semibold shadow-sm"
                  >
                    <CheckCircle2
                      className="text-wintima-maroon h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    {deliverable}
                  </div>
                ))}
              </div>

              <details className="border-wintima-maroon/15 mb-8 rounded-lg border bg-white p-5 shadow-sm">
                <summary className="text-wintima-charcoal marker:text-wintima-maroon cursor-pointer text-base font-bold">
                  Project budget: {formatGhs(featuredProjectTotal)}
                </summary>
                <dl className="text-medium-gray mt-5 space-y-3 text-sm">
                  {featuredProject.costs.map((cost) => (
                    <div
                      key={cost.label}
                      className="border-wintima-maroon/10 flex items-center justify-between gap-4 border-b pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt>{cost.label}</dt>
                      <dd className="text-wintima-charcoal font-semibold">
                        {formatGhs(cost.amount)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </details>

              <Button
                asChild
                size="lg"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 min-h-11 rounded-full px-7 text-white"
              >
                <Link href={featuredProject.cta.href} className="inline-flex items-center gap-2">
                  {featuredProject.cta.text}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="pointer-events-none object-cover"
                  loading="lazy"
                />
                <div className="bg-wintima-light absolute inset-0 -z-10 animate-pulse" />
              </div>
              <div className="border-wintima-maroon/10 border-t p-5">
                <p className="text-wintima-maroon text-sm font-semibold tracking-wide uppercase">
                  Refurbishment goal
                </p>
                <p className="text-medium-gray mt-2 text-base leading-7">
                  Safer classrooms, usable desks, repaired doors and windows, and a roof that keeps
                  lessons going through the rainy season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2
              id="mission-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Education in the Heart of Ghana
            </h2>
            <p className="text-medium-gray text-lg leading-8">
              Wintima focuses on practical barriers that keep rural children from learning, from the
              supplies in a school bag to the condition of the classroom itself.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="border-wintima-maroon/10 rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="bg-wintima-maroon/10 text-wintima-maroon mb-5 flex h-12 w-12 items-center justify-center rounded-md">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-wintima-charcoal mb-3 text-xl font-bold">{area.title}</h3>
                  <p className="text-medium-gray text-sm leading-6">{area.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon min-h-11 rounded-full border-2 px-6 hover:!text-white"
            >
              <Link
                href={homepageSectionLinks.about.href}
                className="inline-flex items-center gap-2"
              >
                {homepageSectionLinks.about.text}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-wintima-warm py-16 lg:py-24" aria-labelledby="timeline-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="timeline-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              2015-2025 Milestones
            </h2>
            <p className="text-medium-gray text-lg leading-8">
              From a first school donation in 2015 to the current Yizidug refurbishment work, each
              milestone reflects a practical step toward keeping children in school.
            </p>
          </div>

          <ImpactTimeline />

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon min-h-11 rounded-full border-2 px-6 hover:!text-white"
            >
              <Link
                href={homepageSectionLinks.projects.href}
                className="inline-flex items-center gap-2"
              >
                {homepageSectionLinks.projects.text}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <HandCoins className="text-wintima-gold h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">{homepageCta.title}</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/90">
              {homepageCta.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {homepageCta.ctas.map((cta, index) => (
                <Button
                  key={cta.href}
                  asChild
                  size="lg"
                  variant={index === 0 ? 'default' : 'outline'}
                  className={
                    index === 0
                      ? 'text-wintima-maroon min-h-11 rounded-full bg-white px-7 hover:bg-white/90'
                      : 'hover:!text-wintima-maroon min-h-11 rounded-full border-2 border-white bg-transparent px-7 text-white hover:!bg-white'
                  }
                >
                  <Link href={cta.href}>{cta.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="connect-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2
                id="connect-heading"
                className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
              >
                Connect With Wintima
              </h2>
              <p className="text-medium-gray max-w-xl text-lg leading-8">
                Follow the foundation, share the current initiative, or reach out directly to learn
                how you can support children in rural communities.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {connectLinks.map((link) => {
                const Icon = socialIcons[link.name as keyof typeof socialIcons];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="border-wintima-maroon/10 text-wintima-charcoal hover:border-wintima-maroon/30 focus-visible:outline-wintima-maroon flex min-h-24 items-center justify-between rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <span className="font-bold">{link.name}</span>
                    <Icon className="text-wintima-maroon h-6 w-6" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
