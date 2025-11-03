import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BLOG_POSTS } from '@/lib/data';

export default function RecentBlogPosts() {
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">From Our Journal</h2>
          <p className="mt-2 text-lg text-muted-foreground">Stories, tips, and inspiration from Aurion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-video">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
                  />
                </Link>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="font-headline text-2xl leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">{post.date} &bull; {post.author}</CardDescription>
                <p className="mt-4 text-base">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
