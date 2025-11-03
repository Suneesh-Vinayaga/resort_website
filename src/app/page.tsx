import HeroSection from '@/components/home/HeroSection';
import BookingWidget from '@/components/home/BookingWidget';
import FeaturedAmenities from '@/components/home/FeaturedAmenities';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import Testimonials from '@/components/home/Testimonials';
import RecentBlogPosts from '@/components/home/RecentBlogPosts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const galleryImage1 = PlaceHolderImages.find(p => p.id === 'gallery-1');
  const galleryImage2 = PlaceHolderImages.find(p => p.id === 'gallery-2');
  const galleryImage3 = PlaceHolderImages.find(p => p.id === 'gallery-3');

  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="-mt-16 md:-mt-24 z-10 px-4">
        <BookingWidget />
      </div>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Welcome to Aurion</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nestled in a serene paradise, Aurion Resort offers an escape into luxury and tranquility. Our commitment to impeccable service and unparalleled comfort ensures a memorable stay. Explore our world-class amenities and find your personal haven.
            </p>
            <Button asChild variant="link" className="mt-4 text-primary text-lg">
              <Link href="/about">Discover Our Story &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeaturedAmenities />
      <FeaturedRooms />
      <Testimonials />

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">A Glimpse of Paradise</h2>
            <p className="mt-2 text-lg text-muted-foreground">Explore the beauty and elegance of Aurion Resort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImage1 && <Image src={galleryImage1.imageUrl} alt={galleryImage1.description} width={600} height={800} className="rounded-lg shadow-lg object-cover w-full h-full" data-ai-hint={galleryImage1.imageHint}/>}
            {galleryImage2 && <Image src={galleryImage2.imageUrl} alt={galleryImage2.description} width={600} height={400} className="rounded-lg shadow-lg object-cover w-full h-full md:col-span-2" data-ai-hint={galleryImage2.imageHint} />}
            {galleryImage3 && <Image src={galleryImage3.imageUrl} alt={galleryImage3.description} width={600} height={400} className="rounded-lg shadow-lg object-cover w-full h-full md:col-span-3" data-ai-hint={galleryImage3.imageHint} />}
          </div>
        </div>
      </section>

      <RecentBlogPosts />
    </div>
  );
}
