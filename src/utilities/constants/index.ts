import { CONTACT_EMAIL } from "@/configs";
import { inc } from "nprogress";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

export const marginX = { base: "3%", sm: "5%", md: "6%", lg: "8%" };
export const socials = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/halalsafarioperators/",
    name: "Facebook",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/halalsafarioperators",
    name: "Twitter",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/halalsafarioperators/",
    name: "Instagram",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/clean-start-kenya/",
    name: "Linkedin",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCn9V4J3CdjrVemjVj4ZINpw",
    name: "Youtube",
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
  }

];


export const navData: NavType[] = [
  {
    label: "Home",
    link: "/",
  },
   {
    label: "Kenya safaris",
    link: "/kenya-safaris",
  },
  {
    label: "Tanazania safaris",
    link: "/tanzania-safaris",
  },
  {
    label: "Destinations",
    link: "/destinations",
  },

  {
    label: "About Us",
    subItems: [
      {
        label: "Introduction and Background",
        link: "/who-we-are",
      },
      {
        label: "Our Team",
        link: "/who-we-are/our-team",
      },
      {
        label: "Partners",
        link: "/who-we-are/partners",
      }
    ],
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
    link: "https://musaafirvacations.com/"
  },
   {
    name: "Lagaster",
    logo: "/images/partiners/lagaster.jpg",
    link: "https://lagaster.org"
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
  

    export const tours:TourInterface[] = [
      {
        id: 1,
        title: "Serengeti Safari",
        image: "/images/packages/Lion-giraffe-Serengeti-National-Park-Tanzania.jpg",
        price: "$1,500",
        duration: "5 Days",
        location: "tanzania-safaris",
        rating: 4.9,
        reviews: 32,
        link: "/tours/serengeti-safari",
        description: "Embark on an unforgettable journey through the Serengeti National Park, home to diverse wildlife and stunning landscapes.",
        programs: [
          {
            day: 1,
            title: "Arrival in Arusha",
            description:
              "Upon arrival at Kilimanjaro International Airport, you will be greeted by our team and transferred to your hotel in Arusha.",
          },
          {
            day: 2,
            title: "Arusha to Serengeti",
            description:
              "After breakfast, you will be driven to the Serengeti National Park, where you will embark on your first game drive.",
          },
          {
            day: 3,
            title: "Serengeti National Park",
            description:
              "Explore the vast plains of the Serengeti, home to the Big Five and the Great Migration of wildebeest and zebras.",
          },
          {
            day: 4,
            title: "Serengeti to Ngorongoro",
            description: "Drive to the Ngorongoro Conservation Area, where you will descend into the crater for a full day of game viewing.",

          },
          {
            day: 5,
            title: "Departure",
            description:
              "After breakfast, you will be transferred back to Arusha for your onward journey.",
          },
        ],
        includes: [
          "Accommodation",
          "Meals",
          "Transportation",
          "Game drives",
          "Park fees",
        ],
        excludes: ["Flights", "Visa fees", "Travel insurance", "Tips", "Personal expenses"],
      },
      {
        id: 2,
        title: "Masai Mara Safari",
        image: "/images/packages/Masai-Mara-Safari.jpg",
        price: "$1,200",
        duration: "4 Days",
        location: "kenya-safaris",
        rating: 4.8,
        reviews: 28,
        link: "/tours/masai-mara-safari",
        description: "Experience the magic of the Masai Mara, known for its abundant wildlife and the Great Migration of wildebeest and zebras.",
        programs: [
          {
            day: 1,
            title: "Arrival in Nairobi",
            description:
              "Upon arrival at Jomo Kenyatta International Airport, you will be greeted by our team and transferred to your hotel in Nairobi.",
          },
          {
            day: 2,
            title: "Nairobi to Masai Mara",
            description:
              "After breakfast, you will be driven to the Masai Mara National Reserve, where you will embark on your first game drive.",
          },
          {
            day: 3,
            title: "Masai Mara National Reserve",
            description:
              "Explore the vast plains of the Masai Mara, home to the Big Five and the Great Migration of wildebeest and zebras.",
          },
          {
            day: 4,
            title: "Departure",
            description:
              "After breakfast, you will be transferred back to Nairobi for your onward journey.",
          },
        ],
        includes: [
          "Accommodation",
          "Meals",
          "Transportation",
          "Game drives",
          "Park fees",
        ],
        excludes: ["Flights", "Visa fees", "Travel insurance", "Tips", "Personal expenses"],
      },
      {
        id: 3,
        title: "Amboseli Safari",
        image: "/images/packages/Amboseli-Safari.jpeg",
        price: "$1,000",
        duration: "3 Days",
        location: "kenya-safaris",
        rating: 4.7,
        reviews: 24,
        link: "/tours/amboseli-safari",
        description: "Discover the beauty of Amboseli National Park, known for its large herds of elephants and stunning views of Mount Kilimanjaro.",
        programs: [
          {
            day: 1,
            title: "Arrival in Nairobi",
            description:
              "Upon arrival at Jomo Kenyatta International Airport, you will be greeted by our team and transferred to your hotel in Nairobi.",
          },
          {
            day: 2,
            title: "Nairobi to Amboseli",
            description:
              "After breakfast, you will be driven to Amboseli National Park, where you will embark on your first game drive.",
          },
          {
            day: 3,
            title: "Amboseli National Park",
            description:
              "Explore the vast plains of Amboseli, home to large herds of elephants and stunning views of Mount Kilimanjaro.",
          },
          {
            day: 4,
            title: "Departure",
            description:
              "After breakfast, you will be transferred back to Nairobi for your onward journey.",
          },
        ],
        includes: [
          "Accommodation",
          "Meals",
          "Transportation",
          "Game drives",
          "Park fees",
        ],
        excludes: ["Flights", "Visa fees", "Travel insurance", "Tips", "Personal expenses"],
      },
      {
        id: 4,
        title: "Ngorongoro Safari",
        image: "/images/packages/Ngorongoro-Safari.jpg",
        price: "$1,300",
        duration: "4 Days",
        location: "tanzania-safaris",
        rating: 4.9,
        reviews: 32,
        link: "/tours/ngorongoro-safari",
        description: "Explore the wonders of the Ngorongoro Conservation Area, home to diverse wildlife and the iconic Ngorongoro Crater.",
        programs: [
          {
            day: 1,
            title: "Arrival in Arusha",
            description:
              "Upon arrival at Kilimanjaro International Airport, you will be greeted by our team and transferred to your hotel in Arusha.",
          },
          {
            day: 2,
            title: "Arusha to Ngorongoro",
            description:
              "After breakfast, you will be driven to the Ngorongoro Conservation Area, where you will descend into the crater for a full day of game viewing.",
          },
          {
            day: 3,
            title: "Ngorongoro Conservation Area",
            description:
              "Explore the diverse landscapes of the Ngorongoro Conservation Area, home to the Big Five and the Maasai people.",
          },
          {
            day: 4,
            title: "Departure",
            description:
              "After breakfast, you will be transferred back to Arusha for your onward journey.",
          },
        ],
        includes: [
          "Accommodation",
          "Meals",
          "Transportation",
          "Game drives",
          "Park fees",
        ],
        excludes: ["Flights", "Visa fees", "Travel insurance", "Tips", "Personal expenses"],
      }
   
    ];

    export const teams: Team[]  = [
      {
        name: "John Doe",
        profile_pic: "/images/team/noimage.png",
        position: "CEO & Founder",
        is_board_member: true,
        email: "john@halalsafarioperators.com",
        facebook_link: "https://www.facebook.com/johndoe",
        linkedin_link: "https://www.linkedin.com/in/johndoe",
      },
      {
        name: "Jane Smith",
        profile_pic:  "/images/team/noimage.png",
        position: "COO",
        is_board_member: true,
        email: "jane@halalsafarioperators.com",
        facebook_link: "https://www.facebook.com/janesmith",
        linkedin_link: "https://www.linkedin.com/in/janesmith",
      },
      {
        name: "Michael Johnson",
        profile_pic:  "/images/team/noimage.png",
        position: "CTO",
        is_board_member: true,
        email: "micheal@halalsafarioperators.com",
        facebook_link: "https://www.facebook.com/michaeljohnson",
        linkedin_link: "https://www.linkedin.com/in/michaeljohnson",
      },
      {
        name: "Emily Brown",
        profile_pic: "/images/team/noimage.png",
        position: "Marketing Director",
        is_board_member: false,
        email: "emily@halalsafarioperators.com",
        facebook_link: "https://www.facebook.com/emilybrown",
        linkedin_link: "https://www.linkedin.com/in/emilybrown",
      },
      
    ];

    export const safariPackages = [
      {
        id: "7-days-masai-mara-amboseli-safari",
        title: "7 Days Masai Mara & Amboseli Safari",
        description: "Experience the magic of Kenya's most iconic national parks with our comprehensive 7-day safari package.",
        price: "From $3,100 per person",
        duration: "7 Days / 6 Nights",
        highlights: [
          "Daily game drives in 4x4 vehicles",
          "Witness the Great Migration (seasonal)",
          "View of Mt. Kilimanjaro from Amboseli",
          "Luxury lodge accommodation",
          "Professional English/Spanish speaking guide"
        ],
        schedule: [
          "5:30 AM - Wake up call",
          "6:00 AM - Morning game drive",
          "12:00 PM - Lunch at camp/lodge",
          "3:30 PM - Afternoon game drive",
          "7:00 PM - Dinner and evening relaxation"
        ],
        inclusions: [
          "All park entrance fees",
          "Full board accommodation",
          "Airport transfers",
          "Professional driver-guide",
          "Bottled water during game drives"
        ],
        exclusions: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
          "Tips and gratuities"
        ],
        images: [
          "/safari-1.jpg",
          "/safari-2.jpg",
          "/safari-3.jpg"
        ],
        tourDetails: `Gear up for a whirlwind adventure in the heart of Kenya! This 7 Days 6 Nights Nairobi | Amboseli | Masai Mara | Nairobi big five Safari itinerary whisks you away from Nairobi on a thrilling quest to witness the legendary Big Five. Witness the majestic elephants of Amboseli framed by the breathtaking backdrop of Mount Kilimanjaro. Then, lose yourself in the endless plains of the Masai Mara, where lions roar and wildebeest thunder across the savannah. Prepare for action-packed game drives, unforgettable wildlife encounters, and evenings spent under a canopy of stars. This perfectly paced 7 Days 6 Nights Nairobi | Amboseli | Masai Mara | Nairobi big five Safari promises an unforgettable encounter with the raw beauty and untamed spirit of Kenya.`,
        prices: {
          highSeason: {
            forTwo: "US$ 8,000",
            perPerson: "US$ 4,000"
          },
          midSeason: {
            forTwo: "US$ 7,180",
            perPerson: "US$ 3,590"
          },
          lowSeason: {
            forTwo: "US$ 6,200",
            perPerson: "US$ 3,100"
          }
        },
        seasons: {
          high: "1st June – 31st Oct 2024, 20th Dec 2024 – 1st Jan 2025",
          mid: "2nd Jan 2024 – 31st March 2024, 1st Oct – 19th Dec 2024",
          low: "1st Apr – 30th May 2024"
        },
        itinerary: [
          {
            day: 1,
            title: "Nairobi – Amboseli",
            description: "In the morning, you'll be picked up from your Nairobi hotel and driven to Amboseli National Park, a journey of less than 5 hours known for its stunning scenery framed by the iconic snow-capped Mount Kilimanjaro. Upon arrival, enjoy a game drive en route to your lodge for check-in, followed by lunch and a brief rest at Ol Tukai Lodge or Amboseli Serena Safari Lodge. In the afternoon, embark on another game drive in search of the park's renowned residents, including predators like lions, as well as zebras, wildebeests, giraffes, and hippos, all against the majestic backdrop of Mount Kilimanjaro. Conclude your day with dinner and an overnight stay at Ol Tukai Lodge or Amboseli Serena Safari Lodge."
          },
          {
            day: 2,
            title: "Amboseli Full day - (2) two game drives",
            description: "Start your day with an early morning game drive, followed by a return to the lodge for breakfast. After breakfast, spend the entire day exploring the park, packed lunch in hand, in search of its famous residents, including predators and their prey such as zebras, wildebeests, giraffes, and hippos, all set against the backdrop of Mount Kilimanjaro. Later, return to your camp for dinner and overnight accommodation at either Ol Tukai Lodge or Amboseli Serena Safari Lodge."
          },
          // ... Add the rest of the days here
        ]
      },
      {
        id: "10-days-ultimate-kenya-safari",
        title: "10 Days Ultimate Kenya Safari",
        description: "A comprehensive journey through Kenya's finest wildlife destinations including Masai Mara, Amboseli, and Tsavo.",
        price: "From $4,000 per person",
        duration: "10 Days / 9 Nights",
        highlights: [
          "Big Five viewing opportunities",
          "Visit to Nairobi National Park",
          "David Sheldrick Elephant Orphanage visit",
          "Luxury tented camps experience",
          "Cultural visit to Maasai village"
        ],
        schedule: [
          "5:00 AM - Early morning game drive",
          "11:00 AM - Brunch at camp",
          "1:00 PM - Relaxation/Optional activities",
          "3:30 PM - Evening game drive",
          "7:30 PM - Dinner under the stars"
        ],
        inclusions: [
          "Nairobi National Park entrance fee",
          "David Sheldrick Elephant Orphanage visit",
          "All park and reserve entrance fees",
          "Full board accommodation",
          "English or Spanish speaking driver-guide"
        ],
        exclusions: [
          "Lunch on day 1 and last day",
          "Optional activities",
          "Alcoholic beverages",
          "Laundry services",
          "International/domestic flights"
        ],
        images: [
          "/safari-4.jpg",
          "/safari-5.jpg",
          "/safari-6.jpg"
        ],
        tourDetails: `Embark on the ultimate Kenyan adventure with our 10 Days Ultimate Kenya Safari. This comprehensive journey takes you through Kenya's most iconic wildlife destinations, offering an unparalleled opportunity to witness the country's diverse ecosystems and abundant wildlife. From the sprawling savannas of the Masai Mara to the elephant-rich plains of Amboseli, and the rugged wilderness of Tsavo, this safari promises a truly immersive experience in the heart of East Africa.`,
        prices: {
          highSeason: {
            forTwo: "US$ 10,000",
            perPerson: "US$ 5,000"
          },
          midSeason: {
            forTwo: "US$ 9,000",
            perPerson: "US$ 4,500"
          },
          lowSeason: {
            forTwo: "US$ 8,000",
            perPerson: "US$ 4,000"
          }
        },
        seasons: {
          high: "1st July – 31st Oct 2024, 20th Dec 2024 – 5th Jan 2025",
          mid: "2nd Jan 2024 – 31st March 2024, 1st Nov – 19th Dec 2024",
          low: "1st Apr – 30th June 2024"
        },
        itinerary: [
          {
            day: 1,
            title: "Arrival in Nairobi",
            description: "Upon arrival at Jomo Kenyatta International Airport, you'll be warmly welcomed and transferred to your hotel in Nairobi. Depending on your arrival time, you may have the opportunity to visit the David Sheldrick Elephant Orphanage or the Giraffe Center. Overnight at your Nairobi hotel."
          },
          {
            day: 2,
            title: "Nairobi National Park - Amboseli",
            description: "Start your day with an early morning game drive in Nairobi National Park, one of the only national parks in the world located within a capital city. After the game drive, depart for Amboseli National Park, arriving in time for lunch at your lodge. Enjoy an afternoon game drive in Amboseli, famous for its large elephant herds and stunning views of Mount Kilimanjaro. Dinner and overnight at your Amboseli lodge."
          },
          // ... Add the rest of the days here
        ]
      },
      {
        id: "5-days-express-safari",
        title: "5 Days Express Safari",
        description: "Perfect for those short on time but seeking an authentic Kenyan safari experience.",
        price: "From $2,500 per person",
        duration: "5 Days / 4 Nights",
        highlights: [
          "Visit to Masai Mara National Reserve",
          "Chance to see the Big Five",
          "Comfortable lodge accommodation",
          "Expert guides and trackers",
          "Scenic flight options available"
        ],
        schedule: [
          "6:00 AM - Sunrise game drive",
          "11:00 AM - Brunch at lodge",
          "2:00 PM - Afternoon wildlife viewing",
          "6:00 PM - Sundowner experience",
          "8:00 PM - Dinner and stargazing"
        ],
        inclusions: [
          "All game drives in 4x4 vehicle",
          "Park entrance fees",
          "Full board accommodation",
          "Airport/hotel pickup and drop-off",
          "Flying doctors emergency evacuation cover"
        ],
        exclusions: [
          "Visa fees (if applicable)",
          "Travel insurance",
          "Balloon safari (optional extra)",
          "Souvenirs and curios",
          "Tips for driver-guide and camp staff"
        ],
        images: [
          "/safari-7.jpg",
          "/safari-8.jpg",
          "/safari-9.jpg"
        ],
        tourDetails: `Experience the essence of Kenya's wildlife in just five action-packed days with our Express Safari. This carefully crafted itinerary takes you straight to the heart of the Masai Mara, offering an authentic safari experience without compromising on wildlife viewing opportunities. Ideal for time-conscious travelers or those looking to combine a safari with other adventures, this express package delivers the thrill of the African bush in a compact timeframe.`,
        prices: {
          highSeason: {
            forTwo: "US$ 5,500",
            perPerson: "US$ 2,750"
          },
          midSeason: {
            forTwo: "US$ 5,000",
            perPerson: "US$ 2,500"
          },
          lowSeason: {
            forTwo: "US$ 4,500",
            perPerson: "US$ 2,250"
          }
        },
        seasons: {
          high: "1st July – 31st Oct 2024, 20th Dec 2024 – 5th Jan 2025",
          mid: "2nd Jan 2024 – 31st March 2024, 1st Nov – 19th Dec 2024",
          low: "1st Apr – 30th June 2024"
        },
        itinerary: [
          {
            day: 1,
            title: "Arrival in Nairobi - Transfer to Masai Mara",
            description: "Upon arrival at Jomo Kenyatta International Airport, you'll be met and briefed by our representative. You'll then board a scheduled flight to the Masai Mara. On arrival, you'll be met by your guide and transferred to your lodge, enjoying a game drive en route. After lunch and some rest, embark on your first official game drive in the Mara. Dinner and overnight at your Masai Mara lodge."
          },
          {
            day: 2,
            title: "Full Day in Masai Mara",
            description: "Enjoy a full day of game drives in the Masai Mara, with the option of an early morning balloon safari (additional cost). The Mara is home to an incredible concentration of wildlife, including the Big Five. Your expert guide will help you spot and learn about the various species. In the evening, enjoy a sundowner before dinner at your lodge."
          },
          // ... Add the rest of the days here
        ]
      }
    ];
    
    export function getPackageBySlug(slug: string) {
      return safariPackages.find(pkg => pkg.id === slug);
    }
    
    export const miniSafariPackages = [
      {
        id: "1",
        title: "7 Days Masai Mara Amboseli Safari",
        description: "Experience the magic of Kenya's most iconic national parks with our comprehensive 7-day safari package.",
        price: "From $3,100 per person",
        duration: "7 Days / 6 Nights",
        highlights: [
          "Daily game drives in 4x4 vehicles",
          "Witness the Great Migration (seasonal)",
          "View of Mt. Kilimanjaro from Amboseli",
          "Luxury lodge accommodation",
          "Professional English/Spanish speaking guide",
        ],
        schedule: [
          "5:30 AM - Wake up call",
          "6:00 AM - Morning game drive",
          "12:00 PM - Lunch at camp/lodge",
          "3:30 PM - Afternoon game drive",
          "7:00 PM - Dinner and evening relaxation",
        ],
        inclusions: [
          "All park entrance fees",
          "Full board accommodation",
          "Airport transfers",
          "Professional driver-guide",
          "Bottled water during game drives",
        ],
        exclusions: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
          "Tips and gratuities",
        ],
        images: ["/safari-1.jpg", "/safari-2.jpg", "/safari-3.jpg"],
      },
      {
        id: "2",
        title: "10 Days Ultimate Kenya Safari",
        description: "A comprehensive journey through Kenya's finest wildlife destinations including Masai Mara, Amboseli, and Tsavo.",
        price: "From $4,000 per person",
        duration: "10 Days / 9 Nights",
        highlights: [
          "Big Five viewing opportunities",
          "Visit to Nairobi National Park",
          "David Sheldrick Elephant Orphanage visit",
          "Luxury tented camps experience",
          "Cultural visit to Maasai village",
        ],
        schedule: [
          "5:00 AM - Early morning game drive",
          "11:00 AM - Brunch at camp",
          "1:00 PM - Relaxation/Optional activities",
          "3:30 PM - Evening game drive",
          "7:30 PM - Dinner under the stars",
        ],
        inclusions: [
          "Nairobi National Park entrance fee",
          "David Sheldrick Elephant Orphanage visit",
          "All park and reserve entrance fees",
          "Full board accommodation",
          "English or Spanish speaking driver-guide",
        ],
        exclusions: [
          "Lunch on day 1 and last day",
          "Optional activities",
          "Alcoholic beverages",
          "Laundry services",
          "International/domestic flights",
        ],
        images: ["/safari-4.jpg", "/safari-5.jpg", "/safari-6.jpg"],
      },
      {
        id: "3",
        title: "5 Days Express Safari",
        description: "Perfect for those short on time but seeking an authentic Kenyan safari experience.",
        price: "From $2,500 per person",
        duration: "5 Days / 4 Nights",
        highlights: [
          "Visit to Masai Mara National Reserve",
          "Chance to see the Big Five",
          "Comfortable lodge accommodation",
          "Expert guides and trackers",
          "Scenic flight options available",
        ],
        schedule: [
          "6:00 AM - Sunrise game drive",
          "11:00 AM - Brunch at lodge",
          "2:00 PM - Afternoon wildlife viewing",
          "6:00 PM - Sundowner experience",
          "8:00 PM - Dinner and stargazing",
        ],
        inclusions: [
          "All game drives in 4x4 vehicle",
          "Park entrance fees",
          "Full board accommodation",
          "Airport/hotel pickup and drop-off",
          "Flying doctors emergency evacuation cover",
        ],
        exclusions: [
          "Visa fees (if applicable)",
          "Travel insurance",
          "Balloon safari (optional extra)",
          "Souvenirs and curios",
          "Tips for driver-guide and camp staff",
        ],
        images: ["/safari-7.jpg", "/safari-8.jpg", "/safari-9.jpg"],
      },
    ];