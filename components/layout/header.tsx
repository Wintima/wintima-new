'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { donateCta, isNavActive, mainNav, type NavItem } from '@/lib/site-navigation';

const MobileNavContent = dynamic(() => import('./mobile-nav').then((mod) => mod.MobileNavContent), {
  ssr: false,
});

function DesktopNavLink({
  item,
  pathname,
  isScrolled,
}: {
  item: NavItem;
  pathname: string;
  isScrolled: boolean;
}) {
  const active = isNavActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={`hover:text-wintima-maroon relative cursor-pointer px-1 py-2 text-xs font-medium transition-colors duration-300 md:px-1.5 lg:px-2 lg:text-sm ${
        active
          ? 'text-wintima-maroon after:bg-wintima-maroon after:absolute after:right-2 after:bottom-0 after:left-2 after:h-0.5 after:rounded-full'
          : isScrolled
            ? 'text-wintima-charcoal'
            : 'text-wintima-maroon'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {item.name}
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4 lg:h-16">
          <Link href="/" className="group flex shrink-0 cursor-pointer items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="Wintima Foundation Logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-10 sm:w-10"
              width={40}
              height={40}
              priority
            />
            <span className="text-wintima-charcoal hidden text-lg font-bold sm:inline md:text-xl">
              Wintima Foundation
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex md:gap-2 lg:gap-6"
          >
            {mainNav.map((item) => (
              <DesktopNavLink
                key={item.name}
                item={item}
                pathname={pathname}
                isScrolled={isScrolled}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              className="bg-wintima-maroon hover:bg-wintima-maroon/90 hidden rounded-full px-4 py-2 text-sm font-medium text-white transition-colors duration-300 md:inline-flex lg:px-6"
            >
              <Link href={donateCta.href}>{donateCta.name}</Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  id="mobile-menu-button"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-nav"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                id="mobile-nav"
                side="right"
                className="w-80 p-8"
                aria-describedby={undefined}
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation menu</SheetTitle>
                  <SheetDescription>
                    Browse Wintima Foundation pages and support our mission.
                  </SheetDescription>
                </SheetHeader>
                <MobileNavContent
                  pathname={pathname}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
