import { Bot } from 'lucide-react';
import TopicForm from './topic-form';

export default function BlogTopicGeneratorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <Bot className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl md:text-5xl font-bold">
          Generador de Artículos de Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Tienes apuntes, datos o una idea? Pega toda la información aquí y deja que nuestra IA escriba un artículo de blog completo, estructurado y optimizado para SEO en segundos.
        </p>
      </div>

      <TopicForm />
    </div>
  );
}
