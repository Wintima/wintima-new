import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wintima.org';

const imageBlurDataUrl =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNiAxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTInIGZpbGw9JyNmYWZhZmEnLz48cmVjdCB5PSc4JyB3aWR0aD0nMTYnIGhlaWdodD0nNCcgZmlsbD0nI2ZkZjhmMCcvPjwvc3ZnPg==';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonical = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Wintima Foundation`,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${post.title} | Wintima Foundation`,
      description: post.excerpt,
      type: 'article',
      url: canonical,
      publishedTime: post.datetime,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Wintima Foundation`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datetime,
    dateModified: post.datetime,
    image: `${siteUrl}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author ?? 'Wintima Foundation',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wintima Foundation',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    locationCreated: post.location,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <article>
        <header className="bg-wintima-maroon py-14 text-white lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              asChild
              variant="outline"
              className="hover:!text-wintima-maroon mb-8 rounded-full border-white bg-transparent text-white hover:!bg-white"
            >
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mx-auto max-w-4xl">
              <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                <span className="flex items-center gap-2">
                  <CalendarDays className="text-wintima-gold h-4 w-4" />
                  <time dateTime={post.datetime}>{post.dateLabel}</time>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="text-wintima-gold h-4 w-4" />
                  {post.location}
                </span>
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">{post.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-xl">{post.excerpt}</p>
              {post.author ? (
                <p className="mt-6 text-sm font-bold tracking-wide text-white/80 uppercase">
                  By {post.author}
                </p>
              ) : null}
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="bg-wintima-light relative mb-12 overflow-hidden rounded-lg shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={imageBlurDataUrl}
                  priority
                />
              </div>
            </div>

            <div className="mx-auto max-w-[720px] space-y-10">
              {post.sections.map((section, index) => (
                <section key={section.heading ?? `intro-${index}`}>
                  {section.heading ? (
                    <h2 className="text-wintima-charcoal mb-4 text-2xl font-bold md:text-3xl">
                      {section.heading}
                    </h2>
                  ) : null}
                  <div className="text-medium-gray space-y-5 text-base leading-8 md:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="bg-wintima-light py-16 lg:py-24" aria-labelledby="related-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2
                id="related-heading"
                className="text-wintima-charcoal mb-4 text-3xl font-bold md:text-4xl"
              >
                Related Stories
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug}>
                  <Card className="border-wintima-maroon/10 h-full overflow-hidden rounded-lg bg-white shadow-sm">
                    <CardContent className="p-6">
                      <time className="text-medium-gray text-sm" dateTime={relatedPost.datetime}>
                        {relatedPost.dateLabel}
                      </time>
                      <h3 className="text-wintima-charcoal mt-2 mb-3 text-xl font-bold">
                        {relatedPost.title}
                      </h3>
                      <Button
                        asChild
                        variant="outline"
                        className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon rounded-full hover:!text-white"
                      >
                        <Link href={`/blog/${relatedPost.slug}`}>Read Story</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="outline"
            className="border-wintima-maroon text-wintima-maroon hover:!bg-wintima-maroon rounded-full hover:!text-white"
          >
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
