'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { Park } from '@/data/parks';

interface ParkCardProps {
  park: Park;
}

export function ParkCard({ park }: ParkCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${park.images[0]})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <CardContent className="p-6">
          {/* Location */}
          <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {park.location.city}, {park.location.state}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {park.name}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
            {t(park.description as any)}
          </p>

          {/* Price */}
          <div className="text-sm font-medium text-foreground">
            {t('from')} <span className="text-lg font-bold text-primary">R$ {park.ticketPrices.adult.toFixed(2)}</span> {t('perPerson')}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Link href={`/parks/${park.slug}`} className="w-full">
            <Button
              variant="outline"
              className="w-full border-primary/50 transition-all hover:bg-primary hover:text-primary-foreground"
            >
              {t('learnMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
