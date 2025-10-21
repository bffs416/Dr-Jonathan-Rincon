'use client';

import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';

export default function BlogPostContent({ postData }: { postData: any }) {
  const { lang } = useLanguage();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postData) {
      notFound();
    } else {
      const content = postData[lang];
      setPost(content);
      setLoading(false);
    }
  }, [postData, lang]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!post) {
      return notFound();
  }

  return (
    <div>
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-slate-900">
        {post.image && (
          <Image
            src={post.image.src}
            alt={post.title}
            fill
            className="object-cover opacity-30 animate-fade-in duration-500"
            data-ai-hint={post.image.hint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8 md:py-12 text-white">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-4 font-headline text-3xl md:text-5xl font-bold !leading-tight tracking-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <article
            className="prose prose-lg lg:prose-xl dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-img:rounded-xl prose-img:shadow-lg prose-table:border prose-th:bg-muted prose-th:p-2 prose-td:p-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
