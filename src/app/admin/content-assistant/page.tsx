"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  suggestBlogTopics,
  SuggestBlogTopicsOutput,
} from "@/ai/flows/suggest-blog-topics";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Lightbulb, Link, Key } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  existingContent: z.string().min(10, "Please provide some existing content."),
  popularKeywords: z.string().min(3, "Please provide some keywords."),
  userSearchTrends: z.string().min(10, "Please provide some search trends."),
});

export default function ContentAssistantPage() {
  const [suggestions, setSuggestions] = useState<SuggestBlogTopicsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      existingContent: "Our resort offers luxury rooms, a spa, and fine dining. We are located on a private beach.",
      popularKeywords: "luxury resort, beach vacation, spa getaway, best resorts 2024",
      userSearchTrends: "family friendly resorts, all-inclusive packages, romantic getaways for couples",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await suggestBlogTopics(values);
      setSuggestions(result);
    } catch (e) {
      setError("Failed to generate suggestions. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            AI Content Assistant
          </CardTitle>
          <CardDescription>
            Generate blog topic ideas, keywords, and internal links based on
            your existing content and market trends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="existingContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Existing Content Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Summary of our website pages, recent blog posts..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="popularKeywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Popular Keywords</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., luxury travel, beach resorts, spa..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userSearchTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Search Trends</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'sustainable travel', 'wellness retreats'..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Generate Suggestions
              </Button>
            </form>
          </Form>

          {error && <p className="mt-4 text-destructive">{error}</p>}

          {suggestions && (
            <div className="mt-8 space-y-6">
              <Separator />
              <h3 className="font-headline text-2xl">Suggestions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Suggested Topics</h4>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                        {suggestions.suggestedTopics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                        ))}
                        </ul>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Suggested Keywords</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {suggestions.suggestedKeywords.map((keyword, i) => (
                            <span key={i} className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">{keyword}</span>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Link className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Suggested Internal Links</h4>
                        <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                        {suggestions.suggestedInternalLinks.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
