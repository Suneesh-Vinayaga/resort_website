'use server';

/**
 * @fileOverview A blog topic suggestion AI agent.
 *
 * - suggestBlogTopics - A function that suggests blog topics.
 * - SuggestBlogTopicsInput - The input type for the suggestBlogTopics function.
 * - SuggestBlogTopicsOutput - The return type for the suggestBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogTopicsInputSchema = z.object({
  existingContent: z
    .string()
    .describe(
      'A summary of the existing content on the Aurion Resort website, including blog posts and page descriptions.'
    ),
  popularKeywords: z
    .string()
    .describe('A list of popular keywords related to travel and resorts.'),
  userSearchTrends: z
    .string()
    .describe('A summary of recent user search trends related to resorts.'),
});
export type SuggestBlogTopicsInput = z.infer<typeof SuggestBlogTopicsInputSchema>;

const SuggestBlogTopicsOutputSchema = z.object({
  suggestedTopics: z
    .array(z.string())
    .describe('A list of suggested blog topics.'),
  suggestedKeywords: z
    .array(z.string())
    .describe('A list of suggested keywords for the blog topics.'),
  suggestedInternalLinks: z
    .array(z.string())
    .describe('A list of suggested internal links to include in the blog posts.'),
});
export type SuggestBlogTopicsOutput = z.infer<typeof SuggestBlogTopicsOutputSchema>;

export async function suggestBlogTopics(input: SuggestBlogTopicsInput): Promise<SuggestBlogTopicsOutput> {
  return suggestBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogTopicsPrompt',
  input: {schema: SuggestBlogTopicsInputSchema},
  output: {schema: SuggestBlogTopicsOutputSchema},
  prompt: `You are a content strategist for Aurion Resort. Based on the existing content, popular keywords, and user search trends, suggest relevant blog topics, keywords, and internal links to improve SEO and user engagement.

Existing Content: {{{existingContent}}}

Popular Keywords: {{{popularKeywords}}}

User Search Trends: {{{userSearchTrends}}}

Suggest 5 blog topics, 5 keywords for each topic, and 3 internal links for each topic in a JSON format that matches the output schema. Do not include any extra text or explanation.`,
});

const suggestBlogTopicsFlow = ai.defineFlow(
  {
    name: 'suggestBlogTopicsFlow',
    inputSchema: SuggestBlogTopicsInputSchema,
    outputSchema: SuggestBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
