import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HandCoins,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactTimeline } from "@/components/sections/impact-timeline";
import { Button } from "@/components/ui/button";
import {
  connectLinks,
  featuredProject,
  featuredProjectTotal,
  focusAreas,
  homepageCta,
  homepageHero,
  homepageSectionLinks,
} from "@/lib/homepage-content";

const formatGhs = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "GHS",
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-wintima-maroon focus:shadow-lg focus:ring-2 focus:ring-wintima-maroon"
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
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
                {featuredProject.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-wintima-charcoal md:text-4xl lg:text-5xl">
                {featuredProject.title}
              </h2>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-wintima-charcoal shadow-sm">
                <MapPin className="h-4 w-4 text-wintima-maroon" aria-hidden="true" />
                {featuredProject.location}
              </p>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-medium-gray">
                {featuredProject.description}
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {featuredProject.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex min-h-11 items-center gap-3 rounded-md border border-wintima-maroon/10 bg-white px-4 py-3 text-sm font-semibold text-wintima-charcoal shadow-sm"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-wintima-maroon"
                      aria-hidden="true"
                    />
                    {deliverable}
                  </div>
                ))}
              </div>

              <details className="mb-8 rounded-lg border border-wintima-maroon/15 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-bold text-wintima-charcoal marker:text-wintima-maroon">
                  Project budget: {formatGhs(featuredProjectTotal)}
                </summary>
                <dl className="mt-5 space-y-3 text-sm text-medium-gray">
                  {featuredProject.costs.map((cost) => (
                    <div
                      key={cost.label}
                      className="flex items-center justify-between gap-4 border-b border-wintima-maroon/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt>{cost.label}</dt>
                      <dd className="font-semibold text-wintima-charcoal">
                        {formatGhs(cost.amount)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </details>

              <Button
                asChild
                size="lg"
                className="min-h-11 rounded-full bg-wintima-maroon px-7 text-white hover:bg-wintima-maroon/90"
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
                <div className="absolute inset-0 animate-pulse bg-wintima-light -z-10" />
              </div>
              <div className="border-t border-wintima-maroon/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-wintima-maroon">
                  Refurbishment goal
                </p>
                <p className="mt-2 text-base leading-7 text-medium-gray">
                  Safer classrooms, usable desks, repaired doors and windows, and a roof
                  that keeps lessons going through the rainy season.
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
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              Education in the Heart of Ghana
            </h2>
            <p className="text-lg leading-8 text-medium-gray">
              Wintima focuses on practical barriers that keep rural children from
              learning, from the supplies in a school bag to the condition of the
              classroom itself.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="rounded-lg border border-wintima-maroon/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-wintima-maroon/10 text-wintima-maroon">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-wintima-charcoal">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-6 text-medium-gray">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="min-h-11 rounded-full border-2 border-wintima-maroon px-6 text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
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

      <section
        className="bg-wintima-warm py-16 lg:py-24"
        aria-labelledby="timeline-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="timeline-heading"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              A Decade of Impact
            </h2>
            <p className="text-lg leading-8 text-medium-gray">
              From a first school donation in 2015 to the current Yizidug
              refurbishment work, each milestone reflects a practical step toward
              keeping children in school.
            </p>
          </div>

          <ImpactTimeline />

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="min-h-11 rounded-full border-2 border-wintima-maroon px-6 text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white"
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
              <HandCoins className="h-7 w-7 text-wintima-gold" aria-hidden="true" />
            </div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
              {homepageCta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/90">
              {homepageCta.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {homepageCta.ctas.map((cta, index) => (
                <Button
                  key={cta.href}
                  asChild
                  size="lg"
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "min-h-11 rounded-full bg-white px-7 text-wintima-maroon hover:bg-white/90"
                      : "min-h-11 rounded-full border-2 border-white bg-transparent px-7 text-white hover:!bg-white hover:!text-wintima-maroon"
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
                className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl"
              >
                Connect With Wintima
              </h2>
              <p className="max-w-xl text-lg leading-8 text-medium-gray">
                Follow the foundation, share the current initiative, or reach out
                directly to learn how you can support children in rural communities.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {connectLinks.map((link) => {
                const Icon = socialIcons[link.name as keyof typeof socialIcons];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex min-h-24 items-center justify-between rounded-lg border border-wintima-maroon/10 bg-white p-5 text-wintima-charcoal shadow-sm transition hover:border-wintima-maroon/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wintima-maroon"
                  >
                    <span className="font-bold">{link.name}</span>
                    <Icon className="h-6 w-6 text-wintima-maroon" aria-hidden="true" />
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
