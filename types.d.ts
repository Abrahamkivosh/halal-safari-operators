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

interface Team{
  name: string;
  profile_pic: string;
  position: string;
  is_board_member: boolean;
  email?: string;
  facebook_link?: string;
  linkedin_link?: string;
}

interface SafariQuoteForm {
  name: string; // Full name
  email: string; // Email address
  phone: string; // Phone number
  country: string; // Country of origin
  durationOfTravel: string; // Duration of the trip
  safariStartDate: string; // Safari start date in YYYY-MM-DD format
  safariEndDate: string; // Safari end date in YYYY-MM-DD format
  numberOfAdults: number; // Number of adults
  numberOfChildren: number; // Number of children
  ageOfChildren: string[]; // Array of selected age ranges
  estimatedBudget: number; // Estimated budget
  typeOfSafari: string[]; // Array of selected safari types
  message: string; // Additional trip requirements
  notificationPreference: string[]; // Preferred notification methods
}
