'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { parks } from '@/data/parks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TicketFormData {
  park: string;
  visitDate: string;
  adults: number;
  children: number;
  seniors: number;
  email: string;
  name: string;
}

export function TicketPurchaseForm() {
  const { t } = useLanguage();
  const [selectedPark, setSelectedPark] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TicketFormData>({
    defaultValues: {
      adults: 1,
      children: 0,
      seniors: 0,
    },
  });

  const adults = watch('adults') || 0;
  const children = watch('children') || 0;
  const seniors = watch('seniors') || 0;
  const park = parks.find((p) => p.id === selectedPark);

  const calculateTotal = () => {
    if (!park) return 0;
    return (
      adults * park.ticketPrices.adult +
      children * park.ticketPrices.child +
      seniors * park.ticketPrices.senior
    );
  };

  const onSubmit = (data: TicketFormData) => {
    console.log('Ticket purchase:', data);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  if (showConfirmation) {
    return (
      <Card className="border-2 border-primary">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <ShoppingCart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            {t('bookingConfirmed')}
          </h3>
          <p className="mb-4 text-center text-muted-foreground">
            {t('bookingConfirmedDesc')}
          </p>
          <Button onClick={() => setShowConfirmation(false)}>
            {t('bookAnother')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-primary" />
          {t('purchaseTickets')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Park Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t('selectPark')} <span className="text-destructive">*</span>
            </label>
            <Select
              value={selectedPark}
              onValueChange={(value) => {
                setSelectedPark(value);
                setValue('park', value);
              }}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t('choosePark')} />
              </SelectTrigger>
              <SelectContent>
                {parks.map((park) => (
                  <SelectItem key={park.id} value={park.id}>
                    {park.name} - {park.location.city}, {park.location.state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.park && (
              <p className="mt-1 text-sm text-destructive">
                {t('pleaseSelectPark')}
              </p>
            )}
          </div>

          {/* Visit Date */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t('visitDate')} <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="date"
                {...register('visitDate', { required: true })}
                className="h-12 pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            {errors.visitDate && (
              <p className="mt-1 text-sm text-destructive">
                {t('pleaseSelectDate')}
              </p>
            )}
          </div>

          {/* Number of Tickets */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t('numberOfVisitors')}
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="text-sm">
                    {t('adult')}{' '}
                    {park && (
                      <span className="text-muted-foreground">
                        (R$ {park.ticketPrices.adult.toFixed(2)})
                      </span>
                    )}
                  </label>
                </div>
                <Input
                  type="number"
                  {...register('adults', { min: 0, max: 20 })}
                  min="0"
                  max="20"
                  className="w-24 text-center"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="text-sm">
                    {t('child')}{' '}
                    {park && (
                      <span className="text-muted-foreground">
                        (R$ {park.ticketPrices.child.toFixed(2)})
                      </span>
                    )}
                  </label>
                </div>
                <Input
                  type="number"
                  {...register('children', { min: 0, max: 20 })}
                  min="0"
                  max="20"
                  className="w-24 text-center"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="text-sm">
                    {t('senior')}{' '}
                    {park && (
                      <span className="text-muted-foreground">
                        (R$ {park.ticketPrices.senior.toFixed(2)})
                      </span>
                    )}
                  </label>
                </div>
                <Input
                  type="number"
                  {...register('seniors', { min: 0, max: 20 })}
                  min="0"
                  max="20"
                  className="w-24 text-center"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t('fullName')} <span className="text-destructive">*</span>
            </label>
            <Input
              {...register('name', { required: true })}
              placeholder={t('yourFullName')}
              className="h-12"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{t('nameRequired')}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              {t('email')} <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              placeholder={t('emailPlaceholder')}
              className="h-12"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {t('emailRequired')}
              </p>
            )}
          </div>

          {/* Total */}
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>{t('total')}:</span>
              <span className="text-2xl text-primary">
                R$ {calculateTotal().toFixed(2)}
              </span>
            </div>
            {park && (
              <p className="mt-2 text-xs text-muted-foreground">
                {adults + children + seniors} {t('ticketsFor')} {park.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!selectedPark || adults + children + seniors === 0}
          >
            {t('confirmBooking')}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            {t('paymentInfo')}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
