import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { IMAGES } from '@/lib/image-assets';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get Involved', href: '/get-involved' },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/wintima.foundation/',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/wintima-foundation/',
  },
];

export function Footer() {
  return (
    <footer className="bg-wintima-charcoal text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center space-x-3">
              <Image
                src={IMAGES.logo}
                alt="Wintima Foundation Logo"
                className="h-10 w-10 object-contain"
                width={48}
                height={48}
              />
              <span className="font-serif text-xl font-bold">Wintima Foundation</span>
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              Ensuring children in rural and deprived communities across Ghana&apos;s Upper East
              Region have access to quality education through school supplies, uniforms, mentorship,
              and infrastructure support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-wintima-maroon group focus-visible:outline-wintima-gold rounded-full bg-gray-700 p-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-wintima-gold mb-6 font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-wintima-gold mb-6 font-serif text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-wintima-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Upper East Region</p>
                  <p>Ghana, West Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-wintima-gold h-5 w-5 flex-shrink-0" />
                <Link
                  href="mailto:wintimafoundation@gmail.com"
                  className="hover:text-wintima-gold focus-visible:outline-wintima-gold text-sm text-gray-300 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  wintimafoundation@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-wintima-gold mb-6 font-serif text-lg font-semibold">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              Subscribe to our newsletter for updates on our projects and impact stories.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="focus:border-wintima-gold focus:ring-wintima-gold border-gray-600 bg-gray-700 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full rounded-md py-2 font-medium text-white transition-colors duration-300"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wintima Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
