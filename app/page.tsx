'use client';

import Link from 'next/link';
import { TreePine, Users, MapPin, Shield } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { ParkCard } from '@/components/ParkCard';
import { Button } from '@/components/ui/button';
import { getFeaturedParks } from '@/data/parks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const featuredParks = getFeaturedParks();
  const { t } = useLanguage();

  const heroImages = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        images={heroImages}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        ctaText={t('exploreParks')}
        ctaLink="/parks"
      />

      {/* Stats Section */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TreePine className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">{t('naturalParks')}</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">50,000+</div>
              <div className="text-sm text-muted-foreground">{t('hectaresProtected')}</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500,000+</div>
              <div className="text-sm text-muted-foreground">{t('annualVisitors')}</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1,000+</div>
              <div className="text-sm text-muted-foreground">{t('speciesProtected')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Parks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {t('featuredParks')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t('featuredParksDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/parks">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary hover:text-primary-foreground">
                {t('viewAllParks')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {t('readyTitle')}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {t('readyDesc')}
            </p>
            <Link href="/tickets">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t('buyTicketsNow')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
