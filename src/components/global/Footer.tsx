import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-accent-foreground/80">
              Experience unparalleled luxury and tranquility at Aurion Resort.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-primary transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/dining" className="hover:text-primary transition-colors">Dining</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-accent-foreground/80">
              <p>123 Luxury Lane, Paradise Island</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@aurionresort.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-accent-foreground/80">
              Sign up for exclusive offers and updates.
            </p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background/20 border-border/50 text-accent-foreground placeholder:text-accent-foreground/60" />
              <Button type="submit" variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} Aurion Resort. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
