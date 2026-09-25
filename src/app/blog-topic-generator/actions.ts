'use server';

import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { z } from 'zod';

const FormSchema = z.object({
  information: z.string().min(10, {
    message: 'Por favor, introduce información más detallada (mínimo 10 caracteres).',
  }),
});

export type FormState = {
  message: string;
  blogPost?: string;
  errors?: {
    information?: string[];
  };
};

export async function getBlogPost(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    information: formData.get('information'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Error de validación.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { information } = validatedFields.data;

  try {
    const result = await generateBlogPost({ information });
    if (result && result.blogPost) {
      return {
        message: '¡Artículo generado con éxito!',
        blogPost: result.blogPost,
      };
    } else {
      return {
        message: 'No se pudo generar el artículo. Inténtalo de nuevo con otra información.',
      };
    }
  } catch (error) {
    console.error('Error generating blog post:', error);
    return {
      message: 'Ha ocurrido un error en el servidor. Por favor, inténtalo más tarde.',
    };
  }
}
