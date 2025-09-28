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

const featuredPost = {
  slug: '/blog/hilos-tensores-revolucion',
  image: findImage('blog-featured'),
  title: 'Hilos Tensores: La Revolución del Lifting Sin Cirugía en Medellín',
  description:
    'Descubre por qué los hilos tensores PDO se han convertido en el tratamiento #1 para el rejuvenecimiento facial sin cirugía. Conoce los tipos, beneficios y resultados.',
  date: '19 de enero de 2024',
  readTime: '6 min',
};

const blogPosts = [
  {
    slug: '/blog/bioestimuladores-colageno',
    category: 'Bioestimuladores',
    image: findImage('blog-post-1'),
    title:
      'Bioestimuladores de Colágeno: Radiesse vs Sculptra vs HArmonyCa',
    description:
      'Comparativa completa entre los principales bioestimuladores. Aprende cuál es el mejor para tu tipo de piel y objetivos estéticos.',
    date: '25 de julio de 2024',
    readTime: '8 min',
  },
  {
    slug: '/blog/botox-mitos-y-verdades',
    category: 'Facial',
    image: findImage('blog-post-2'),
    title: 'Botox: Mitos y Verdades sobre la Toxina Botulínica',
    description:
      'Desmitificamos las creencias más comunes sobre el Botox. Conoce la verdad detrás de este tratamiento y sus beneficios reales.',
    date: '16 de enero de 2024',
    readTime: '6 min',
  },
  {
    slug: '/blog/contorno-corporal-hidrolipoclasia',
    category: 'Corporal',
    image: findImage('blog-post-3'),
    title: 'Contorno Corporal: Hidrolipoclasia vs Métodos Tradicionales',
    description:
      'Conoce las ventajas de la hidrolipoclasia sobre otros métodos de reducción de grasa. Procedimiento, resultados y cuidados post-tratamiento.',
    date: '11 de enero de 2024',
    readTime: '7 min',
  },
];

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.toLowerCase() === 'nyvara') {
      router.push('/blog-topic-generator');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Blog de <span className="text-primary">Medicina Estética</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mantente informado con los últimos avances, consejos y tendencias en
          medicina estética
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Card className="shadow-none border-border/80">
          <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar artículos..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="hilos-tensores">Hilos Tensores</SelectItem>
                  <SelectItem value="bioestimuladores">
                    Bioestimuladores
                  </SelectItem>
                  <SelectItem value="botox">Botox</SelectItem>
                  <SelectItem value="corporal">Corporal</SelectItem>
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
                className="object-cover"
                data-ai-hint={featuredPost.image.hint}
              />
            )}
          </div>
          <div className="p-8 md:p-12 flex flex-col">
            <div>
              <Badge variant="default">Artículo Destacado</Badge>
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
                        Leer Artículo Completo <ArrowRight />
                    </Link>
                </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
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
                    className="object-cover"
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
                {post.description}
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
                  Leer Más <ArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
