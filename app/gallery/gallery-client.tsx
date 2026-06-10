'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageOff, Loader2, Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const imageHost = '/images/gallery/';
const blurDataUrl =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjgiIGZpbGw9IiNmM2VlZTUiLz48cGF0aCBkPSJNMCA2bDMtMiAycjIgMS0xIDQtMyAxIiBmaWxsPSIjZDRhODQzIiBvcGFjaXR5PSIuMzUiLz48L3N2Zz4=';

type GalleryGroup = {
  id: string;
  title: string;
  dateLabel: string;
  school: string;
  year: string;
  project: string;
  folder: string;
  images: string[];
};

type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  groupId: string;
  groupTitle: string;
  dateLabel: string;
  school: string;
  year: string;
  project: string;
};

type GalleryFilter =
  | {
      id: string;
      label: string;
      type: 'all';
    }
  | {
      id: string;
      label: string;
      type: 'school' | 'year';
      value: string;
    };

const highlights = [
  {
    id: 'yizidug-2021-highlight',
    title: 'Yizidug Basic School',
    year: '2021',
    project: 'Box Library Project',
    src: `${imageHost}images/01highlight.JPG`,
    alt: 'Yizidug Basic School Box Library Project in 2021',
  },
  {
    id: 'kpatua-2024-highlight',
    title: 'Kpatua Primary School',
    year: '2024',
    project: 'Dual Desk Supply',
    src: `${imageHost}images/02highlight.jpg`,
    alt: 'Kpatua Primary School dual desk supply project in 2024',
  },
  {
    id: 'kpatua-2022-highlight',
    title: 'Kpatua Primary School',
    year: '2022',
    project: 'Uniforms, Floor Mats & Sanitary Pads',
    src: `${imageHost}images/03highlight.jpg`,
    alt: 'Kpatua Primary School uniforms, floor mats, and sanitary pads project in 2022',
  },
];

const galleryGroups: GalleryGroup[] = [
  {
    id: 'frafra-2016',
    title: 'July 2016 — Frafra Catholic School',
    dateLabel: 'July 2016',
    school: 'Frafra',
    year: '2016',
    project: 'School Support Visit',
    folder: 'images/projects/frafra-2016/',
    images: [
      'IMG-20160610-WA0009.jpg',
      'IMG-20160610-WA0012.jpg',
      'IMG-20160711-WA0006.jpg',
      'IMG-20160711-WA0007.jpg',
      'IMG-20160712-WA0014.jpg',
      'IMG-20160712-WA0015.jpg',
    ],
  },
  {
    id: 'zaari-2017',
    title: 'December 2017 — Zaari Primary School',
    dateLabel: 'December 2017',
    school: 'Zaari',
    year: '2017',
    project: 'Education Supply Project',
    folder: 'images/projects/zaari-2017/',
    images: [
      'IMG-20171225-WA0024.jpg',
      'IMG-20171225-WA0025.jpg',
      'IMG-20171225-WA0027.jpg',
      'IMG-20171225-WA0028.jpg',
      'IMG-20171225-WA0033.jpg',
      'IMG-20171225-WA0034.jpg',
      'IMG-20171225-WA0035.jpg',
      'IMG-20171225-WA0036.jpg',
    ],
  },
  {
    id: 'yizidug-2018',
    title: 'December 2018 — Yizidug Basic School',
    dateLabel: 'December 2018',
    school: 'Yizidug',
    year: '2018',
    project: 'School Support Project',
    folder: 'images/projects/yizidug-2018/',
    images: [
      'ARNJ3607.JPG',
      'BZZT5967.JPG',
      'CDAO8251.JPG',
      'EOQY9570.JPG',
      'GCBE4980.JPG',
      'GYOR3422.JPG',
    ],
  },
  {
    id: 'nisbuliga-2019',
    title: 'July 2019 — Nisbuliga Basic School',
    dateLabel: 'July 2019',
    school: 'Nisbuliga',
    year: '2019',
    project: 'School Support Project',
    folder: 'images/projects/nisbuliga-2019/',
    images: [
      'WhatsApp Image 2019-07-19 at 15.58.28.jpeg',
      'WhatsApp Image 2019-07-19 at 15.58.53.jpeg',
      'WhatsApp Image 2019-07-19 at 16.22.45.jpeg',
      'WhatsApp Image 2019-07-19 at 16.24.13.jpeg',
      'WhatsApp Image 2019-07-19 at 16.25.03.jpeg',
      'WhatsApp Image 2019-07-19 at 16.26.20.jpeg',
    ],
  },
  {
    id: 'yizidug-2021',
    title: 'December 2021 — Yizidug Basic School',
    dateLabel: 'December 2021',
    school: 'Yizidug',
    year: '2021',
    project: 'Box Library Project',
    folder: 'images/projects/yizidug-2021/',
    images: [
      'IMG_0435.jpg',
      'IMG_0436.jpg',
      'IMG_0438.jpg',
      'IMG_0439.jpg',
      'IMG_0441.jpg',
      'IMG_0442.jpg',
    ],
  },
  {
    id: 'kpatua-2022',
    title: 'December 2022 — Kpatua Primary School',
    dateLabel: 'December 2022',
    school: 'Kpatua',
    year: '2022',
    project: 'Uniforms, Floor Mats & Sanitary Pads',
    folder: 'images/projects/kpatua-2022/',
    images: [
      'IMG_9463.jpg',
      'IMG_9466.jpg',
      'IMG_9468.jpg',
      'IMG_9478.jpg',
      'IMG_9479.jpg',
      'IMG_9480.jpg',
    ],
  },
  {
    id: 'kpatua-2024',
    title: 'December 2024 — Kpatua Primary School',
    dateLabel: 'December 2024',
    school: 'Kpatua',
    year: '2024',
    project: 'Dual Desk Supply',
    folder: 'images/projects/kpatua-2024/',
    images: [
      'IMG_5996.jpg',
      'IMG_6009.jpg',
      'IMG_6010.jpg',
      'IMG_6011.jpg',
      'IMG_6012.jpg',
      'IMG_6013.jpg',
    ],
  },
  {
    id: 'yizidug-2025',
    title: 'May 2025 — Yizidug Primary School',
    dateLabel: 'May 2025',
    school: 'Yizidug',
    year: '2025',
    project: 'School Support Project',
    folder: 'images/projects/yizidug-2025/',
    images: [
      '20250525_091224.jpg',
      '20250525_091248.jpg',
      '20250525_091515.jpg',
      '20250525_091539.jpg',
      '20250525_091546.jpg',
      '20250525_091644.jpg',
    ],
  },
];

const makeSrc = (folder: string, fileName: string) =>
  `${imageHost}${folder}${fileName.split('/').map(encodeURIComponent).join('/')}`;

const galleryPhotos: GalleryPhoto[] = galleryGroups.flatMap((group) =>
  group.images.map((image, index) => ({
    id: `${group.id}-${index}`,
    src: makeSrc(group.folder, image),
    alt: `${group.school} school ${group.project} photo from ${group.dateLabel}`,
    caption: `${group.project} — ${group.dateLabel}`,
    groupId: group.id,
    groupTitle: group.title,
    dateLabel: group.dateLabel,
    school: group.school,
    year: group.year,
    project: group.project,
  }))
);

const filters: GalleryFilter[] = [
  { id: 'all', label: 'All', type: 'all' },
  ...Array.from(new Set(galleryGroups.map((group) => group.school))).map((school) => ({
    id: `school-${school.toLowerCase()}`,
    label: school,
    type: 'school' as const,
    value: school,
  })),
  ...Array.from(new Set(galleryGroups.map((group) => group.year))).map((year) => ({
    id: `year-${year}`,
    label: year,
    type: 'year' as const,
    value: year,
  })),
];

function GalleryImage({
  photo,
  priority = false,
  sizes,
  onClick,
}: {
  photo: Pick<GalleryPhoto, 'alt' | 'caption' | 'src'>;
  priority?: boolean;
  sizes: string;
  onClick?: () => void;
}) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group focus-visible:outline-wintima-maroon relative block w-full overflow-hidden rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label={`Open photo: ${photo.caption}`}
    >
      <div className="bg-wintima-light relative aspect-[4/3] overflow-hidden">
        {!hasLoaded && !hasError ? (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        ) : null}
        {hasError ? (
          <div className="text-medium-gray flex h-full min-h-48 flex-col items-center justify-center gap-3 bg-gray-100 px-4 text-center text-sm">
            <ImageOff className="h-8 w-8" aria-hidden="true" />
            <span>Image unavailable</span>
          </div>
        ) : (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            sizes={sizes}
            className={`object-cover transition duration-500 group-hover:scale-105 ${
              hasLoaded ? 'blur-0 opacity-100' : 'opacity-0 blur-sm'
            }`}
            onLoad={() => setHasLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </button>
  );
}

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLightboxLoading, setIsLightboxLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = useMemo(() => {
    const filter = filters.find((item) => item.id === activeFilter);

    if (!filter || filter.type === 'all') {
      return galleryPhotos;
    }

    return galleryPhotos.filter((photo) =>
      filter.type === 'school' ? photo.school === filter.value : photo.year === filter.value
    );
  }, [activeFilter]);

  const filteredGroups = useMemo(
    () =>
      galleryGroups
        .map((group) => ({
          ...group,
          photos: filteredPhotos.filter((photo) => photo.groupId === group.id),
        }))
        .filter((group) => group.photos.length > 0),
    [filteredPhotos]
  );

  const openLightbox = (photo: GalleryPhoto) => {
    const photoIndex = filteredPhotos.findIndex((item) => item.id === photo.id);
    setLightboxIndex(photoIndex);
    setIsLightboxLoading(true);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPhoto = useCallback(
    (direction: 'previous' | 'next') => {
      if (lightboxIndex === null || filteredPhotos.length === 0) {
        return;
      }

      setIsLightboxLoading(true);
      setLightboxIndex((currentIndex) => {
        if (currentIndex === null) {
          return currentIndex;
        }

        if (direction === 'previous') {
          return currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
        }

        return currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
      });
    },
    [filteredPhotos.length, lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPhoto('previous');
      }

      if (event.key === 'ArrowRight') {
        showPhoto('next');
      }

      if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.querySelector<HTMLElement>('button')?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredPhotos.length, lightboxIndex, showPhoto]);

  const activePhoto = lightboxIndex === null ? null : filteredPhotos[lightboxIndex];
  const activePhotoPosition = lightboxIndex === null ? 0 : lightboxIndex + 1;
  const shouldShowFilters = galleryPhotos.length > 12;

  return (
    <div className="min-h-screen bg-white">
      <section
        className="bg-wintima-maroon py-16 text-white lg:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-wintima-gold mb-3 text-sm font-bold tracking-wide uppercase">
            Wintima Foundation
          </p>
          <h1 id="gallery-heading" className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Project Gallery
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            A Decade of Impact — Photos from our work across Ghana&apos;s Upper East Region
          </p>
        </div>
      </section>

      <section className="bg-wintima-warm py-14 lg:py-20" aria-labelledby="highlights-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-wintima-maroon mb-2 text-sm font-bold tracking-wide uppercase">
              Project Highlights
            </p>
            <h2
              id="highlights-heading"
              className="text-wintima-charcoal text-3xl font-bold md:text-4xl"
            >
              Featured moments from the archive
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.id}
                className="border-wintima-maroon/10 overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <GalleryImage
                  photo={{ src: highlight.src, alt: highlight.alt, caption: highlight.project }}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <CardContent className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-wintima-maroon text-white">{highlight.year}</Badge>
                    <Badge
                      variant="outline"
                      className="border-wintima-maroon/30 text-wintima-maroon"
                    >
                      {highlight.title}
                    </Badge>
                  </div>
                  <h3 className="text-wintima-charcoal text-xl font-bold">{highlight.project}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20" aria-labelledby="full-gallery-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-wintima-maroon mb-2 text-sm font-bold tracking-wide uppercase">
                Full Photo Gallery
              </p>
              <h2
                id="full-gallery-heading"
                className="text-wintima-charcoal text-3xl font-bold md:text-4xl"
              >
                Photos organized by project
              </h2>
            </div>
            <p className="text-medium-gray max-w-xl leading-7">
              Browse authentic project photos by school or year. Select any image to view it larger.
            </p>
          </div>

          {shouldShowFilters ? (
            <div className="mb-10 overflow-x-auto pb-2" aria-label="Gallery filters">
              <div className="flex min-w-max gap-3">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    type="button"
                    variant={activeFilter === filter.id ? 'default' : 'outline'}
                    aria-pressed={activeFilter === filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`min-h-11 rounded-full px-5 ${
                      activeFilter === filter.id
                        ? 'bg-wintima-maroon hover:bg-wintima-maroon/90 text-white'
                        : 'border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon hover:!text-white'
                    }`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}

          {galleryPhotos.length === 0 ? (
            <div className="bg-wintima-light mx-auto max-w-2xl rounded-lg p-8 text-center">
              <Search className="text-wintima-maroon mx-auto mb-4 h-10 w-10" aria-hidden="true" />
              <h3 className="text-wintima-charcoal mb-3 text-2xl font-bold">
                Gallery coming soon!
              </h3>
              <p className="text-medium-gray">
                Follow us on{' '}
                <a
                  href="https://www.instagram.com/wintima.foundation/"
                  className="text-wintima-maroon font-bold hover:underline"
                >
                  Instagram
                </a>{' '}
                for photos from our latest projects.
              </p>
            </div>
          ) : filteredGroups.length === 0 ? (
            <div className="bg-wintima-light rounded-lg p-8 text-center">
              <Search className="text-wintima-maroon mx-auto mb-4 h-10 w-10" aria-hidden="true" />
              <h3 className="text-wintima-charcoal text-2xl font-bold">
                No photos in this category yet.
              </h3>
            </div>
          ) : (
            <div role="list" aria-live="polite" className="space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredGroups.map((group) => (
                  <motion.section
                    key={group.id}
                    role="listitem"
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.25 }}
                    aria-labelledby={`${group.id}-heading`}
                  >
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3
                          id={`${group.id}-heading`}
                          className="text-wintima-charcoal text-2xl font-bold"
                        >
                          {group.title}
                        </h3>
                        <p className="text-medium-gray mt-1 text-sm font-medium">{group.project}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-wintima-maroon/30 text-wintima-maroon w-fit"
                      >
                        {group.photos.length} photos
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {group.photos.map((photo) => (
                        <motion.figure
                          key={photo.id}
                          layout
                          className="border-wintima-maroon/10 overflow-hidden rounded-lg border bg-white shadow-sm"
                        >
                          <GalleryImage
                            photo={photo}
                            sizes="(min-width: 1440px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            onClick={() => openLightbox(photo)}
                          />
                          <figcaption className="text-wintima-charcoal px-4 py-3 text-sm font-semibold">
                            {photo.caption}
                          </figcaption>
                        </motion.figure>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {activePhoto ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 text-white md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStart === null) {
                return;
              }

              const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
              const distance = touchStart - touchEnd;

              if (Math.abs(distance) > 50) {
                showPhoto(distance > 0 ? 'next' : 'previous');
              }

              setTouchStart(null);
            }}
          >
            <div
              ref={modalRef}
              className="relative flex h-full w-full flex-col md:max-h-[90vh] md:max-w-6xl"
            >
              <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={closeLightbox}
                  aria-label="Close gallery lightbox"
                  className="hover:!text-wintima-charcoal border-white bg-black/40 text-white hover:!bg-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
                <p className="rounded-full bg-black/50 px-4 py-2 text-sm font-semibold">
                  {activePhotoPosition} of {filteredPhotos.length}
                </p>
              </div>

              <div className="relative min-h-0 flex-1">
                {isLightboxLoading ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <Loader2 className="h-9 w-9 animate-spin" aria-hidden="true" />
                    <span className="sr-only">Loading full-size image</span>
                  </div>
                ) : null}
                <Image
                  key={activePhoto.id}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  sizes="100vw"
                  className="object-contain"
                  onLoad={() => setIsLightboxLoading(false)}
                />
              </div>

              <div className="bg-black/75 p-4 text-center md:rounded-b-lg">
                <p className="font-bold">{activePhoto.groupTitle}</p>
                <p className="text-sm text-white/80">{activePhoto.project}</p>
              </div>

              {filteredPhotos.length > 1 ? (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => showPhoto('previous')}
                    aria-label="View previous photo"
                    className="hover:!text-wintima-charcoal absolute top-1/2 left-3 h-12 w-12 -translate-y-1/2 rounded-full border-white bg-black/40 text-white hover:!bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => showPhoto('next')}
                    aria-label="View next photo"
                    className="hover:!text-wintima-charcoal absolute top-1/2 right-3 h-12 w-12 -translate-y-1/2 rounded-full border-white bg-black/40 text-white hover:!bg-white"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
