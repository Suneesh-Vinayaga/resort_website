import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImages = PlaceHolderImages.filter((p) => p.id.startsWith('hero-'));

  return (
    <div className="relative h-screen w-full">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative h-screen w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={heroImages.indexOf(image) === 0}
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-5xl font-bold md:text-7xl">
            Experience Unmatched Luxury
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            A sanctuary of tranquility and elegance awaits. Discover your personal paradise at Aurion Resort.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/booking">Book Your Stay</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
