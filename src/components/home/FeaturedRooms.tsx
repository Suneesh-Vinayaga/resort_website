import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ROOMS } from '@/lib/data';

export default function FeaturedRooms() {
  const featuredRooms = ROOMS.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Accommodations</h2>
          <p className="mt-2 text-lg text-muted-foreground">Crafted for comfort, designed for dreams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  {room.images[0] && (
                     <Image
                      src={room.images[0].imageUrl}
                      alt={room.images[0].description}
                      fill
                      className="object-cover"
                      data-ai-hint={room.images[0].imageHint}
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="font-headline text-2xl">{room.name}</CardTitle>
                <CardDescription className="mt-2">{room.shortDescription}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-muted-foreground">from </span>
                  <span className="font-bold text-xl text-primary">${room.price}</span>
                  <span className="text-sm text-muted-foreground"> / night</span>
                </div>
                <Button asChild variant="secondary">
                  <Link href={`/rooms/${room.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/rooms">Explore All Rooms</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
