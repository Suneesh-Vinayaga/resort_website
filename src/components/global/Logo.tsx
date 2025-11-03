import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-headline font-bold text-foreground hover:text-primary transition-colors" aria-label="Aurion Resort Homepage">
      Aurion
    </Link>
  );
}
