'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('parks'), href: '/parks' },
    { name: t('tickets'), href: '/tickets' },
    { name: t('about'), href: '/about' },
    { name: t('partnerships'), href: '/partnerships' },
    { name: t('opportunities'), href: '/opportunities' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/images/parquetur-logo.png"
              alt="Parquetur Logo"
              width={60}
              height={60}
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button & Language Selector */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <LanguageSelector />
            <Link href="/tickets">
              <Button className="bg-primary hover:bg-primary/90">
                {t('buyTickets')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 pt-6">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/images/parquetur-logo.png"
                      alt="Parquetur Logo"
                      width={48}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </Link>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA Button */}
                  <Link href="/tickets" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      {t('buyTickets')}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
