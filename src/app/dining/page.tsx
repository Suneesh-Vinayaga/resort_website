import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DINING_OPTIONS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function DiningPage() {
    return (
        <>
            <div className="relative h-[50vh] bg-accent">
                <Image
                    src="https://picsum.photos/seed/dining-hero/1920/1080"
                    alt="Gourmet dish being prepared"
                    fill
                    className="object-cover"
                    data-ai-hint="gourmet dish"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-headline text-white">Gourmet Dining</h1>
                </div>
            </div>
            <div className="bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="space-y-16">
                        {DINING_OPTIONS.map((option, index) => (
                            <div key={option.name} className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={`prose prose-lg max-w-none text-foreground ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <h2 className="font-headline text-3xl md:text-4xl">{option.name}</h2>
                                    <p className="text-sm font-semibold text-primary">{option.cuisine}</p>
                                    <p>{option.description}</p>
                                    <p className="font-semibold">Hours: {option.hours}</p>
                                    <Button asChild>
                                        <a href={option.menuUrl}>View Menu</a>
                                    </Button>
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <Image
                                        src={option.image.imageUrl}
                                        alt={option.image.description}
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-xl"
                                        data-ai-hint={option.image.imageHint}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
