'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroCtaButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundVideo?: string;
  ctaButtons?: HeroCtaButton[];
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
  textAlign?: 'left' | 'center';
  priorityImage?: boolean;
  imageSizes?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundImageAlt = '',
  backgroundVideo,
  ctaButtons = [],
  height = 'full',
  overlay = true,
  textAlign = 'left',
  priorityImage = false,
  imageSizes = '100vw',
}: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const heightClasses = {
    full: 'min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)]',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority={priorityImage}
            sizes={imageSizes}
            className="pointer-events-none object-cover"
          />
        ) : (
          <div className="from-wintima-maroon via-wintima-maroon/90 to-wintima-charcoal absolute inset-0 h-full w-full bg-gradient-to-br" />
        )}

        {/* Overlay */}
        {overlay && <div className="absolute inset-0 bg-black/40" />}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${textAlign === 'center' ? 'mx-auto' : ''}`}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className={textAlignClasses[textAlign]}
          >
            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.4,
                }}
                className="text-wintima-gold mb-4 text-sm font-medium tracking-wider uppercase md:text-base"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.6,
              }}
              className="mb-6 text-4xl leading-tight font-bold text-balance text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.8,
                }}
                className={`mb-8 max-w-2xl text-lg leading-relaxed text-balance text-gray-200 md:text-xl ${
                  textAlign === 'center' ? 'mx-auto' : ''
                }`}
              >
                {description}
              </motion.p>
            )}

            {ctaButtons.length > 0 && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 1,
                }}
                className={`flex flex-col gap-4 sm:flex-row ${textAlign === 'center' ? 'justify-center' : ''}`}
              >
                {ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    className={`group min-h-12 transform rounded-full px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 ${
                      button.variant === 'primary'
                        ? 'bg-wintima-maroon hover:bg-wintima-maroon/90 text-white shadow-lg hover:shadow-xl'
                        : 'hover:text-wintima-charcoal border-2 border-white bg-transparent text-white hover:bg-white'
                    }`}
                  >
                    <Link href={button.href} className="flex min-h-12 items-center space-x-2">
                      <span>{button.text}</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
          <motion.div
            {...(shouldReduceMotion
              ? { className: 'w-1 h-3 bg-white/70 rounded-full mt-2' }
              : {
                  animate: { y: [0, 12, 0] },
                  transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                  className: 'w-1 h-3 bg-white/70 rounded-full mt-2',
                })}
          />
        </div>
      </motion.div>
    </section>
  );
}
