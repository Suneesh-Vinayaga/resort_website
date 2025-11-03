import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutPage() {
  const storyImage = PlaceHolderImages.find(p => p.id === 'about-story');
  const teamImage = PlaceHolderImages.find(p => p.id === 'about-team');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      <div className="relative h-[50vh] bg-accent">
        <Image
          src="https://picsum.photos/seed/about-hero/1920/1080"
          alt="Elegant resort lobby"
          fill
          className="object-cover"
          data-ai-hint="hotel lobby"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-headline text-white">About Aurion</h1>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="font-headline text-3xl md:text-4xl">Our Story</h2>
              <p>
                Founded on the principle of creating a sanctuary from the everyday, Aurion Resort began as a dream to blend unparalleled luxury with the serene beauty of nature. We sought out this pristine coastline, a place where the sky meets the sea in a breathtaking display, and envisioned a haven of peace and rejuvenation.
              </p>
              <p>
                From our humble beginnings, we have grown into a premier destination, yet our core mission remains unchanged: to provide an unforgettable experience for every guest. Our architecture is inspired by the natural landscape, our service is guided by warmth and genuine care, and our commitment to excellence is evident in every detail.
              </p>
            </div>
            {storyImage && (
              <Image 
                src={storyImage.imageUrl} 
                alt={storyImage.description} 
                width={800} 
                height={600} 
                className="rounded-lg shadow-xl"
                data-ai-hint={storyImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl">Photo Gallery</h2>
            <p className="mt-2 text-lg text-muted-foreground">A glimpse into the world of Aurion.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={img.id} className={`relative aspect-square ${index === 2 ? 'md:col-span-2' : ''} ${index === 3 ? 'md:col-span-1' : ''}`}>
                {img && (
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover rounded-lg shadow-md"
                    data-ai-hint={img.imageHint}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
