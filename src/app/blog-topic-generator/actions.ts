'use server';

import { generateBlogTopics } from '@/ai/flows/generate-blog-topics';
import { z } from 'zod';

const FormSchema = z.object({
  keywords: z.string().min(3, {
    message: 'Por favor, introduce al menos 3 caracteres.',
  }),
});

export type FormState = {
  message: string;
  topics?: string[];
  errors?: {
    keywords?: string[];
  };
};

export async function getBlogTopics(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Error de validación.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { keywords } = validatedFields.data;

  try {
    const result = await generateBlogTopics({ keywords, numTopics: 5 });
    if (result && result.topics.length > 0) {
      return {
        message: '¡Temas generados con éxito!',
        topics: result.topics,
      };
    } else {
      return {
        message: 'No se pudieron generar temas. Inténtalo de nuevo con otras palabras clave.',
      };
    }
  } catch (error) {
    console.error('Error generating blog topics:', error);
    return {
      message: 'Ha ocurrido un error en el servidor. Por favor, inténtalo más tarde.',
    };
  }
}
