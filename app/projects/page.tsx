import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Projects | Wintima Foundation",
  description:
    "Explore Wintima Foundation's decade of educational projects across Ghana's Upper East Region, from school supplies to infrastructure.",
};

const blurDataURL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const currentProject = {
  title: "Yizidug School Refurbishment",
  status: "In Progress",
  location: "Yizidug, Upper East Region, Ghana",
  description:
    "The school faces infrastructure challenges including broken doors, damaged windows, and leaking roofs affecting students who currently sit on the floor during lessons.",
  image: "/images/wintima-16.jpg",
  imageAlt:
    "Students at a rural Ghanaian school receiving support from Wintima Foundation",
  scope: [
    "Refurbishing six classrooms",
    "Repairing doors, windows, and roofs",
    "Painting classrooms",
    "Supplying 50 dual desks",
  ],
  costs: [
    { item: "Classroom Doors", amount: 12000 },
    { item: "Windows", amount: 10000 },
    { item: "Roofing", amount: 10000 },
    { item: "Labour & Misc.", amount: 18000 },
  ],
};

const currentProjectTotal = currentProject.costs.reduce(
  (total, cost) => total + cost.amount,
  0
);

const completedProjects = [
  {
    date: "December 2015",
    dateTime: "2015-12",
    school: "Kolemasega Basic School",
    location: "Zaari, Upper East",
    type: "Donation of Educational Materials",
    description:
      "Distribution of study materials including books, pencils, and erasers to school children.",
    followUp:
      "Students are doing well, though only a handful made it to Junior High School. Students need more mentors and learning materials, especially books.",
    image: "/images/wintima-1.jpg",
  },
  {
    date: "July 2016",
    dateTime: "2016-07",
    school: "Frafra Catholic School",
    location: "Upper East",
    type: "Project on Child, Early and Forced Marriages",
    description:
      "A mentorship session for school children and the formation of the ChangeMakers Girl Club.",
    followUp:
      "Efforts to sponsor two girls back to school were unsuccessful due to lack of funding. Teenage pregnancy continued to be a significant issue. The girls club collapsed due to lack of teacher supervision.",
    image: "/images/wintima-2.jpg",
  },
  {
    date: "December 2017",
    dateTime: "2017-12",
    school: "Zaari Primary School",
    location: "Upper East",
    type: "Donation of Educational Materials",
    description:
      "Distribution of study materials including books, pens, pencils, exercise books, and school uniforms.",
    followUp:
      "The school is in dire need of continued supply of learning materials and uniforms.",
    image: "/images/wintima-3.jpg",
  },
  {
    date: "December 2018",
    dateTime: "2018-12",
    school: "Yizidug Basic School",
    location: "Upper East",
    type: "Dressing a Student Project",
    description:
      "Distribution of school uniforms and footwear to approximately 25 school children.",
    followUp:
      "The school needs more uniforms and footwear. Health was also flagged as a concern, with many community members facing vision problems due to access to unhygienic water. A borehole was requested.",
    image: "/images/wintima-4.jpg",
  },
  {
    date: "July 2019",
    dateTime: "2019-07",
    school: "Nisbuliga Basic School",
    location: "Upper East",
    type: "Donation of Educational Materials",
    description:
      "Distribution of school uniforms, sanitary pads, and learning materials for school children.",
    followUp:
      "Students called for more learning materials, particularly exercise books, as most students have nothing to write on.",
    image: "/images/wintima-5.jpg",
  },
  {
    date: "December 2021",
    dateTime: "2021-12",
    school: "Yizidug Basic School",
    location: "Upper East",
    type: "Box Library Project & Uniforms",
    description:
      "Organised the first box library project, bringing books directly into the community. Wintima also donated textbooks, notebooks, and school uniforms.",
    followUp:
      "Borehole access remains a priority. Continued communication with students and ongoing box library work planned.",
    image: "/images/wintima-6.jpg",
  },
  {
    date: "December 2022",
    dateTime: "2022-12",
    school: "Kpatua Primary School",
    location: "Upper East",
    type: "Floor Mats, Uniforms & Sanitary Pads",
    description:
      "Provided floor mats for classrooms without desks. Educational materials, school uniforms, and sanitary pads were also donated in partnership with Kofo Ampofo.",
    followUp: "Dual desk campaign initiated.",
    image: "/images/wintima-7.jpg",
  },
  {
    date: "December 2024",
    dateTime: "2024-12",
    school: "Kpatua Primary School",
    location: "Upper East",
    type: "Dual Desk Supply",
    description: "Supplied 50 dual desks to the school.",
    followUp:
      "Complete desk furnishing and supply of whiteboards remain the next goal.",
    image: "/images/wintima-8.jpg",
  },
  {
    date: "May 2025",
    dateTime: "2025-05",
    school: "Yizidug Primary School",
    location: "Upper East",
    type: "School Assessment Visit",
    description:
      "School visit to assess state of affairs and plan the full school refurbishment.",
    followUp:
      "Complete school refurbishment with desks, roofs, doors, windows, and painting.",
    image: "/images/wintima-9.jpg",
  },
];

const impactStats = [
  { value: "10 years", label: "of community service since 2015" },
  { value: "5+ schools", label: "supported across the region" },
  { value: "6+ communities", label: "reached in the Upper East Region" },
  { value: "Hundreds", label: "of students provided with school support" },
];

const formatGhs = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "GHS",
  }).format(amount);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-wintima-charcoal pt-28 text-white">
        <Image
          src="/images/wintima-15.jpg"
          alt="Wintima Foundation education outreach in Ghana"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wintima-charcoal via-wintima-charcoal/70 to-wintima-charcoal/25" />
        <div className="container relative mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-wintima-gold">
              Our Projects
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A Decade of Impact
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Since 2015, Wintima Foundation has been providing educational
              support to schools in Ghana&apos;s Upper East Region.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-wintima-warm py-16 lg:py-24" aria-labelledby="current-project">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-lg border border-wintima-maroon/10 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src={currentProject.image}
                  alt={currentProject.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-wintima-maroon px-4 py-1.5 text-sm font-bold text-white">
                    {currentProject.status}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-medium-gray">
                    <MapPin className="h-4 w-4 text-wintima-maroon" aria-hidden="true" />
                    {currentProject.location}
                  </span>
                </div>
                <h2
                  id="current-project"
                  className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl"
                >
                  Current Project: {currentProject.title}
                </h2>
                <p className="mb-8 text-base leading-7 text-medium-gray md:text-lg">
                  {currentProject.description}
                </p>

                <h3 className="mb-4 text-xl font-bold text-wintima-charcoal">
                  Project Scope
                </h3>
                <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                  {currentProject.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-md border border-wintima-maroon/10 bg-wintima-warm px-4 py-3 text-sm font-semibold text-wintima-charcoal"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-wintima-maroon"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mb-4 text-xl font-bold text-wintima-charcoal">
                  Cost Breakdown
                </h3>
                <div className="mb-8 overflow-x-auto rounded-md border border-wintima-maroon/10">
                  <table className="min-w-full divide-y divide-wintima-maroon/10 text-left text-sm">
                    <caption className="sr-only">
                      Cost breakdown for the Yizidug School Refurbishment
                    </caption>
                    <thead className="bg-wintima-light">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-bold text-wintima-charcoal">
                          Item
                        </th>
                        <th scope="col" className="px-4 py-3 text-right font-bold text-wintima-charcoal">
                          Cost (GHS)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wintima-maroon/10 bg-white">
                      {currentProject.costs.map((cost) => (
                        <tr key={cost.item}>
                          <th scope="row" className="px-4 py-3 font-medium text-medium-gray">
                            {cost.item}
                          </th>
                          <td className="px-4 py-3 text-right font-semibold text-wintima-charcoal">
                            {formatGhs(cost.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-wintima-warm">
                      <tr>
                        <th scope="row" className="px-4 py-3 font-bold text-wintima-charcoal">
                          Total
                        </th>
                        <td className="px-4 py-3 text-right font-bold text-wintima-charcoal">
                          {formatGhs(currentProjectTotal)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="min-h-11 rounded-full bg-wintima-maroon px-7 text-white hover:bg-wintima-maroon/90"
                >
                  <Link href="/donate" className="inline-flex items-center gap-2">
                    Support this project
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="completed-projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="completed-projects"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl lg:text-5xl"
            >
              Completed Projects Timeline
            </h2>
            <p className="text-lg leading-8 text-medium-gray">
              Each project records practical support, what happened afterward,
              and the needs that still shape Wintima&apos;s work.
            </p>
          </div>

          <ol
            aria-label="Wintima Foundation completed projects in chronological order"
            className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-px bg-wintima-maroon/20 md:block"
            />
            {completedProjects.map((project, index) => (
              <li
                key={`${project.dateTime}-${project.school}`}
                className={index % 2 === 0 ? "md:pr-8" : "md:translate-y-10 md:pl-8"}
              >
                <article className="relative h-full rounded-lg border border-wintima-maroon/10 bg-white p-4 shadow-sm transition-shadow focus-within:shadow-md hover:shadow-md sm:p-5">
                  <div
                    aria-hidden="true"
                    className={`absolute top-8 hidden h-3 w-3 rounded-full bg-wintima-maroon ring-4 ring-white md:block ${
                      index % 2 === 0 ? "-right-[39px]" : "-left-[39px]"
                    }`}
                  />
                  <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-wintima-light">
                      <Image
                        src={project.image}
                        alt={`${project.school} project in ${project.location}`}
                        fill
                        sizes="(min-width: 768px) 140px, 100vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <time
                        dateTime={project.dateTime}
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-wintima-maroon"
                      >
                        {project.date}
                      </time>
                      <h3 className="mb-1 text-xl font-bold text-wintima-charcoal">
                        {project.school}
                      </h3>
                      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-medium-gray">
                        <MapPin className="h-4 w-4 text-wintima-maroon" aria-hidden="true" />
                        {project.location}
                      </p>
                      <p className="mb-3 text-sm font-bold text-wintima-charcoal">
                        {project.type}
                      </p>
                      <p className="text-sm leading-6 text-medium-gray">
                        {project.description}
                      </p>
                      <details className="mt-4 rounded-md bg-wintima-warm px-4 py-3">
                        <summary className="cursor-pointer text-sm font-bold text-wintima-charcoal marker:text-wintima-maroon">
                          Follow-up
                        </summary>
                        <p className="mt-3 text-sm leading-6 text-medium-gray">
                          {project.followUp}
                        </p>
                      </details>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-wintima-warm py-16 lg:py-24" aria-labelledby="impact-summary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2
              id="impact-summary"
              className="mb-4 text-3xl font-bold text-wintima-charcoal md:text-4xl"
            >
              Impact Summary
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <article
                key={stat.value}
                className="rounded-lg border border-wintima-maroon/10 bg-white p-6 text-center shadow-sm"
              >
                <p className="mb-2 text-3xl font-bold text-wintima-maroon">
                  {stat.value}
                </p>
                <p className="text-sm leading-6 text-medium-gray">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <HeartHandshake className="h-7 w-7 text-wintima-gold" aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Want to support our next project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90">
            Your support helps Wintima respond to real school needs across
            Ghana&apos;s Upper East Region.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-h-11 rounded-full bg-white px-8 text-wintima-maroon hover:bg-white/90"
            >
              <Link href="/donate">Donate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 rounded-full border-2 border-white bg-transparent px-8 text-white hover:!bg-white hover:!text-wintima-maroon"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
