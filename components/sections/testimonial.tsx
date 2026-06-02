"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
  className = "",
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`h-full ${className}`}
    >
      <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="h-8 w-8 text-wintima-maroon" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-wintima-charcoal text-lg leading-relaxed mb-6 flex-grow italic">
            &quot;{quote}&quot;
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-4 mt-auto">
            {image ? (
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-wintima-maroon/20"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-wintima-maroon/10 flex items-center justify-center">
                <span className="text-wintima-maroon font-semibold text-lg">
                  {author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <div className="font-semibold text-wintima-charcoal">
                {author}
              </div>
              {role && (
                <div className="text-sm text-medium-gray">
                  {role}
                </div>
              )}
              {program && (
                <div className="text-xs text-wintima-maroon font-medium mt-1">
                  {program}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 