
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Filter,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { findImage } from '@/lib/images';
import { useLanguage } from '@/context/language-context';
import { POSTS } from '@/lib/blog-posts';

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const { lang } = useLanguage();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.toLowerCase() === 'nyvara') {
      router.push('/blog-topic-generator');
    }
  };

  const allPosts = Object.entries(POSTS).map(([slug, postData]) => ({
    slug: `/blog/${slug}`,
    ...postData[lang],
    originalSlug: slug,
  }));

  const featuredPostData = POSTS['hilos-tensores-revolucion'][lang];
  const featuredPost = {
    slug: '/blog/hilos-tensores-revolucion',
    image: featuredPostData.image,
    title: featuredPostData.title,
    description: featuredPostData.content.match(/<p class="lead">(.*?)<\/p>/)?.[1] || '',
    date: featuredPostData.date,
    readTime: featuredPostData.readTime,
  };
  
  const regularPosts = allPosts.filter(p => p.originalSlug !== 'hilos-tensores-revolucion');


  const content = {
    es: {
      pageTitle: 'Blog de Medicina Estética',
      pageSubtitle: 'Mantente informado con los últimos avances, consejos y tendencias en medicina estética',
      searchPlaceholder: 'Buscar artículos...',
      filterAll: 'Todas',
      filterThreadLifts: 'Hilos Tensores',
      filterBiostimulators: 'Bioestimuladores',
      filterBotox: 'Botox',
      filterBody: 'Corporal',
      featuredBadge: 'Artículo Destacado',
      readFullArticle: 'Leer Artículo Completo',
      readMore: 'Leer Más',
    },
    en: {
      pageTitle: 'Aesthetic Medicine Blog',
      pageSubtitle: 'Stay informed with the latest advances, tips, and trends in aesthetic medicine',
      searchPlaceholder: 'Search articles...',
      filterAll: 'All',
      filterThreadLifts: 'Thread Lifts',
      filterBiostimulators: 'Biostimulators',
      filterBotox: 'Botox',
      filterBody: 'Body',
      featuredBadge: 'Featured Article',
      readFullArticle: 'Read Full Article',
      readMore: 'Read More',
    }
  }

  const currentContent = content[lang];
  
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {currentContent.pageTitle.split(' ').slice(0, -2).join(' ')} <span className="text-primary">{currentContent.pageTitle.split(' ').slice(-2).join(' ')}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {currentContent.pageSubtitle}
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Card className="shadow-none border-border/80">
          <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={currentContent.searchPlaceholder}
                className="pl-10 w-full"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder={currentContent.filterAll} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">{currentContent.filterAll}</SelectItem>
                  <SelectItem value="hilos-tensores">{currentContent.filterThreadLifts}</SelectItem>
                  <SelectItem value="bioestimuladores">
                    {currentContent.filterBiostimulators}
                  </SelectItem>
                  <SelectItem value="botox">{currentContent.filterBotox}</SelectItem>
                  <SelectItem value="corporal">{currentContent.filterBody}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <Card className="overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            {featuredPost.image && (
              <Image
                src={featuredPost.image.src}
                alt={featuredPost.title}
                fill
                className="object-cover animate-fade-in duration-500"
                data-ai-hint={featuredPost.image.hint}
              />
            )}
          </div>
          <div className="p-8 md:p-12 flex flex-col">
            <div>
              <Badge variant="default">{currentContent.featuredBadge}</Badge>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">
                <Link href={featuredPost.slug} className="hover:text-primary transition-colors">{featuredPost.title}</Link>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {featuredPost.description}
              </p>
            </div>
            <div className="mt-8 flex-1 flex flex-col justify-end">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-6 w-fit">
                    <Link href={featuredPost.slug}>
                        {currentContent.readFullArticle} <ArrowRight />
                    </Link>
                </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <CardHeader className="p-0 relative">
              <Link href={post.slug} className="block aspect-[3/2] relative">
                {post.image && (
                  <Image
                    src={post.image.src}
                    alt={post.title}
                    fill
                    className="object-cover animate-fade-in duration-500"
                    data-ai-hint={post.image.hint}
                  />
                )}
              </Link>
              <Badge className="absolute top-4 left-4" variant="secondary">
                {post.category}
              </Badge>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline text-xl font-bold flex-1">
                 <Link href={post.slug} className="hover:text-primary transition-colors">{post.title}</Link>
              </h3>
              <p className="mt-2 text-muted-foreground text-sm line-clamp-3">
                {post.content.match(/<p class="lead">(.*?)<\/p>/)?.[1] || ''}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex-col items-start">
               <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={post.slug}>
                  {currentContent.readMore} <ArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
