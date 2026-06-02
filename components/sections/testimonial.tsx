'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  program?: string;
  className?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  image,
  program,
  className = '',
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`h-full ${className}`}
    >
      <Card className="h-full border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="flex h-full flex-col p-6">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="text-wintima-maroon h-8 w-8" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-wintima-charcoal mb-6 flex-grow text-lg leading-relaxed italic">
            &quot;{quote}&quot;
          </blockquote>

          {/* Author Info */}
          <div className="mt-auto flex items-center space-x-4">
            {image ? (
              <div
                className="border-wintima-maroon/20 h-12 w-12 rounded-full border-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : (
              <div className="bg-wintima-maroon/10 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="text-wintima-maroon text-lg font-semibold">
                  {author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <div className="text-wintima-charcoal font-semibold">{author}</div>
              {role && <div className="text-medium-gray text-sm">{role}</div>}
              {program && (
                <div className="text-wintima-maroon mt-1 text-xs font-medium">{program}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
