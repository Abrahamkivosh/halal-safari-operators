interface NavType {
  label: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

interface Team {
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
  image: Image;
  title: string;
  description: string;
  subtitle: string;
  activities: string[];
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
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

interface SafariPackageInterface {
  id: string;
  sub_category_id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  people: number;
  rating: number;

  includes: {
    title: string;
    status: boolean;
  }[];

  images: string[];

  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

interface BooksSafariFormInterface {
  name: string;
  email?: string;
  phone: string;
  date_of_travel: string;
  number_of_aldults: number;
  number_of_children: number;
  message: string;
}

interface VideosGalleryInterface {
  id: number;
  title: string;
  video: string;
}

interface ImageGalleryInterface {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Photo {
  path: string;
  title: string;
  mime: string;
  type: string;
  description: string;
  tags: string[];
  size: number;
  colors: string[];
  width: number;
  height: number;
  _hash: string;
  _created: number;
  _modified: number;
  _cby: string;
  altText: string;
  thumbhash: string;
  folder: string;
  _id: string;
  _mby: string;
}

interface DefaultSectionInterface {
  _id: string;
  title: string;
  subTitle?: string;
  description?: string;
  link?: string;
  image?: Photo;
  images?: Photo[];
  position?: string;
  email?: string;
  faccebook?: string;
  linkdin?: string;
}

interface SubCategoryInterface {
  _id: string | number;
  title: string;
  image: string;
  description: string;
  packages?: {
    _model: string;
    _id: string;
  }[];
}

interface CategoryInterface {
  _id: string;
  title: string;
  subTitle?: string;
  image?: Photo;
  description: string;
  subcategories?: {
    _model: string;
    _id: string;
  }[];
}

interface Inclusion {
  title: string;
  status: boolean;
}

interface ItineraryItem {
  title: string;
  description: string;
}

interface TourPackageInterface {
  image: Photo;
  title: string;
  description: string;
  price: number;
  duration: string;
  people: number;
  rating: number;
  includes: Inclusion[];
  itinerary: ItineraryItem[];
  images?: Photo[];
}
