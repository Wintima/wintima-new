import dynamic from 'next/dynamic';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAGE_SEO } from '@/lib/seo/site';
import { GallerySkeleton } from './gallery-skeleton';

const GalleryClient = dynamic(() => import('./gallery-client').then((mod) => mod.GalleryClient), {
  loading: () => <GallerySkeleton />,
});

export const metadata = buildPageMetadata({
  title: PAGE_SEO.gallery.title,
  description: PAGE_SEO.gallery.description,
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />
      <GalleryClient />
    </>
  );
}
