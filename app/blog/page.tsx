import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getAllBlogPosts } from '@/lib/blog-data';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAGE_SEO } from '@/lib/seo/site';

export const metadata = buildPageMetadata({
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  path: '/blog',
});

const imageBlurDataUrl =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNiAxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTInIGZpbGw9JyNmYWZhZmEnLz48cmVjdCB5PSc4JyB3aWR0aD0nMTYnIGhlaWdodD0nNCcgZmlsbD0nI2ZkZjhmMCcvPjwvc3ZnPg==';

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const hasPosts = posts.length > 0;
  const usesSparseLayout = posts.length > 0 && posts.length < 4;

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />

      <section className="bg-wintima-maroon py-16 text-white lg:py-24" aria-labelledby="blog-title">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-wintima-gold mb-3 text-sm font-bold tracking-wide uppercase">
            Wintima Blog
          </p>
          <h1 id="blog-title" className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Stories from the Field
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            First-hand accounts from our volunteers on the ground in Ghana&apos;s Upper East Region.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="stories-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-wintima-maroon mb-3 text-sm font-bold tracking-wide uppercase">
              Latest Story
            </p>
            <h2
              id="stories-heading"
              className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
            >
              Field Notes From Our Work
            </h2>
            <p className="text-medium-gray text-base leading-7 md:text-lg">
              Authentic updates from Wintima Foundation&apos;s school visits and volunteer work.
            </p>
          </div>

          {!hasPosts ? (
            <div className="bg-wintima-light mx-auto max-w-2xl rounded-lg p-8 text-center">
              <h3 className="text-wintima-charcoal mb-3 text-2xl font-bold">No stories yet.</h3>
              <p className="text-medium-gray">Check back soon!</p>
            </div>
          ) : null}

          {usesSparseLayout
            ? posts.map((post) => (
                <article key={post.slug} className="mx-auto max-w-5xl">
                  <Card className="border-wintima-maroon/10 overflow-hidden rounded-lg bg-white shadow-sm">
                    <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                      <div className="bg-wintima-light relative min-h-72">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={imageBlurDataUrl}
                          priority
                        />
                      </div>
                      <CardContent className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                        <div className="text-medium-gray mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="text-wintima-maroon h-4 w-4" />
                            <time dateTime={post.datetime}>{post.dateLabel}</time>
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="text-wintima-maroon h-4 w-4" />
                            {post.location}
                          </span>
                        </div>
                        <h3 className="text-wintima-charcoal mb-4 text-3xl leading-tight font-bold">
                          {post.title}
                        </h3>
                        <p className="text-medium-gray mb-7 text-base leading-7">{post.excerpt}</p>
                        <Button
                          asChild
                          className="bg-wintima-maroon hover:!bg-wintima-maroon/90 w-fit rounded-full px-6 text-white"
                        >
                          <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                            Read the Story
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </article>
              ))
            : null}

          {posts.length >= 4 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Card className="border-wintima-maroon/10 h-full overflow-hidden rounded-lg shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={imageBlurDataUrl}
                      />
                    </div>
                    <CardContent className="p-6">
                      <time className="text-medium-gray text-sm" dateTime={post.datetime}>
                        {post.dateLabel}
                      </time>
                      <h3 className="text-wintima-charcoal mt-2 mb-3 text-xl font-bold">
                        {post.title}
                      </h3>
                      <p className="text-medium-gray mb-5 line-clamp-3 text-sm leading-6">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-wintima-maroon inline-flex items-center gap-2 text-sm font-bold"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          ) : null}

          {hasPosts ? (
            <div className="bg-wintima-light mx-auto mt-10 max-w-3xl rounded-lg p-6 text-center">
              <p className="text-medium-gray text-base leading-7">
                More stories coming soon. Follow us on{' '}
                <a
                  href="https://www.instagram.com/wintima.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wintima-maroon font-bold hover:underline"
                >
                  Instagram
                </a>{' '}
                for updates.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-wintima-maroon py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Want to share your experience volunteering with us?
          </h2>
          <Button
            asChild
            size="lg"
            className="text-wintima-maroon rounded-full bg-white px-7 hover:bg-white/90"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
