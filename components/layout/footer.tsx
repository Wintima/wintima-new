import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { IMAGES } from '@/lib/image-assets';
import {
  connectLinks,
  footerQuickLinks,
  foundationBrief,
  foundationTagline,
} from '@/lib/site-navigation';

const connectIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Email: Mail,
} as const;

function connectAriaLabel(name: string, external: boolean) {
  if (name === 'Email') {
    return 'Email Wintima Foundation';
  }

  return external
    ? `Wintima Foundation on ${name} (opens in new tab)`
    : `Wintima Foundation on ${name}`;
}

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-wintima-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={IMAGES.logo}
                alt="Wintima Foundation Logo"
                className="h-10 w-10 object-contain"
                width={40}
                height={40}
              />
              <span className="font-serif text-xl font-bold">Wintima Foundation</span>
            </div>
            <p className="text-wintima-gold mb-3 font-serif text-lg italic">{foundationTagline}</p>
            <p className="leading-relaxed text-gray-300">{foundationBrief}</p>
          </div>

          <div>
            <h3 className="text-wintima-gold mb-4 font-serif text-lg font-semibold">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerQuickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-wintima-gold focus-visible:outline-wintima-gold text-sm text-gray-300 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-wintima-gold mb-4 font-serif text-lg font-semibold">Connect</h3>
            <ul className="space-y-3">
              {connectLinks.map((link) => {
                const Icon = connectIcons[link.name as keyof typeof connectIcons];

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-wintima-gold focus-visible:outline-wintima-gold group flex items-center gap-3 text-sm text-gray-300 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      aria-label={connectAriaLabel(link.name, link.external)}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <Icon className="text-wintima-gold h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>
                        {link.name === 'Email' ? 'wintimafoundation@gmail.com' : link.name}
                      </span>
                      {link.external ? <span className="sr-only">(opens in new tab)</span> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Wintima Foundation. All rights reserved.
          </p>
          <nav
            aria-label="Legal links"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
          >
            <Link
              href="/privacy"
              className="hover:text-wintima-gold text-gray-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-wintima-gold text-gray-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/financial-transparency"
              className="hover:text-wintima-gold text-gray-400 transition-colors duration-300"
            >
              Financial Transparency
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
