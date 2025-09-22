import { Lightbulb } from 'lucide-react';
import TopicForm from './topic-form';

export default function BlogTopicGeneratorPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <Lightbulb className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl md:text-5xl font-bold">
          Generador de Temas para Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Sin inspiración? Usa nuestra herramienta de IA para descubrir temas de blog relevantes y populares que atraerán a tus pacientes. Simplemente ingresa algunas palabras clave y deja que la magia suceda.
        </p>
      </div>

      <TopicForm />
    </div>
  );
}
