import React from "react";
import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { IMAGES } from "@/lib/image-assets";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Get Involved", href: "/get-involved" },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/wintima.foundation/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/wintima-foundation/",
  },
];

export function Footer() {
  return (
    <footer className="bg-wintima-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={IMAGES.logo}
                alt="Wintima Foundation Logo"
                className="h-10 w-10 object-contain"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold font-serif">Wintima Foundation</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ensuring children in rural and deprived communities across Ghana&apos;s Upper East Region
              have access to quality education through school supplies, uniforms, mentorship, and
              infrastructure support.
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
                    className="p-2 rounded-full bg-gray-700 hover:bg-wintima-maroon transition-colors duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wintima-gold"
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-wintima-gold font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-wintima-gold transition-colors duration-300 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wintima-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-wintima-gold font-serif">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-wintima-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Upper East Region</p>
                  <p>Ghana, West Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-wintima-gold flex-shrink-0" />
                <Link
                  href="mailto:wintimafoundation@gmail.com"
                  className="text-gray-300 hover:text-wintima-gold transition-colors duration-300 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wintima-gold"
                >
                  wintimafoundation@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-wintima-gold font-serif">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates on our projects and impact stories.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-wintima-gold focus:ring-wintima-gold"
              />
              <Button
                type="submit"
                className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white py-2 rounded-md font-medium transition-colors duration-300"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wintima Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-wintima-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-wintima-gold transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/financial-transparency"
              className="text-gray-400 hover:text-wintima-gold transition-colors duration-300"
            >
              Financial Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
