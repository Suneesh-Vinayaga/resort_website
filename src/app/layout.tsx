import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export const metadata: Metadata = {
  title: 'Aurion Resort | Experience Unmatched Luxury',
  description:
    "Discover Aurion Resort, a sanctuary of luxury and tranquility. Book your stay and indulge in world-class amenities, gourmet dining, and breathtaking views.",
  keywords: "luxury resort, hotel booking, vacation, spa, gourmet dining, beach resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
