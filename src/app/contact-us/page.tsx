import { Metadata } from "next";
import { BASE_URL } from "@/configs";
import ContactUsComponent from "@/components/contactUs";

const page = () => {
  return <ContactUsComponent />;
};

export default page;
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Our Team",
  description:
    "Have questions or need support? Reach out to us through our Contact Us page for quick responses and assistance from our dedicated team.",
  keywords: [
    "contact us",
    "customer support",
    "business inquiries",
    "get in touch",
    "customer service",
    "support team",
    "contact form",
    "business contact",
    "inquiries",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Our Team",
    description:
      "Contact us today for inquiries, support, or feedback. Our team is ready to assist you with any questions or concerns.",
    url: `${BASE_URL}/contact-us`,
    type: "website",
    images: [
      {
        url: "/kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
    siteName: "Halal Safari Operator",
  },
  // twitter: {
  //   site: "@halalsafarioperator",
  //   creator: "@halalsafarioperator",
  //   card: "summary_large_image",
  //   title: "Contact Us - Get in Touch with Our Team",
  //   description:
  //     "Reach out to our team through our Contact Us page. Whether you need support or have questions, we’re here to help!",
  // },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  abstract:
    "The Contact Us page provides an easy way for visitors to connect with us for inquiries, support, or feedback.",
};
