import { BLOG_POSTS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
       <div className="relative h-[60vh]">
        <Image
          src={post.image.imageUrl}
          alt={post.image.description}
          fill
          className="object-cover"
          data-ai-hint={post.image.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="font-headline text-4xl md:text-6xl max-w-4xl">{post.title}</h1>
            <div className="flex items-center gap-6 mt-4 text-lg text-gray-300">
                <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{post.date}</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-3xl mx-auto text-foreground">
          <p className="lead">{post.excerpt}</p>
          <p>{post.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          </p>
        </div>
      </div>
    </div>
  );
}
