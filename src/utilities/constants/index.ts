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
    