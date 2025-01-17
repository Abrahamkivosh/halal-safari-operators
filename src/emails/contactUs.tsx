import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "jsx-email";
import { defaulted, object, string, type Infer } from "superstruct";
import * as React from "react";

export const TemplateName = "ContactUs";

export const TemplateStruct = object({
  name: defaulted(string(), ""),
  email: defaulted(string(), ""),
  phone: defaulted(string(), ""),
  message: defaulted(string(), ""),
});

export type TemplateProps = Infer<typeof TemplateStruct>;

/* Main Styles */
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  color: "#333333",
};

/* Container Styles */
const container = {
  margin: "20px auto",
  maxWidth: "600px",
  padding: "20px",
  border: "1px solid #eaeaea",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

/* Header Styles */
const header = {
  textAlign: "center" as const,
  padding: "20px 0",
  margin: "0 auto",
  width: "100%",
};

const logo = {
  width: "150px",
  marginBottom: "5px",
};

/* Section Box Styles */
const box = {
  padding: "0 20px",
};

/* Text Paragraph Styles */
const paragraph = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  marginBottom: "16px",
};

/* Link Styles */
const link = {
  color: "#0066cc",
  textDecoration: "underline",
  fontSize: "16px",
};

/* Horizontal Rule */
const hr = {
  backgroundColor: "#f0f0f0",
  border: 0,
  height: "1px",
  margin: "24px 0",
};

/* Footer Styles */
const footer = {
  backgroundColor: "#001a33",
  padding: "16px 20px",
  textAlign: "center" as const,
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
};

const footerText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "20px",
};

const footerLink = {
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 8px",
};

export const EmailTemplate = ({
  name,
  email,
  phone,
  message,
}: TemplateProps) => (
  <Html>
    <Head />
    <Preview>
      Contact Us by {name} &lt;{email}&gt;
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        {/* <Section style={header}>
          <Img
            src={`https://myspa.co.ke/_next/image?url=%2Flogo.png&w=256&q=75`}
            width="150"
            height="100"
            alt="MySpa Logo"
            style={logo}
          />
        </Section> */}

        <Hr style={hr} />

        {/* Contact Section */}
        <Section style={box}>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong>{" "}
            <Link style={link} href={"mailto:" + email}>
              {email}
            </Link>
          </Text>
          <Text style={paragraph}>
            <strong>Phone:</strong>{" "}
            <Link style={link} href={"tel:" + phone}>
              {phone}
            </Link>
          </Text>
          <Text style={paragraph}>
            <strong>Message:</strong> {message}
          </Text>
        </Section>

        {/* Footer Section */}
        <Section style={footer}>
          <Text style={footerText}>
            &copy; {new Date().getFullYear()} MySpa. All rights reserved.
          </Text>
          <Text style={footerText}>
            <Link href="#" style={footerLink}>
              Privacy Policy
            </Link>
            |
            <Link href="#" style={footerLink}>
              Terms of Service
            </Link>
          </Text>
          <Text style={footerText}>
            Nairobi - Kenya | Phone:{" "}
            <Link href="tel:+25470878500" style={footerLink}>
              +254 712 345 678
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
