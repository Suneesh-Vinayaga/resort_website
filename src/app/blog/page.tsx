import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from 'next/image';
import Link from "next/link";

export default function BlogPage() {
    return (
        <>
            <div className="relative h-[50vh] bg-accent">
                <Image
                    src="https://picsum.photos/seed/blog-hero/1920/1080"
                    alt="Person writing in a journal"
                    fill
                    className="object-cover"
                    data-ai-hint="journal writing"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-headline text-white">Our Journal</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
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
                                <p className="mt-4 text-base line-clamp-3">{post.excerpt}</p>
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
        </>
    );
}
