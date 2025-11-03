import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Utensils, Wifi, Wind, Dumbbell, Bath, Waves, Tv, User, Calendar } from 'lucide-react';

export type Amenity = {
  name: string;
  icon: React.ComponentType<any>;
};

export type Room = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  occupancy: string;
  bedType: string;
  images: ImagePlaceholder[];
  amenities: Amenity[];
};

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

export type DiningOption = {
  name: string;
  description: string;
  cuisine: string;
  hours: string;
  image: ImagePlaceholder;
  menuUrl: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: ImagePlaceholder;
};

export const GLOBAL_AMENITIES: { title: string, icon: React.FC<any> }[] = [
  { title: "World-Class Spa", icon: Bath },
  { title: "Gourmet Dining", icon: Utensils },
  { title: "Private Beach", icon: Waves },
  { title: "Infinity Pool", icon: Waves },
  { title: "Fitness Center", icon: Dumbbell },
  { title: "Free High-Speed Wi-Fi", icon: Wifi },
];

const ROOM_AMENITIES: Amenity[] = [
    { name: "High-Speed Wi-Fi", icon: Wifi },
    { name: "Air Conditioning", icon: Wind },
    { name: "Flatscreen TV", icon: Tv },
    { name: "Private Balcony", icon: User },
];

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Deluxe Ocean View',
    slug: 'deluxe-ocean-view',
    description: 'Our Deluxe Ocean View rooms offer breathtaking vistas of the sea. Elegantly appointed with modern furnishings and a private balcony, these rooms are a perfect blend of comfort and style. Enjoy the serene sound of waves and the spectacular sunsets from your personal oasis.',
    shortDescription: 'Stunning sea views from a private balcony.',
    price: 299,
    occupancy: '2 Adults',
    bedType: '1 King Bed',
    images: PlaceHolderImages.filter(p => p.id.startsWith('room-deluxe')),
    amenities: ROOM_AMENITIES,
  },
  {
    id: '2',
    name: 'King Suite',
    slug: 'king-suite',
    description: 'Indulge in the spacious luxury of our King Suite. Featuring a separate living area, a plush king-sized bed, and premium amenities, this suite provides an elevated experience. Ideal for travelers seeking extra space and sophistication.',
    shortDescription: 'Spacious suite with a separate living area.',
    price: 499,
    occupancy: '2 Adults, 1 Child',
    bedType: '1 King Bed',
    images: PlaceHolderImages.filter(p => p.id.startsWith('room-suite')),
    amenities: ROOM_AMENITIES,
  },
  {
    id: '3',
    name: 'Family Villa',
    slug: 'family-villa',
    description: 'The Family Villa is your home away from home, offering multiple bedrooms, a full kitchen, and a private pool. It\'s the ultimate choice for families or groups desiring privacy, space, and all the comforts of a luxury residence.',
    shortDescription: 'Private villa with multiple rooms and a pool.',
    price: 899,
    occupancy: '4 Adults, 2 Children',
    bedType: '2 King Beds, 2 Twin Beds',
    images: PlaceHolderImages.filter(p => p.id.startsWith('room-villa')),
    amenities: ROOM_AMENITIES,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Aurion Resort is pure magic. From the moment we arrived, we were treated like royalty. The views are surreal, and the service is impeccable. We're already planning our next trip back!",
    author: "Jessica & Tom H.",
    location: "New York, USA",
  },
  {
    quote: "An unforgettable experience! The attention to detail in every aspect of the resort is astounding. The food, the spa, the rooms... everything was perfect. A true 5-star paradise.",
    author: "Maria G.",
    location: "Madrid, Spain",
  },
  {
    quote: "We hosted our company retreat at Aurion and it was a massive success. The facilities are top-notch and the staff went above and beyond to accommodate our needs. Highly recommended.",
    author: "David Chen, CEO of Innovate Co.",
    location: "Singapore",
  },
];

export const DINING_OPTIONS: DiningOption[] = [
    {
        name: "The Azure Grille",
        description: "Experience the pinnacle of fine dining with a menu crafted by our award-winning chef. The Azure Grille offers fresh, locally-sourced seafood and prime cuts with an extensive wine list, all in an elegant oceanfront setting.",
        cuisine: "Seafood & Steakhouse",
        hours: "6:00 PM - 10:00 PM Daily",
        image: PlaceHolderImages.find(p => p.id === 'dining-1')!,
        menuUrl: "#"
    },
    {
        name: "Solana Beach Bar",
        description: "Relax by the water's edge at Solana. Enjoy handcrafted cocktails, light bites, and casual fare in a laid-back, chic atmosphere. It's the perfect spot to watch the sunset and unwind.",
        cuisine: "Cocktails & Casual Fare",
        hours: "11:00 AM - 11:00 PM Daily",
        image: PlaceHolderImages.find(p => p.id === 'dining-2')!,
        menuUrl: "#"
    }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'top-5-local-attractions',
    title: 'Top 5 Local Attractions to Visit Near Aurion Resort',
    date: 'October 26, 2023',
    author: 'The Aurion Team',
    excerpt: 'Planning your itinerary? Discover the hidden gems and must-see spots just a short journey from our resort. Make your stay even more memorable.',
    content: 'Full blog post content about the 5 local attractions would go here. It would include details about each location, travel times, and insider tips.',
    image: PlaceHolderImages.find(p => p.id === 'blog-1')!,
  },
  {
    id: '2',
    slug: 'a-guide-to-our-signature-spa-treatments',
    title: 'A Guide to Our Signature Spa Treatments',
    date: 'October 15, 2023',
    author: 'The Aurion Team',
    excerpt: 'Embark on a journey of relaxation and rejuvenation. Learn about our exclusive spa treatments designed to soothe your body and soul.',
    content: 'Full blog post content about the spa treatments would go here. It would describe each treatment, its benefits, and duration.',
    image: PlaceHolderImages.find(p => p.id === 'blog-2')!,
  },
  {
    id: '3',
    slug: 'chefs-special-recipe',
    title: "From Our Kitchen to Yours: Our Chef's Signature Dish",
    date: 'October 02, 2023',
    author: 'The Aurion Team',
    excerpt: "Ever wondered what makes our food so special? Our head chef shares a secret recipe you can try at home to bring a taste of Aurion to your table.",
    content: "Full blog post content with the recipe, ingredients, and step-by-step instructions would go here.",
    image: PlaceHolderImages.find(p => p.id === 'blog-3')!,
  },
];
