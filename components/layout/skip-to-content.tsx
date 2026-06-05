import Link from 'next/link';

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="bg-wintima-maroon focus:ring-wintima-gold sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
    >
      Skip to main content
    </Link>
  );
}
