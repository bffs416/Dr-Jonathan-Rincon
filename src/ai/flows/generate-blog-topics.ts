'use server';

/**
 * @fileOverview Generates relevant and trending blog topics for the doctor's blog.
 *
 * - generateBlogTopics - A function that generates blog topics.
 * - GenerateBlogTopicsInput - The input type for the generateBlogTopics function.
 * - GenerateBlogTopicsOutput - The return type for the generateBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to aesthetic treatments and patient interests.'),
  numTopics: z
    .number()
    .default(5)
    .describe('The number of blog topics to generate.'),
});
export type GenerateBlogTopicsInput = z.infer<
  typeof GenerateBlogTopicsInputSchema
>;

const GenerateBlogTopicsOutputSchema = z.object({
  topics: z.array(z.string()).describe('An array of suggested blog topics.'),
});
export type GenerateBlogTopicsOutput = z.infer<
  typeof GenerateBlogTopicsOutputSchema
>;

export async function generateBlogTopics(
  input: GenerateBlogTopicsInput
): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a content strategist for a medical aesthetics clinic. Based on the provided keywords, suggest {{numTopics}} relevant and trending blog topics to attract more patients and improve SEO.

Keywords: {{{keywords}}}

Topics:`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
