import type { Metadata } from 'next';
import { GalleryClient } from './gallery-client';

export const metadata: Metadata = {
  title: 'Gallery | Wintima Foundation',
  description:
    "View photos from Wintima Foundation's educational projects across schools in Ghana's Upper East Region.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
