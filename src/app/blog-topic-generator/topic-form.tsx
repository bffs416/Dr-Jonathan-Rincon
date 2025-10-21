'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect, useRef } from 'react';
import { Copy, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getBlogPost, type FormState } from './actions';
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
          Generando Artículo...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Generar Artículo
        </>
      )}
    </Button>
  );
}

export default function TopicForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(getBlogPost, initialState);
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
    if (state.blogPost) {
      toast({
        title: '¡Éxito!',
        description: 'Se ha generado un nuevo artículo para tu blog.',
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copiado',
      description: 'El contenido del artículo ha sido copiado al portapapeles.',
    });
  };

  return (
    <div className="mt-12 space-y-8">
      <Card>
        <CardContent className="p-6">
          <form ref={formRef} action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="information" className="text-lg font-medium">
                Información y Datos para el Artículo
              </Label>
              <Textarea
                id="information"
                name="information"
                placeholder="Pega aquí tus notas, datos, ideas clave, o un borrador del artículo..."
                className="min-h-[200px] text-base"
                required
              />
              {state.errors?.information && (
                <p className="text-sm font-medium text-destructive">
                  {state.errors.information[0]}
                </p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.blogPost && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-headline font-bold text-center">
              Artículo Sugerido
            </h2>
            <Button
              variant="outline"
              onClick={() => handleCopy(state.blogPost ?? '')}
              aria-label="Copiar artículo"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copiar HTML
            </Button>
          </div>
          <Card>
            <CardContent className="p-6">
              <div
                className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: state.blogPost }}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
