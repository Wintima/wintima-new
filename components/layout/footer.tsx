import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Programs", href: "/programmes" },
  { name: "Northern Stars", href: "/programmes/northern-stars" },
  { name: "Diabetes Outreach", href: "/programmes/diabetes-outreach" },
  { name: "Community Giving", href: "/programmes/community-giving" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Get Involved", href: "/get-involved" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/yeremallufoundation" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/yeremallufound" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/yeremallufoundation" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/yeremallu-foundation" },
];

export function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Foundation Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/images/logo.JPG" 
                alt="Yeremallu Foundation Logo" 
                className="h-10 w-10 rounded-full object-cover"
                width={500}
                height={500}
              />
              <span className="text-xl font-bold">Yeremallu Foundation</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering communities in Northern Ghana through education, health awareness, and acts of service. 
              Together, we create lasting change and build brighter futures for all.
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
                    className="p-2 rounded-full bg-gray-700 hover:bg-earthy-green transition-colors duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-soft-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-earthy-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-soft-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-earthy-green mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Northern Region</p>
                  <p>Ghana, West Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-earthy-green flex-shrink-0" />
                <Link
                  href="mailto:info@yeremallufoundation.org"
                  className="text-gray-300 hover:text-earthy-green transition-colors duration-300 text-sm"
                >
                  info@yeremallufoundation.org
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-earthy-green flex-shrink-0" />
                <Link
                  href="tel:+233123456789"
                  className="text-gray-300 hover:text-earthy-green transition-colors duration-300 text-sm"
                >
                  +233 (0) 123 456 789
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-soft-gold">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates on our programs and impact stories.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-earthy-green focus:ring-earthy-green"
              />
              <Button
                type="submit"
                className="w-full bg-earthy-green hover:bg-earthy-green/90 text-white py-2 rounded-md font-medium transition-colors duration-300"
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

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Yeremallu Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-earthy-green transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-earthy-green transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/financial-transparency"
              className="text-gray-400 hover:text-earthy-green transition-colors duration-300"
            >
              Financial Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 