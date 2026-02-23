'use client';

import { TicketPurchaseForm } from '@/components/TicketPurchaseForm';
import { Shield, RefreshCw, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TicketsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            {t('purchaseTickets')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('purchaseTicketsDesc')}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <TicketPurchaseForm />
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <div className="rounded-lg border-2 bg-card p-6">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                {t('whyBookOnline')}
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">
                      {t('guaranteedEntry')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('guaranteedEntryDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">
                      {t('skipTheLine')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('skipTheLineDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">
                      {t('flexibleChanges')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('flexibleChangesDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="rounded-lg border bg-muted/50 p-6">
              <h4 className="mb-3 font-semibold text-foreground">
                {t('importantInfo')}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t('ticketsValidDate')}</li>
                <li>• {t('childrenFree')}</li>
                <li>• {t('bringId')}</li>
                <li>• {t('weatherClosures')}</li>
                <li>• {t('refundPolicy')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
