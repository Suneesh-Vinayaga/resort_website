import { ROOMS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import BookingWidget from '@/components/home/BookingWidget';

export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    slug: room.slug,
  }));
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = ROOMS.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Carousel className="w-full">
              <CarouselContent>
                {room.images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-headline text-4xl md:text-5xl">{room.name}</h1>
            <div className="mt-4 text-3xl font-bold text-primary">
              ${room.price}
              <span className="text-lg font-normal text-muted-foreground"> / night</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground">{room.description}</p>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
                <h2 className="font-headline text-3xl mb-6">Amenities</h2>
                <ul className="grid grid-cols-2 gap-4 text-lg">
                    {room.amenities.map(amenity => (
                        <li key={amenity.name} className="flex items-center gap-3">
                            <amenity.icon className="w-6 h-6 text-primary" />
                            <span>{amenity.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:col-span-2">
                <h2 className="font-headline text-3xl mb-6">Book Your Stay</h2>
                <BookingWidget />
            </div>
        </div>
      </div>
    </div>
  );
}
