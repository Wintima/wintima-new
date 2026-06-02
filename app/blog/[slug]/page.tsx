import { notFound } from "next/navigation";
import { BlogPostClient } from "./blog-post-client";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";

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
