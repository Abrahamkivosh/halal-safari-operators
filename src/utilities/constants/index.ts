import { CONTACT_EMAIL } from "@/configs";
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
        link: "/who-we-are/introduction-and-background",
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
    label: "Contact Us",
    link: "/contact-us",
  },
];

