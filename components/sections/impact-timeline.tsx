'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import { impactTimeline } from '@/lib/homepage-content';

const reduceMotionTransition = { duration: 0.45, ease: 'easeOut' as const };

export function ImpactTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    rootMargin: '-80px 0px',
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
        className="bg-wintima-maroon/20 absolute top-0 left-4 hidden h-full w-px lg:left-1/2 lg:block"
      />
      {impactTimeline.map((milestone, index) => (
        <motion.li
          key={`${milestone.year}-${milestone.school}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            duration: shouldReduceMotion ? 0 : reduceMotionTransition.duration,
            ease: reduceMotionTransition.ease,
            delay: shouldReduceMotion ? 0 : Math.min(index * 0.05, 0.3),
          }}
          className={`border-wintima-maroon/10 relative rounded-lg border bg-white p-4 shadow-sm md:p-5 ${
            index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8 lg:translate-y-10'
          }`}
        >
          <div
            aria-hidden="true"
            className={`bg-wintima-maroon ring-wintima-warm absolute top-8 hidden h-3 w-3 rounded-full ring-4 lg:block ${
              index % 2 === 0 ? '-right-[39px]' : '-left-[39px]'
            }`}
          />
          <div className="grid gap-4 sm:grid-cols-[128px_1fr]">
            <div className="bg-wintima-light relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={milestone.image}
                alt={`${milestone.school} milestone in ${milestone.location}`}
                fill
                sizes="(min-width: 1024px) 128px, (min-width: 640px) 128px, 100vw"
                className="pointer-events-none object-cover"
                loading="lazy"
              />
              <div className="bg-wintima-light absolute inset-0 -z-10 animate-pulse" />
            </div>
            <div>
              <div className="text-wintima-maroon mb-3 flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {milestone.year}
                </span>
                <span className="text-medium-gray inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {milestone.location}
                </span>
              </div>
              <h3 className="text-wintima-charcoal mb-2 text-xl font-bold">{milestone.school}</h3>
              <p className="text-medium-gray text-sm leading-6">{milestone.description}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
