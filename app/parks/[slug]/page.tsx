import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, MapPin, Clock, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageGallery } from '@/components/ImageGallery';
import { WeatherWidget } from '@/components/WeatherWidget';
import { HotelsList } from '@/components/HotelsList';
import { getParkBySlug, parks } from '@/data/parks';

export function generateStaticParams() {
  return parks.map((park) => ({
    slug: park.slug,
  }));
}

export default function ParkPage({ params }: { params: { slug: string } }) {
  const park = getParkBySlug(params.slug);

  if (!park) {
    notFound();
  }

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${park.images[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb & Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/parks" className="hover:text-white">
                Parks
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{park.name}</span>
            </div>

            {/* Title */}
            <h1 className="mb-2 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {park.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">
                {park.location.city}, {park.location.state}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                About This Park
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                {park.longDescription}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                Highlights
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {park.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border bg-card p-4"
                  >
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Image Gallery */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                Gallery
              </h2>
              <ImageGallery images={park.images} alt={park.name} />
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="sticky top-20 space-y-6">
              <div className="rounded-lg border-2 bg-card p-6">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  Visit Information
                </h3>

                <div className="space-y-4">
                  {/* Opening Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Opening Hours
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {park.openingHours}
                      </div>
                    </div>
                  </div>

                  {/* Ticket Prices */}
                  <div className="flex items-start gap-3">
                    <Ticket className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="flex-1">
                      <div className="mb-2 text-sm font-medium text-foreground">
                        Ticket Prices
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Adult:</span>
                          <span className="font-medium text-foreground">
                            R$ {park.ticketPrices.adult.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Child:</span>
                          <span className="font-medium text-foreground">
                            R$ {park.ticketPrices.child.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Senior:</span>
                          <span className="font-medium text-foreground">
                            R$ {park.ticketPrices.senior.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/tickets" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Buy Tickets
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Weather Widget */}
              <WeatherWidget parkName={park.name} />

              {/* Hotels List */}
              <HotelsList parkName={park.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
