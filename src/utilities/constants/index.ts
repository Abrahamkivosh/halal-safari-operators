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

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

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
