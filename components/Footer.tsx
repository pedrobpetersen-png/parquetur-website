'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/parquetur-logo.png"
                alt="Parquetur Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footerDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/parks"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('allParks')}
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('buyTickets')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about#conservation"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('conservation')}
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('partnerships')}
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('businessOpportunities')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>contact@parquetur.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>São Paulo, Brazil</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('followUs')}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('stayUpdated')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
