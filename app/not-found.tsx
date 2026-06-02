import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="bg-wintima-light flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mb-8">
          <h1 className="text-wintima-maroon mb-4 text-9xl font-bold">404</h1>
          <h2 className="text-wintima-charcoal mb-4 text-3xl font-bold">Page Not Found</h2>
          <p className="text-medium-gray mb-8 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="bg-wintima-maroon hover:bg-wintima-maroon/90 w-full">
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon w-full hover:text-white"
          >
            <Link href="/blog" className="flex items-center justify-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
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
