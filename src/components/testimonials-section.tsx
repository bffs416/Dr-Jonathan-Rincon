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

const testimonials = [
  {
    name: 'Laura M.',
    treatment: 'Rinomodelación',
    comment:
      'El Dr. Jonathan es un verdadero artista. Me sentí segura y en las mejores manos. ¡El resultado superó mis expectativas!',
    rating: 5,
  },
  {
    name: 'Carlos G.',
    treatment: 'Botox',
    comment:
      'Excelente atención y profesionalismo. El Dr. Jonathan se tomó el tiempo de explicarme todo el procedimiento. ¡Muy recomendado!',
    rating: 5,
  },
  {
    name: 'Ana P.',
    treatment: 'Hilos Tensores',
    comment:
      'Estoy feliz con los resultados de los hilos tensores. El Dr. Jonathan tiene una técnica increíble y el trato es inmejorable.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 relative mb-10 md:mb-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative">
                <Image
                  src="/images/Hilos_Tensores_Resultados_Paciente.jpg"
                  alt="Paciente satisfecha"
                  width={500}
                  height={500}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-10">
                <Image
                  src="/images/Hilos_Tensores_Analisis.png"
                  alt="Análisis facial"
                  width={300}
                  height={300}
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="absolute -top-10 -left-10 z-20 w-48 h-48 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-radial from-primary to-primary-dark rounded-full animate-spin-slow blur-md opacity-50"></div>
                <div className="relative text-primary-foreground">
                  <p className="text-5xl font-bold">500+</p>
                  <p className="text-xl">Pacientes Felices</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 text-center">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Qué dicen nuestros pacientes
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
                    <Card className="p-4 bg-background/80 backdrop-blur-lg rounded-lg text-left">
                      <p className="italic">"{testimonial.comment}"</p>
                      <p className="mt-4 font-bold text-right">
                        - {testimonial.name}
                      </p>
                      <div className="flex flex-col items-end mt-2">
                        <p className="text-sm text-gray-600">
                          Tratamiento: {testimonial.treatment}
                        </p>
                        <div className="flex mt-1">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-500 fill-yellow-500"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
