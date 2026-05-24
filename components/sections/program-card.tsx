"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  image?: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  className?: string;
}

export function ProgramCard({
  title,
  description,
  icon,
  href,
  image,
  stats,
  className = "",
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`h-full ${className}`}
    >
      <Card className="h-full overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group border-0">
        {/* Image Section */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full backdrop-blur-sm">
              <div className="text-wintima-maroon">
                {icon}
              </div>
            </div>
          </div>
        )}

        <CardContent className="p-6 flex flex-col h-full">
          {/* Icon and Title for cards without images */}
          {!image && (
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-wintima-maroon/10 rounded-full">
                <div className="text-wintima-maroon">
                  {icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-wintima-charcoal group-hover:text-wintima-maroon transition-colors duration-300">
                {title}
              </h3>
            </div>
          )}

          {/* Title for cards with images */}
          {image && (
            <h3 className="text-xl font-bold text-wintima-charcoal mb-4 group-hover:text-wintima-maroon transition-colors duration-300">
              {title}
            </h3>
          )}

          {/* Description */}
          <p className="text-medium-gray mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-wintima-maroon mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-medium-gray uppercase tracking-wide">
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
              className="w-full justify-between text-wintima-maroon hover:!text-white hover:!bg-wintima-maroon transition-all duration-300 group-hover:!bg-wintima-maroon group-hover:!text-white border border-wintima-maroon hover:border-wintima-maroon"
            >
              <Link href={href} className="flex items-center justify-between w-full">
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