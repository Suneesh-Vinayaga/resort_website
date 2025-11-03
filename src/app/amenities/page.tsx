import { GLOBAL_AMENITIES } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const amenityDetails = [
  {
    title: 'World-Class Spa',
    image: PlaceHolderImages.find(p => p.id === 'amenity-spa'),
    description: 'Our serene spa is a sanctuary for the senses. We offer a holistic menu of services including massages, facials, and body treatments, all using organic and locally-sourced products. Let our expert therapists guide you on a journey to complete relaxation and rejuvenation.',
    features: ['Private Treatment Rooms', 'Sauna and Steam Rooms', 'Relaxation Lounge', 'Couples Massage']
  },
  {
    title: 'Infinity Pool',
    image: PlaceHolderImages.find(p => p.id === 'amenity-pool'),
    description: 'Our stunning infinity pool appears to merge with the horizon, offering breathtaking ocean views. Relax on a plush lounger, enjoy poolside service from our bar, and soak in the sun in this picturesque setting. A dedicated kids\' pool is also available.',
    features: ['Ocean Views', 'Poolside Bar & Grill', 'Cabana Rentals', 'Towel Service']
  },
  {
    title: 'Fitness Center',
    image: PlaceHolderImages.find(p => p.id === 'amenity-gym'),
    description: 'Stay active during your vacation in our state-of-the-art fitness center. Equipped with the latest cardio and weight-training machines, we offer everything you need for a full-body workout. Personal trainers and yoga classes are available upon request.',
    features: ['Cardio Equipment', 'Free Weights', 'Yoga & Pilates Studio', 'Personal Trainers']
  },
];

export default function AmenitiesPage() {
    return (
        <>
            <div className="relative h-[50vh] bg-accent">
                <Image
                    src="https://picsum.photos/seed/amenities-hero/1920/1080"
                    alt="Person relaxing in a spa"
                    fill
                    className="object-cover"
                    data-ai-hint="spa relax"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-headline text-white">Amenities</h1>
                </div>
            </div>
            <div className="bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="space-y-20">
                        {amenityDetails.map((amenity, index) => (
                            <div key={amenity.title} className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={`prose prose-lg max-w-none text-foreground ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <h2 className="font-headline text-3xl md:text-4xl">{amenity.title}</h2>
                                    <p>{amenity.description}</p>
                                    <ul className="grid grid-cols-2 gap-2 mt-4 list-none p-0">
                                      {amenity.features.map(feature => (
                                        <li key={feature} className="flex items-center">
                                          <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    {amenity.image && 
                                      <Image
                                          src={amenity.image.imageUrl}
                                          alt={amenity.image.description}
                                          width={800}
                                          height={600}
                                          className="rounded-lg shadow-xl"
                                          data-ai-hint={amenity.image.imageHint}
                                      />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
