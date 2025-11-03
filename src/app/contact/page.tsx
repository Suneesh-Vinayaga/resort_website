import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Map } from './Map';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <div className="relative h-[50vh] bg-accent">
        <Image
          src="https://picsum.photos/seed/contact-hero/1920/1080"
          alt="Close-up of an old-fashioned telephone"
          fill
          className="object-cover"
          data-ai-hint="telephone"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-headline text-white">Get In Touch</h1>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl">Send Us a Message</h2>
              <p className="mt-2 text-lg text-muted-foreground">We would love to hear from you. Fill out the form below, and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl">Contact Information</h2>
                <p className="mt-2 text-lg text-muted-foreground">Find us at our paradise location or reach out via phone or email.</p>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>123 Luxury Lane, Paradise Island</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>info@aurionresort.com</span>
                </div>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
                 <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
