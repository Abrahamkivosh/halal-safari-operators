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



interface DestinationInterface {
  id: number,
  title: string,
  image: string,
  subTitle: string,
  description: string,
  activities: string[]
}
interface ContactUSInterface {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface ContactUsActionResponseInterface {
  status: number;
  body: {
    message: string;
  };
}





 interface CategoryInterface {
  id: string;
  title: string;
  image: string;
  description: string;

  // subCategories: SubCategoryInterface[];
}

 interface SubCategoryInterface {
    id: string|number;
    category_id: string;
  title: string;
   image: string;
  description: string;
  // packages: SafariPackageInterface[];
}

interface SafariPackageInterface {
  id: string;
  sub_category_id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;

  includes: {
    title: string;
    status: boolean;
  }[],

  images: string[];


  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}


interface BooksSafariFormInterface{
  name: string;
  email?: string;
  phone: string;
  date_of_travel: string;
  number_of_aldults: number;
  number_of_children: number;
  message: string;
 
}