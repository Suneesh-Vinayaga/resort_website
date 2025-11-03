import BookingWidget from "@/components/home/BookingWidget";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BookingPage() {
    return (
        <>
            <div className="relative h-[50vh] bg-accent">
                <Image
                    src="https://picsum.photos/seed/booking-hero/1920/1080"
                    alt="Hotel reception desk"
                    fill
                    className="object-cover"
                    data-ai-hint="reception desk"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-headline text-white">Book Your Stay</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">Reservation Details</CardTitle>
                        <CardDescription>
                            Complete the form below to check availability and finalize your booking. 
                            In a real application, this page would integrate with a full booking engine.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BookingWidget />
                        <div className="mt-8 text-center text-muted-foreground">
                            <p>This is a demonstration. Booking functionality is not live.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
