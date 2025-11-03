'use server';

/**
 * @fileOverview A blog outline generator AI agent.
 *
 * - generateBlogOutline - A function that generates a blog outline from a single sentence prompt.
 * - GenerateBlogOutlineInput - The input type for the generateBlogOutline function.
 * - GenerateBlogOutlineOutput - The return type for the generateBlogOutline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogOutlineInputSchema = z.object({
  prompt: z.string().describe('A single sentence prompt for the blog post.'),
});
export type GenerateBlogOutlineInput = z.infer<typeof GenerateBlogOutlineInputSchema>;

const GenerateBlogOutlineOutputSchema = z.object({
  outline: z.string().describe('The generated blog outline.'),
});
export type GenerateBlogOutlineOutput = z.infer<typeof GenerateBlogOutlineOutputSchema>;

export async function generateBlogOutline(input: GenerateBlogOutlineInput): Promise<GenerateBlogOutlineOutput> {
  return generateBlogOutlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogOutlinePrompt',
  input: {schema: GenerateBlogOutlineInputSchema},
  output: {schema: GenerateBlogOutlineOutputSchema},
  prompt: `You are an expert blog outline generator. Generate a detailed blog outline based on the following prompt:\n\nPrompt: {{{prompt}}}`,
});

const generateBlogOutlineFlow = ai.defineFlow(
  {
    name: 'generateBlogOutlineFlow',
    inputSchema: GenerateBlogOutlineInputSchema,
    outputSchema: GenerateBlogOutlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
