'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  images: string[];
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({ images, title, subtitle, ctaText = 'Explore Parks', ctaLink = '/parks' }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] overflow-hidden bg-foreground/5">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Placeholder gradient background - replace with actual images */}
          <div
            className="h-full w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mb-8 text-lg sm:text-xl md:text-2xl text-white/90">
              {subtitle}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={ctaLink}>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  {ctaText}
                </Button>
              </Link>
              <Link href="/tickets">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  Buy Tickets
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
