import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/blog-posts';
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
