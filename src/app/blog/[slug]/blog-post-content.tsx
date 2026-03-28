'use client';

import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';

export default function BlogPostContent({ postData }: { postData: any }) {
  const { lang } = useLanguage();
  
  if (!postData) {
    return notFound();
  }

  const post = postData[lang];
  
  if (!post) {
      return notFound();
  }

  useEffect(() => {
    // Select all main blocks inside the article to animate
    const elements = document.querySelectorAll(
      '.prose article > div, .prose article > figure, .prose article > h2, .prose article > h3, .prose article > ul, .prose article > blockquote'
    );

    // Initial state setup (more pronounced: deeper translate, slight scale down)
    elements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-24', 'scale-95', 'transition-all', 'duration-1000', 'ease-out');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-24', 'scale-95');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            // Optional: unobserve after animating once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -100px 0px' // Wait until element is further up in the viewport
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [postData, lang]);

  return (
    <div>
      <section className="relative w-full bg-slate-900 overflow-hidden">
        {post.image && (
          <div className="relative w-full">
            <img
              src={post.image.src}
              alt={post.title}
              className="w-full h-auto block"
            />
          </div>
        )}
        {/* Subtle overlay only if needed, but removed for direct visibility */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
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
