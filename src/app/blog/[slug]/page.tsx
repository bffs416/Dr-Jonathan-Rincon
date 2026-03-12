import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/blog-posts';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = POSTS[params.slug];
  if (!postData) return {};

  // Default to Spanish for metadata if needed, or we could pass lang if available in params
  // But usually, [slug] is unique. Let's use ES as primary for SEO titles.
  const post = postData.es;

  return {
    title: `${post.title} | Dr. Jonathan Rincón`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image?.src].filter(Boolean) as string[],
    },
  };
}
import BlogPostContent from './blog-post-content';

// This is now a Server Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const postData = POSTS[params.slug];

  if (!postData) {
    notFound();
  }

  return <BlogPostContent postData={postData} />;
}

// generateStaticParams can be used here because it's a Server Component
export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug,
  }));
}
