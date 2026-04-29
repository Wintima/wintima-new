"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  label,
  description,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <div className="mb-4">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-earthy-green">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-deep-charcoal mb-2">
        {label}
      </h3>
      {description && (
        <p className="text-medium-gray text-sm md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
} 