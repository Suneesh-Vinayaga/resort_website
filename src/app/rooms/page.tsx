import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ROOMS } from '@/lib/data';

export default function RoomsPage() {
  return (
    <>
      <div className="relative h-[50vh] bg-accent">
        <Image
          src="https://picsum.photos/seed/rooms-hero/1920/1080"
          alt="Luxurious hotel corridor"
          fill
          className="object-cover"
          data-ai-hint="hotel corridor"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-headline text-white">Rooms & Suites</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
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
                <Button asChild>
                  <Link href={`/rooms/${room.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
