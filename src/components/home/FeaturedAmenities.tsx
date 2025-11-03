import { GLOBAL_AMENITIES } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturedAmenities() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Unrivaled Amenities</h2>
          <p className="mt-2 text-lg text-muted-foreground">Indulge in comforts designed to elevate your stay.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {GLOBAL_AMENITIES.map((amenity) => (
            <div key={amenity.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background shadow-md mb-4">
                <amenity.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-center">{amenity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
