'use server';

/**
 * @fileOverview Generates a complete blog post from provided information.
 *
 * - generateBlogPost - A function that generates a blog post.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  information: z
    .string()
    .describe('Detailed information, notes, or data to be used for writing the blog post.'),
});
export type GenerateBlogPostInput = z.infer<
  typeof GenerateBlogPostInputSchema
>;

const GenerateBlogPostOutputSchema = z.object({
  blogPost: z.string().describe('The full blog post content in HTML format.'),
});
export type GenerateBlogPostOutput = z.infer<
  typeof GenerateBlogPostOutputSchema
>;

export async function generateBlogPost(
  input: GenerateBlogPostInput
): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: {schema: GenerateBlogPostInputSchema},
  output: {schema: GenerateBlogPostOutputSchema},
  prompt: `You are an expert content writer and SEO specialist for a medical aesthetics clinic. Your audience includes potential patients and other medical professionals.

Based on the provided information, write a comprehensive, engaging, and well-structured blog post. The output must be in HTML format.

Use the following guidelines for the content and structure:
1.  **Title:** Create a compelling, SEO-friendly title using an <h2> tag.
2.  **Lead Paragraph:** Start with a lead paragraph (<p class="lead">) that summarizes the article and hooks the reader.
3.  **Structure:** Use subheadings (<h3>, <h4>) to organize the content logically. Use lists (<ul>, <ol>) and bold text (<strong>) to improve readability.
4.  **Tone:** Maintain a professional, educational, and trustworthy tone.
5.  **SEO:** Naturally incorporate relevant keywords from the provided information.
6.  **Call to Action:** End the post with a clear call to action, encouraging readers to book a consultation. You can use a blockquote for this.
7.  **Format:** Ensure the entire output is a single string of valid HTML.

Information provided:
{{{information}}}

Generate the blog post now.`,
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
