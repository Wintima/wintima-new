'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-900 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex cursor-pointer items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Wintima Foundation Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
                width={48}
                height={48}
              />
            </div>
            <span className="text-wintima-charcoal text-xl font-bold md:text-2xl">
              Wintima Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`hover:text-wintima-maroon cursor-pointer p-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-wintima-maroon'
                      : isScrolled
                        ? 'text-wintima-charcoal'
                        : 'text-wintima-maroon'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon transform rounded-full border-2 px-5 py-2 font-medium transition-all duration-300 hover:scale-105 hover:!text-white"
            >
              <Link href="/get-involved#donate">Donate</Link>
            </Button>
            <Button
              asChild
              className="bg-wintima-maroon hover:bg-wintima-maroon/90 transform rounded-full px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-8">
              <div className="mt-8 flex flex-col space-y-4">
                <div className="flex items-center space-x-3 border-b border-gray-200 pb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Wintima Foundation Logo"
                    className="h-8 w-8 object-contain"
                    width={48}
                    height={48}
                  />
                  <span className="text-wintima-charcoal text-lg font-bold">
                    Wintima Foundation
                  </span>
                </div>

                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      className={`hover:text-wintima-maroon block text-base font-medium transition-colors duration-300 ${
                        isActive(item.href) ? 'text-wintima-maroon' : 'text-wintima-charcoal'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon w-full rounded-full border-2 py-3 font-medium hover:text-white"
                  >
                    <Link href="/get-involved#donate" onClick={() => setIsMobileMenuOpen(false)}>
                      Donate
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full rounded-full py-3 font-medium text-white"
                  >
                    <Link href="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Involved
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
