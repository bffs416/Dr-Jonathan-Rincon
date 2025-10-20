'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '@/context/language-context';

export function TestimonialsSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const { lang } = useLanguage();

  const content = {
    es: {
      title: 'Qué dicen nuestros pacientes',
      testimonial1Name: 'Laura M.',
      testimonial1Treatment: 'Rinomodelación',
      testimonial1Comment: 'El Dr. Jonathan es un verdadero artista. Me sentí segura y en las mejores manos. ¡El resultado superó mis expectativas!',
      testimonial2Name: 'Carlos G.',
      testimonial2Treatment: 'Botox',
      testimonial2Comment: 'Excelente atención y profesionalismo. El Dr. Jonathan se tomó el tiempo de explicarme todo el procedimiento. ¡Muy recomendado!',
      testimonial3Name: 'Ana P.',
      testimonial3Treatment: 'Hilos Tensores',
      testimonial3Comment: 'Estoy feliz con los resultados de los hilos tensores. El Dr. Jonathan tiene una técnica increíble y el trato es inmejorable.',
      counterText: 'Pacientes Felices',
    },
    en: {
      title: 'What Our Patients Say',
      testimonial1Name: 'Laura M.',
      testimonial1Treatment: 'Rhinomodeling',
      testimonial1Comment: 'Dr. Jonathan is a true artist. I felt safe and in the best hands. The result exceeded my expectations!',
      testimonial2Name: 'Carlos G.',
      testimonial2Treatment: 'Botox',
      testimonial2Comment: 'Excellent care and professionalism. Dr. Jonathan took the time to explain the entire procedure to me. Highly recommended!',
      testimonial3Name: 'Ana P.',
      testimonial3Treatment: 'Thread Lifts',
      testimonial3Comment: 'I am happy with the results of the thread lifts. Dr. Jonathan has an incredible technique and the treatment is unbeatable.',
      counterText: 'Happy Patients',
    },
  };

  const currentContent = content[lang];

  const testimonials = [
    {
      name: currentContent.testimonial1Name,
      treatment: currentContent.testimonial1Treatment,
      comment: currentContent.testimonial1Comment,
      rating: 5,
    },
    {
      name: currentContent.testimonial2Name,
      treatment: currentContent.testimonial2Treatment,
      comment: currentContent.testimonial2Comment,
      rating: 5,
    },
    {
      name: currentContent.testimonial3Name,
      treatment: currentContent.testimonial3Treatment,
      comment: currentContent.testimonial3Comment,
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto h-[400px] sm:h-[500px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4">
              <Image
                src="/images/Modelo 6.jpg"
                alt="Paciente satisfecha"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full shadow-lg animate-fade-in duration-500"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
              <Image
                src="/images/Modelo 9.jpg"
                alt="Análisis facial"
                width={300}
                height={300}
                className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg animate-fade-in duration-500"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-radial from-primary to-primary-dark rounded-full animate-spin-slow blur-md opacity-50"></div>
              <div className="relative text-primary-foreground">
                <p className="text-4xl sm:text-5xl font-bold">1000+</p>
                <p className="text-lg sm:text-xl">{currentContent.counterText}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {currentContent.title}
            </h2>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="p-3 sm:p-4 bg-background/80 backdrop-blur-lg rounded-lg text-left">
                      <p className="italic text-sm sm:text-base">
                        "{testimonial.comment}"
                      </p>
                      <p className="mt-2 sm:mt-4 font-bold text-right text-sm sm:text-base">
                        - {testimonial.name}
                      </p>
                      <div className="flex flex-col items-end mt-1 sm:mt-2">
                        <p className="text-xs sm:text-sm text-gray-600">
                          {lang === 'es' ? 'Tratamiento' : 'Treatment'}: {testimonial.treatment}
                        </p>
                        <div className="flex mt-1">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
