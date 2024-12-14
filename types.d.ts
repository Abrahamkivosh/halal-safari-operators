interface NavType {
  label: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

interface TourInterface {
  id: number;
  title: string;
  image: string;
  price: string;
  duration: string;
  location: string;
  rating: number;
  reviews: number;
  link: string;
  description: string;
  programs: { day: number; title: string; description: string }[];
  includes: string[];
  excludes: string[];
}

interface TourCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  duration: string;
  location: string;
  link: string;
  rating: number;
}