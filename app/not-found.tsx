import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-wintima-light">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-wintima-maroon mb-4">404</h1>
          <h2 className="text-3xl font-bold text-wintima-charcoal mb-4">
            Page Not Found
          </h2>
          <p className="text-medium-gray text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-wintima-maroon hover:bg-wintima-maroon/90">
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full border-wintima-maroon text-wintima-maroon hover:bg-wintima-maroon hover:text-white">
            <Link href="/blog" className="flex items-center justify-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-medium-gray">
          <p>If you believe this is an error, please</p>
          <Link href="/contact" className="text-wintima-maroon hover:underline">
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
