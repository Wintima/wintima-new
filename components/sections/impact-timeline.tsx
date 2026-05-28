"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarDays, MapPin } from "lucide-react";
import { impactTimeline } from "@/lib/homepage-content";

const reduceMotionTransition = { duration: 0.45, ease: "easeOut" as const };

export function ImpactTimeline() {
  const { ref, inView } = useInView({
    rootMargin: "-80px 0px",
    threshold: 0.12,
    triggerOnce: true,
  });

  return (
    <ol
      ref={ref}
      aria-label="Wintima Foundation impact milestones from 2015 to 2025"
      className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2"
    >
      <div
        aria-hidden="true"
        className="absolute left-4 top-0 hidden h-full w-px bg-wintima-maroon/20 lg:left-1/2 lg:block"
      />
      {impactTimeline.map((milestone, index) => (
        <motion.li
          key={`${milestone.year}-${milestone.school}`}
          tabIndex={0}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            ...reduceMotionTransition,
            delay: Math.min(index * 0.05, 0.3),
          }}
          className={`relative rounded-lg border border-wintima-maroon/10 bg-white p-4 shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-wintima-maroon focus-visible:ring-offset-2 md:p-5 ${
            index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:translate-y-10"
          }`}
        >
          <div
            aria-hidden="true"
            className={`absolute top-8 hidden h-3 w-3 rounded-full bg-wintima-maroon ring-4 ring-wintima-warm lg:block ${
              index % 2 === 0 ? "-right-[39px]" : "-left-[39px]"
            }`}
          />
          <div className="grid gap-4 sm:grid-cols-[128px_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-wintima-light">
              <Image
                src={milestone.image}
                alt={`${milestone.school} milestone in ${milestone.location}`}
                fill
                sizes="(min-width: 1024px) 128px, (min-width: 640px) 128px, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 animate-pulse bg-wintima-light -z-10" />
            </div>
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm font-medium text-wintima-maroon">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {milestone.year}
                </span>
                <span className="inline-flex items-center gap-1.5 text-medium-gray">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {milestone.location}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-wintima-charcoal">
                {milestone.school}
              </h3>
              <p className="text-sm leading-6 text-medium-gray">
                {milestone.description}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
