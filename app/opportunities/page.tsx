'use client';

import { Store, UtensilsCrossed, Hotel, Tent, Bike, Camera, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function OpportunitiesPage() {
  const { t } = useLanguage();

  const opportunities = [
    {
      icon: UtensilsCrossed,
      title: t('restaurantTitle'),
      description: t('restaurantDesc'),
      locations: t('restaurantLocations'),
      requirements: t('restaurantReqs').split('\n'),
      status: t('restaurantStatus'),
    },
    {
      icon: Hotel,
      title: t('lodgeTitle'),
      description: t('lodgeDesc'),
      locations: t('lodgeLocations'),
      requirements: t('lodgeReqs').split('\n'),
      status: t('lodgeStatus'),
    },
    {
      icon: Tent,
      title: t('campingTitle'),
      description: t('campingDesc'),
      locations: t('campingLocations'),
      requirements: t('campingReqs').split('\n'),
      status: t('campingStatus'),
    },
    {
      icon: Store,
      title: t('retailTitle'),
      description: t('retailDesc'),
      locations: t('retailLocations'),
      requirements: t('retailReqs').split('\n'),
      status: t('retailStatus'),
    },
    {
      icon: Bike,
      title: t('equipmentTitle'),
      description: t('equipmentDesc'),
      locations: t('equipmentLocations'),
      requirements: t('equipmentReqs').split('\n'),
      status: t('equipmentStatus'),
    },
    {
      icon: Camera,
      title: t('photographyTitle'),
      description: t('photographyDesc'),
      locations: t('photographyLocations'),
      requirements: t('photographyReqs').split('\n'),
      status: t('photographyStatus'),
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {t('businessOpportunitiesTitle')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('businessOpportunitiesDesc')}
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 bg-card p-6 text-center">
            <div className="text-4xl font-bold text-primary">500k+</div>
            <div className="text-sm text-muted-foreground">{t('annualVisitors')}</div>
          </div>
          <div className="rounded-lg border-2 bg-card p-6 text-center">
            <div className="text-4xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">{t('protectedParks')}</div>
          </div>
          <div className="rounded-lg border-2 bg-card p-6 text-center">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">{t('partnerBusinesses')}</div>
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            {t('currentOpportunities')}
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon;
              return (
                <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{opp.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{opp.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 text-sm font-semibold text-foreground">{t('locations')}:</div>
                        <div className="text-sm text-muted-foreground">{opp.locations}</div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-semibold text-foreground">{t('requirements')}:</div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {opp.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {opp.status}
                        </span>
                        <Button variant="outline" size="sm">
                          {t('learnMore')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            {t('applicationProcess')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{t('submitProposal')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('submitProposalDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{t('initialReview')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('initialReviewDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{t('interviewSiteVisit')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('interviewSiteVisitDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{t('contractAward')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contractAwardDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg border-2 bg-muted/30 p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
              {t('readyToApply')}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {t('readyToApplyDesc')}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                {t('downloadRfp')}
              </Button>
              <a href="mailto:opportunities@parquetur.com.br">
                <Button size="lg" variant="outline">
                  <Send className="mr-2 h-5 w-5" />
                  {t('contactBusinessTeam')}
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t('opportunitiesContact')}
            </p>
          </div>
        </div>

        {/* Partnership Link */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t('lookingForSponsorship')}{' '}
            <Link href="/partnerships" className="font-semibold text-primary hover:underline">
              {t('viewPartnershipOptions')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
