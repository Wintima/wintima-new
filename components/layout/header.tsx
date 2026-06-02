"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-900 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="Wintima Foundation Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                width={48}
                height={48}
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-wintima-charcoal">
              Wintima Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-wintima-maroon cursor-pointer p-2 ${
                    isActive(item.href)
                      ? "text-wintima-maroon"
                      : isScrolled
                      ? "text-wintima-charcoal"
                      : "text-wintima-maroon"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              className="border-2 border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/get-involved#donate">Donate</Link>
            </Button>
            <Button
              asChild
              className="bg-wintima-maroon hover:bg-wintima-maroon/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-8">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <Image 
                    src="/images/logo.png" 
                    alt="Wintima Foundation Logo" 
                    className="h-8 w-8 object-contain"
                    width={48}
                    height={48}
                  />
                  <span className="text-lg font-bold text-wintima-charcoal">
                    Wintima Foundation
                  </span>
                </div>
                
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      className={`block text-base font-medium transition-colors duration-300 hover:text-wintima-maroon ${
                        isActive(item.href)
                          ? "text-wintima-maroon"
                          : "text-wintima-charcoal"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:text-white py-3 rounded-full font-medium"
                  >
                    <Link href="/get-involved#donate" onClick={() => setIsMobileMenuOpen(false)}>
                      Donate
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90 text-white py-3 rounded-full font-medium"
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
