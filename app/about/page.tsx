import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Footprints,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Shirt,
  Sparkles,
  Users,
} from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/public/images/founder.jpg";
import outreachImage from "@/public/images/wintima-3.jpg";

export const metadata: Metadata = {
  title: "About Us | Wintima Foundation",
  description:
    "Learn about Wintima Foundation's mission to provide quality education for children in rural Ghana through school supplies, mentorship, and community support.",
};

const outreachFocus = [
  {
    title: "Uniforms & Footwear",
    description: "Providing school uniforms and footwear so students can attend school with dignity.",
    icon: Shirt,
  },
  {
    title: "Sanitary Pads",
    description: "Providing sanitary pads for female students so period poverty does not interrupt learning.",
    icon: HeartHandshake,
  },
  {
    title: "Mentorship",
    description: "Providing mentorship that helps students feel supported, safe, and motivated in school.",
    icon: Users,
  },
  {
    title: "Reading Spaces",
    description: "Constructing community reading spaces and box libraries with storybooks, novels, and poetry.",
    icon: BookOpen,
  },
  {
    title: "Vocational Skills",
    description: "Supporting vocational skills training for community members.",
    icon: GraduationCap,
  },
  {
    title: "Non-Academic Support",
    description: "Meeting practical needs outside the classroom that directly affect a child's education.",
    icon: HandHeart,
  },
];

const strategySteps = [
  {
    title: "Educational Wellbeing",
    description:
      "Renew donations of expendable educational items so students consistently have the materials they need.",
  },
  {
    title: "Extracurricular Activities",
    description:
      "Build box libraries that give children access to storybooks, novels, poetry, and broader reading experiences.",
  },
  {
    title: "Mentorship Program",
    description:
      "Train teachers as mentors while liaising with Ghana Education Service and the National Service Scheme.",
  },
  {
    title: "Domestic & Community Wellbeing",
    description:
      "Address non-educational threats such as potable water, unemployment, and poverty through practical community solutions.",
  },
];

const goals = [
  "Improve student grades and cognitive abilities.",
  "Help 90-95% of students in focus schools progress to senior high school.",
  "Use lessons from Yizidug Basic School to support replication in other schools.",
];

const progressSteps = [
  {
    title: "Monthly Tutor Calls",
    description: "Call tutors monthly to ascertain student status and understand what support is needed.",
  },
  {
    title: "Bi-Annual Visits",
    description: "Carry out week-long visits from the Wintima Team twice a year.",
  },
  {
    title: "Student Tracking",
    description: "Collect and track student information as children progress through school.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Education in the Heart of Ghana"
        subtitle="About Wintima Foundation"
        description="Wintima Foundation is an education-focused non-profit organisation supporting children in rural and deprived communities in Ghana."
        height="large"
        textAlign="center"
        backgroundImage="/images/wintima-14.jpg"
        backgroundImageAlt="Wintima Foundation outreach visit with students in Ghana"
        priorityImage
        imageSizes="100vw"
      />

      <section className="py-16 lg:py-24" aria-labelledby="who-we-are-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-lg bg-wintima-light shadow-sm">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src={founderImage}
                  alt="Janet Zeylisa Dauda, founder of Wintima Foundation"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
                Introduction & Background
              </p>
              <h2
                id="who-we-are-heading"
                className="mb-6 text-3xl font-bold leading-tight text-wintima-charcoal md:text-4xl lg:text-5xl"
              >
                Who We Are
              </h2>
              <div className="space-y-5 text-base leading-8 text-medium-gray md:text-lg">
                <p>
                  Wintima Foundation is an education-focused non-profit organisation in Ghana,
                  registered in 2021 as a Company Limited by Guarantee. The Foundation has
                  been in existence for the past ten years, having been founded by Janet
                  Zeylisa Dauda in 2015.
                </p>
                <p>
                  In its earliest days, a small team of volunteers gathered and distributed
                  donations comprising textbooks, exercise books, pencils and pens. Over the
                  years, this small group of volunteers has grown into a community of
                  fully-fledged members.
                </p>
                <p>
                  The Foundation recognizes that there are challenges that permeate Ghana&apos;s
                  pre-senior high school education system. Though access to education has
                  improved dramatically, poverty, child early and forced marriages, and teenage
                  pregnancies are all drivers that limit the utility of education to affected
                  children.
                </p>
                <p>
                  Moreover, general systemic issues of development inequality between Northern
                  Ghana and Southern Ghana, as well as the disproportionate effect of poverty
                  on Ghana&apos;s rural population exacerbates already existing problems.
                </p>
                <p>
                  We also recognize that many young girls are disproportionately affected by
                  many of these factors that drive children out of school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-wintima-warm py-16 lg:py-24"
        aria-labelledby="outreach-focus-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
              What We Do
            </p>
            <h2
              id="outreach-focus-heading"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              Our Outreach Focus
            </h2>
            <p className="text-base leading-8 text-medium-gray md:text-lg">
              Wintima&apos;s outreach focuses on practical needs that help children stay in
              school, enjoy learning, and feel supported by their community.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outreachFocus.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="h-full rounded-lg border-wintima-maroon/10 bg-white shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-wintima-maroon/10 text-wintima-maroon">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-wintima-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-medium-gray">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="approach-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
                Long-Term Strategy
              </p>
              <h2
                id="approach-heading"
                className="mb-5 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
              >
                Our Approach
              </h2>
              <div className="space-y-5 text-base leading-8 text-medium-gray md:text-lg">
                <p>
                  Starting in 2022, the Foundation&apos;s long-term strategy has been to
                  reorient itself so that sustainability and progress are at the centre of
                  its projects.
                </p>
                <p>
                  The medium-term strategy is to focus on one particular school in order to
                  obtain deeper perspectives about pre-high school education in Ghana&apos;s
                  deprived communities.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-lg bg-wintima-light shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={outreachImage}
                    alt="Wintima Foundation team distributing educational supplies to students"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <ol className="grid gap-5">
              {strategySteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-lg border border-wintima-maroon/10 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wintima-maroon text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-wintima-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-medium-gray">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-wintima-light py-16 lg:py-24" aria-labelledby="goals-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
              Expected Impact
            </p>
            <h2
              id="goals-heading"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              Our Goals
            </h2>
            <p className="text-base leading-8 text-medium-gray md:text-lg">
              The Foundation&apos;s goals are tied to measurable educational progress and
              learning that can guide future work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {goals.map((goal, index) => (
              <Card
                key={goal}
                className="rounded-lg border-wintima-maroon/10 bg-white text-center shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-wintima-maroon/10 text-wintima-maroon">
                    {index === 1 ? (
                      <span className="text-sm font-bold">90-95%</span>
                    ) : (
                      <Sparkles className="h-6 w-6" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="sr-only">Goal {index + 1}</h3>
                  <p className="text-base font-semibold leading-7 text-wintima-charcoal">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="progress-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-wintima-maroon">
              Monitoring & Evaluation
            </p>
            <h2
              id="progress-heading"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              How We Track Progress
            </h2>
            <p className="text-base leading-8 text-medium-gray md:text-lg">
              Wintima tracks student progress through regular communication, school visits,
              and long-term student information gathering.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-3">
            {progressSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-wintima-maroon/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wintima-maroon text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <Footprints className="h-5 w-5 text-wintima-maroon" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-wintima-charcoal">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-medium-gray">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <HandHeart className="h-7 w-7 text-wintima-gold" aria-hidden="true" />
            </div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
              Every Contribution Keeps a Child in School
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
              Your support helps provide the materials, mentorship, and practical care that
              make it possible for children to keep learning.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-11 rounded-full bg-white px-7 text-wintima-maroon hover:bg-white/90"
              >
                <Link href="/donate">Support Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-11 rounded-full border-2 border-white bg-transparent px-7 text-white hover:!bg-white hover:!text-wintima-maroon"
              >
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
