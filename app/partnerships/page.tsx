'use client';

import { Handshake, TrendingUp, Users, Award, Building2, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PartnershipsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {t('partnershipsTitle')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('partnershipsDesc')}
          </p>
        </div>

        {/* Why Partner Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            {t('whyPartner')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{t('annualVisitorsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('annualVisitorsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{t('brandAlignment')}</h3>
                <p className="text-muted-foreground">
                  {t('brandAlignmentDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{t('marketingOpportunities')}</h3>
                <p className="text-muted-foreground">
                  {t('marketingOpportunitiesDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            {t('partnershipOpportunities')}
          </h2>
          <div className="space-y-6">
            <Card className="border-2 transition-all hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{t('namingRights')}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {t('namingRightsDesc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t('namingRightsItems').split('\n').map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Megaphone className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{t('eventSponsorship')}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {t('eventSponsorshipDesc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t('eventSponsorshipItems').split('\n').map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{t('strategicPartnerships')}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {t('strategicPartnershipsDesc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t('strategicPartnershipsItems').split('\n').map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-lg border-2 bg-muted/30 p-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
            {t('readyToPartner')}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {t('readyToPartnerDesc')}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:partnerships@parquetur.com.br">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t('contactPartnershipsTeam')}
              </Button>
            </a>
            <Link href="/opportunities">
              <Button size="lg" variant="outline">
                {t('viewBusinessOpportunities')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
