'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Copy, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getBlogTopics, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Sparkles className="mr-2 h-5 w-5 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Generar Temas
        </>
      )}
    </Button>
  );
}

export default function TopicForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(getBlogTopics, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors || state.message.includes('error')) {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
    if (state.topics && state.topics.length > 0) {
      toast({
        title: '¡Éxito!',
        description: 'Se han generado nuevos temas para tu blog.',
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copiado',
      description: 'El tema ha sido copiado al portapapeles.',
    });
  };

  return (
    <div className="mt-12 space-y-8">
      <Card>
        <CardContent className="p-6">
          <form ref={formRef} action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="keywords" className="text-lg font-medium">
                Palabras Clave
              </Label>
              <Textarea
                id="keywords"
                name="keywords"
                placeholder="Ej: hilos tensores, rejuvenecimiento facial, colágeno, Medellín..."
                className="min-h-[100px] text-base"
                required
              />
              {state.errors?.keywords && (
                <p className="text-sm font-medium text-destructive">
                  {state.errors.keywords[0]}
                </p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.topics && state.topics.length > 0 && (
        <div>
          <h2 className="text-2xl font-headline font-bold text-center mb-6">
            Temas Sugeridos
          </h2>
          <div className="space-y-4">
            {state.topics.map((topic, index) => (
              <Card
                key={index}
                className="flex items-center justify-between p-4"
              >
                <p className="flex-1 pr-4">{topic}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(topic)}
                  aria-label="Copiar tema"
                >
                  <Copy className="h-5 w-5 text-muted-foreground" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
