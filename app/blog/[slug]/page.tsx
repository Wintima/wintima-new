import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import { BlogPostClient } from './blog-post-client';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
