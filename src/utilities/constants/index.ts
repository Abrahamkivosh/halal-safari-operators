import { CONTACT_EMAIL } from "@/configs";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

export const marginX = { base: "3%", sm: "5%", md: "6%", lg: "8%" };

export const socials = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/people/Halal-Safari-Operators/",
    name: "Facebook",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/halalsafarioperators",
    name: "Twitter",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/halalsafarioperator",
    name: "Instagram",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/clean-start-kenya/",
    name: "Linkedin",
  },
];

export const contactsData = [
  {
    label: CONTACT_EMAIL,
    title: "Email Address",
    icon: FaEnvelope,
    link: `mailto:${CONTACT_EMAIL}`,
    bg: "brand.white",
    color: "brand.black",
  },
  {
    label: "0712345678 (NRB)",
    title: "NAIROBI Phone",
    link: `tel:0712345678`,
    icon: FaPhone,
    bg: "brand.white",
    color: "brand.black",
  },
];

export const navData: NavType[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "categories",
    link: "/categories",
  },

  {
    label: "Destinations",
    link: "/destinations",
  },
  {
    label: "About Us",
    link: "/who-we-are",
  },

  {
    label: "Get A Quote",
    link: "/get-a-quote",
  },
];

export const partnersData = [
  {
    name: "Musaafirvacations",
    logo: "/images/partiners/musaafirvactions.png",
    link: "https://musaafirvacations.com/",
  },
  {
    name: "Lagaster",
    logo: "/images/partiners/lagaster.jpg",
    link: "https://lagaster.org",
  },
];

export async function getPackageBySlug(slug: string) {
  return safariPackages.find((pkg) => pkg.id === slug);
}
export async function getDestinationById(id: number) {
  return destinations.find((destination) => destination.id == id);
}

export async function getSubCategoryPackages(sub_category_id: number | string) {
  return safariPackages.filter(
    (pkg) => pkg.sub_category_id === sub_category_id
  );
}
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const aboutUsData = [
  {
    image: "/images/lion.jpg",
    title: "Halal Safari Operator",
    description:
      "We are a team of professionals with a passion for travel and adventure. We are committed to providing you with the best experience possible. Our goal is to make your trip as memorable as possible, so you can focus on enjoying the journey.",
  },
  {
    image: "/images/woman.jpg",
    title: "Our Mission",
    description:
      "Our mission is to provide you with the best experience possible. We are committed to making your trip as memorable as possible, so you can focus on enjoying the journey. We are dedicated to providing you with the best service and support, so you can relax and enjoy your vacation without any worries.",
  },
  {
    image: "/images/elephant.jpg",
    title: "Our Vision",
    description:
      "Our vision is to be the leading travel and adventure company in the world. We are committed to providing you with the best experience possible, so you can focus on enjoying the journey. We are dedicated to providing you with the best service and support, so you can relax and enjoy your vacation without any worries.",
  },
];
export const destinations: DestinationInterface[] = [
  {
    id: 1,
    title: "Mount Kilimanjaro, Tanzania",
    image: "/images/packages/Amboseli-Safari.jpeg",
    subTitle:
      "Experience the highest peak in Africa with breathtaking views and thrilling adventures.",
    description:
      "Mount Kilimanjaro is the highest peak in Africa and one of the most iconic mountains in the world. Located in Tanzania, this majestic mountain offers breathtaking views and thrilling adventures for climbers of all levels. Whether you're an experienced mountaineer or a first-time trekker, Kilimanjaro has something for everyone. Join us on an unforgettable journey to the Roof of Africa and discover the magic of this natural wonder.",
    activities: ["Climbing", "Safari", "Cultural Tours"],
  },
  {
    id: 2,
    title: "Masai Mara, Kenya",
    image: "/images/packages/Masai-Mara-Safari.jpg",
    subTitle:
      "Witness the incredible wildlife migration in one of Africa's most iconic safari destinations.",
    description:
      "The Masai Mara is one of Africa's most iconic safari destinations, known for its incredible wildlife migration and diverse ecosystems. Located in Kenya, this vast savannah is home to a wide variety of animals, including the Big Five (lion, elephant, buffalo, leopard, and rhinoceros), as well as cheetahs, zebras, giraffes, and more. Join us on an unforgettable safari adventure and witness the magic of the Masai Mara for yourself.",
    activities: ["Game Drives", "Balloon Safaris", "Cultural Visits"],
  },
  {
    id: 3,
    title: "Victoria Falls, Zimbabwe",
    image: "/images/packages/Ngorongoro-Safari.jpg",
    subTitle:
      "Discover the majestic beauty of one of the world's largest waterfalls.",
    description:
      "Victoria Falls is one of the world's largest waterfalls, located on the border of Zimbabwe and Zambia. Known as the 'Smoke that Thunders,' this majestic natural wonder is a sight to behold, with its powerful cascades and misty spray visible from miles away. Join us on an unforgettable journey to Victoria Falls and experience the beauty and power of this iconic waterfall up close.",
    activities: ["Helicopter Rides", "River Cruises", "Bungee Jumping"],
  },
];

export const testimonials = [
  {
    id: 1,
    content:
      "This was an unforgettable experience! The team went above and beyond to make sure we had the perfect safari adventure. Highly recommended!",
    name: "Jane Doe",
    position: "Travel Enthusiast",
  },
  {
    id: 2,
    content:
      "The level of professionalism and attention to detail was outstanding. The guides were knowledgeable and the destinations were breathtaking.",
    name: "John Smith",
    position: "Photographer",
  },
  {
    id: 3,
    content:
      "I’ve traveled to many places, but this was truly exceptional. From planning to execution, everything was seamless and exceeded my expectations.",
    name: "Emily Rose",
    position: "Adventure Seeker",
  },
  {
    id: 4,
    content:
      "An extraordinary journey! I felt safe, cared for, and inspired every step of the way. Can’t wait to book my next trip with them.",
    name: "Michael Carter",
    position: "Nature Lover",
  },
];

export const blogs = [
  {
    id: 1,
    image: "/images/woman.jpg",
    title: "The Future of Web Development",
    subtitle: "Trends for 2024",
    description:
      "Explore the latest trends shaping the future of web development, from AI-powered tools to the rise of serverless architecture.",
    link: "/blog/the-future-of-web-development",
    date: "Dec 10, 2024",
  },
  {
    id: 2,
    image: "/images/tanzania.jpg",
    title: "Why Dark Mode is Here to Stay",
    subtitle: "Aesthetic and Accessibility Benefits",
    description:
      "Learn why dark mode has become a UI staple and how it benefits both aesthetics and accessibility in modern design.",
    link: "/blog/why-dark-mode-is-here-to-stay",
    date: "Dec 8, 2024",
  },
  {
    id: 3,
    image: "/images/maasai.jpg",
    title: "Building Responsive Layouts",
    subtitle: "CSS Grid vs. Flexbox",
    description:
      "Master the art of creating responsive layouts using CSS Grid, and see how it compares to Flexbox.",
    link: "/blog/building-responsive-layouts",
    date: "Dec 5, 2024",
  },
];

export const teams: Team[] = [
  {
    name: "John Doe",
    profile_pic: "/images/team/noimage.png",
    position: "CEO & Founder",
    is_board_member: true,
    email: "john@halalsafarioperator.com",
    facebook_link: "https://www.facebook.com/johndoe",
    linkedin_link: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    profile_pic: "/images/team/noimage.png",
    position: "COO",
    is_board_member: true,
    email: "jane@halalsafarioperator.com",
    facebook_link: "https://www.facebook.com/janesmith",
    linkedin_link: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Michael Johnson",
    profile_pic: "/images/team/noimage.png",
    position: "CTO",
    is_board_member: true,
    email: "micheal@halalsafarioperator.com",
    facebook_link: "https://www.facebook.com/michaeljohnson",
    linkedin_link: "https://www.linkedin.com/in/michaeljohnson",
  },
  {
    name: "Emily Brown",
    profile_pic: "/images/team/noimage.png",
    position: "Marketing Director",
    is_board_member: false,
    email: "emily@halalsafarioperator.com",
    facebook_link: "https://www.facebook.com/emilybrown",
    linkedin_link: "https://www.linkedin.com/in/emilybrown",
  },
];

export const safariPackages: SafariPackageInterface[] = [
  {
    id: "7-days-masai-mara-amboseli-safari",
    sub_category_id: 1,
    image: "/images/packages/Masai-Mara-Safari.jpg",
    title: "7 Days Masai Mara & Amboseli Safari",
    description: `Gear up for a whirlwind adventure in the heart of Kenya! This 7 Days 6 Nights Nairobi | Amboseli | Masai Mara | Nairobi big five Safari itinerary whisks you away from Nairobi on a thrilling quest to witness the legendary Big Five. Witness the majestic elephants of Amboseli framed by the breathtaking backdrop of Mount Kilimanjaro. Then, lose yourself in the endless plains of the Masai Mara, where lions roar and wildebeest thunder across the savannah. Prepare for action-packed game drives, unforgettable wildlife encounters, and evenings spent under a canopy of stars. This perfectly paced 7 Days 6 Nights Nairobi | Amboseli | Masai Mara | Nairobi big five Safari promises an unforgettable encounter with the raw beauty and untamed spirit of Kenya.`,
    price: 1500,
    duration: "7 Days / 6 Nights",
    people: 10,
    rating: 4,

    includes: [
      {
        title: "International flights",
        status: true,
      },
      {
        title: "Full board accommodation",
        status: true,
      },
      {
        title: "Airport transfers",
        status: true,
      },
      {
        title: "Professional driver-guide",
        status: true,
      },
      {
        title: "Bottled water during game drives",
        status: true,
      },
      {
        title: "International flights",
        status: false,
      },
      {
        title: "Visa fees",
        status: false,
      },
      {
        title: "Travel insurance",
        status: false,
      },
      {
        title: "Tips and gratuities",
        status: false,
      },
      {
        title: "Personal expenses",
        status: false,
      },
    ],

    images: ["/images/lion.jpg", "/images/buffalo.jpg", "/images/tanzania.jpg"],

    itinerary: [
      {
        day: 1,
        title: "Nairobi – Amboseli",
        description:
          "In the morning, you'll be picked up from your Nairobi hotel and driven to Amboseli National Park, a journey of less than 5 hours known for its stunning scenery framed by the iconic snow-capped Mount Kilimanjaro. Upon arrival, enjoy a game drive en route to your lodge for check-in, followed by lunch and a brief rest at Ol Tukai Lodge or Amboseli Serena Safari Lodge. In the afternoon, embark on another game drive in search of the park's renowned residents, including predators like lions, as well as zebras, wildebeests, giraffes, and hippos, all against the majestic backdrop of Mount Kilimanjaro. Conclude your day with dinner and an overnight stay at Ol Tukai Lodge or Amboseli Serena Safari Lodge.",
      },
      {
        day: 2,
        title: "Amboseli Full day - (2) two game drives",
        description:
          "Start your day with an early morning game drive, followed by a return to the lodge for breakfast. After breakfast, spend the entire day exploring the park, packed lunch in hand, in search of its famous residents, including predators and their prey such as zebras, wildebeests, giraffes, and hippos, all set against the backdrop of Mount Kilimanjaro. Later, return to your camp for dinner and overnight accommodation at either Ol Tukai Lodge or Amboseli Serena Safari Lodge.",
      },
    ],
  },
  {
    id: "10-days-ultimate-kenya-safari",
    sub_category_id: 1,
    image: "/images/dodoma.jpg",
    title: "10 Days Ultimate Kenya Safari",
    description: `Embark on the ultimate Kenyan adventure with our 10 Days Ultimate Kenya Safari. This comprehensive journey takes you through Kenya's most iconic wildlife destinations, offering an unparalleled opportunity to witness the country's diverse ecosystems and abundant wildlife. From the sprawling savannas of the Masai Mara to the elephant-rich plains of Amboseli, and the rugged wilderness of Tsavo, this safari promises a truly immersive experience in the heart of East Africa.`,
    price: 4000,
    duration: "10 Days / 9 Nights",
    people: 8,
    rating: 3,

    includes: [
      {
        title: "International flights",
        status: true,
      },
      {
        title: "Full board accommodation",
        status: true,
      },
      {
        title: "Airport transfers",
        status: true,
      },
      {
        title: "Professional driver-guide",
        status: true,
      },
      {
        title: "Bottled water during game drives",
        status: false,
      },
      {
        title: "International flights",
        status: false,
      },
      {
        title: "Visa fees",
        status: false,
      },
      {
        title: "Travel insurance",
        status: false,
      },
      {
        title: "Tips and gratuities",
        status: false,
      },
      {
        title: "Personal expenses",
        status: false,
      },
    ],

    images: ["/images/lion.jpg", "/images/buffalo.jpg", "/images/tanzania.jpg"],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Upon arrival at Jomo Kenyatta International Airport, you'll be warmly welcomed and transferred to your hotel in Nairobi. Depending on your arrival time, you may have the opportunity to visit the David Sheldrick Elephant Orphanage or the Giraffe Center. Overnight at your Nairobi hotel.",
      },
      {
        day: 2,
        title: "Nairobi National Park - Amboseli",
        description:
          "Start your day with an early morning game drive in Nairobi National Park, one of the only national parks in the world located within a capital city. After the game drive, depart for Amboseli National Park, arriving in time for lunch at your lodge. Enjoy an afternoon game drive in Amboseli, famous for its large elephant herds and stunning views of Mount Kilimanjaro. Dinner and overnight at your Amboseli lodge.",
      },
    ],
  },
  {
    id: "5-days-express-safari",
    sub_category_id: 1,
    image: "/images/lion.jpg",
    title: "5 Days Express Safari",
    description: `Experience the essence of Kenya's wildlife in just five action-packed days with our Express Safari. This carefully crafted itinerary takes you straight to the heart of the Masai Mara, offering an authentic safari experience without compromising on wildlife viewing opportunities. Ideal for time-conscious travelers or those looking to combine a safari with other adventures, this express package delivers the thrill of the African bush in a compact timeframe.`,
    price: 2500,
    duration: "5 Days / 4 Nights",
    people: 6,
    rating: 5,

    includes: [
      {
        title: "International flights",
        status: true,
      },
      {
        title: "Full board accommodation",
        status: true,
      },
      {
        title: "Airport transfers",
        status: true,
      },
      {
        title: "Professional driver-guide",
        status: true,
      },
      {
        title: "Bottled water during game drives",
        status: true,
      },
      {
        title: "International flights",
        status: false,
      },
      {
        title: "Visa fees",
        status: false,
      },
      {
        title: "Travel insurance",
        status: false,
      },
      {
        title: "Tips and gratuities",
        status: false,
      },
      {
        title: "Personal expenses",
        status: false,
      },
    ],

    images: ["/images/lion.jpg", "/images/buffalo.jpg", "/images/tanzania.jpg"],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi - Transfer to Masai Mara",
        description:
          "Upon arrival at Jomo Kenyatta International Airport, you'll be met and briefed by our representative. You'll then board a scheduled flight to the Masai Mara. On arrival, you'll be met by your guide and transferred to your lodge, enjoying a game drive en route. After lunch and some rest, embark on your first official game drive in the Mara. Dinner and overnight at your Masai Mara lodge.",
      },
      {
        day: 2,
        title: "Full Day in Masai Mara",
        description:
          "Enjoy a full day of game drives in the Masai Mara, with the option of an early morning balloon safari (additional cost). The Mara is home to an incredible concentration of wildlife, including the Big Five. Your expert guide will help you spot and learn about the various species. In the evening, enjoy a sundowner before dinner at your lodge.",
      },
    ],
  },
];

export const videos: VideosGalleryInterface[] = [
  {
    id: 2,
    title: "Amboseli Safari",
    video: "https://youtu.be/8BIVIJGDPeg",
  },
  {
    id: 3,
    title: "Serengeti Safari",
    video: "https://youtu.be/v7p6VZiRInQ",
  },
  {
    id: 4,
    title: "Ngorongoro Safari",
    video: "https://www.youtube.com/shorts/kRiU0Z52pRc",
  },
];

export const getVideoId = (url: string) => {
  if (url.includes("https://youtu.be")) {
    let i = url.split("https://youtu.be/")[1];
    // remove other query params if any
    return i.split("?")[0];
  } else if (url.includes("https://www.youtube.com/watch?v=")) {
    let i = url.split("https://www.youtube.com/watch?v=")[1];
    // remove other query params if any
    return i.split("&")[0];
  } else if (url.includes("https://www.youtube.com/shorts/")) {
    let i = url.split("https://www.youtube.com/shorts/")[1];
    // remove other query params if any
    return i.split("?")[0];
  }
};
