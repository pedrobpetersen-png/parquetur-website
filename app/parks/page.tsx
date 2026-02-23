'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { ParkCard } from '@/components/ParkCard';
import { Input } from '@/components/ui/input';
import { parks } from '@/data/parks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ParksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const filteredParks = parks.filter((park) =>
    park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    park.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    park.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    park.location.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {t('ourNaturalParks')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('ourNaturalParksDesc')}
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('searchParks')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 pr-4"
            />
          </div>
        </div>

        {/* Parks Grid */}
        {filteredParks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              {t('noParksFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
