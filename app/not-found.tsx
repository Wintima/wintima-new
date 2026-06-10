import Link from 'next/link';
import { HeartHandshake, Home, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="bg-wintima-light flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mb-8">
          <p className="text-wintima-maroon mb-4 text-8xl font-bold" aria-hidden="true">
            404
          </p>
          <h1 className="text-wintima-charcoal mb-4 text-3xl font-bold">Page not found</h1>
          <p className="text-medium-gray mb-8 text-lg">
            This page doesn&apos;t exist, but our work does.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full">
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon w-full hover:text-white"
          >
            <Link href="/projects" className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Projects</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon w-full hover:text-white"
          >
            <Link href="/donate" className="flex items-center justify-center space-x-2">
              <HeartHandshake className="h-5 w-5" />
              <span>Donate</span>
            </Link>
          </Button>
        </div>

        <div className="text-medium-gray mt-12 text-sm">
          <p>If you believe this is an error, please</p>
          <Link href="/contact" className="text-wintima-maroon hover:underline">
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
