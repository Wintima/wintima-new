'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProgramCardStat {
  label: string;
  value: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  image?: string;
  stats?: ProgramCardStat[];
  className?: string;
}

export function ProgramCard({
  title,
  description,
  icon,
  href,
  image,
  stats,
  className = '',
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`h-full ${className}`}
    >
      <Card className="group h-full overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
        {/* Image Section */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 rounded-full bg-white/90 p-3 backdrop-blur-sm">
              <div className="text-wintima-maroon">{icon}</div>
            </div>
          </div>
        )}

        <CardContent className="flex h-full flex-col p-6">
          {/* Icon and Title for cards without images */}
          {!image && (
            <div className="mb-4 flex items-center space-x-4">
              <div className="bg-wintima-maroon/10 rounded-full p-3">
                <div className="text-wintima-maroon">{icon}</div>
              </div>
              <h3 className="text-wintima-charcoal group-hover:text-wintima-maroon text-xl font-bold transition-colors duration-300">
                {title}
              </h3>
            </div>
          )}

          {/* Title for cards with images */}
          {image && (
            <h3 className="text-wintima-charcoal group-hover:text-wintima-maroon mb-4 text-xl font-bold transition-colors duration-300">
              {title}
            </h3>
          )}

          {/* Description */}
          <p className="text-medium-gray mb-6 flex-grow leading-relaxed">{description}</p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-wintima-maroon mb-1 text-2xl font-bold">{stat.value}</div>
                  <div className="text-medium-gray text-xs tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-auto">
            <Button
              asChild
              variant="outline"
              className="text-wintima-maroon hover:!bg-wintima-maroon group-hover:!bg-wintima-maroon border-wintima-maroon hover:border-wintima-maroon w-full justify-between border transition-all duration-300 group-hover:!text-white hover:!text-white"
            >
              <Link href={href} className="flex w-full items-center justify-between">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
