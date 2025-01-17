"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { render } from "jsx-email";
import { jsx } from "react/jsx-runtime";
import { EmailTemplate } from "@/emails/contactUs";
import { EMAIL_FROM, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_TO, EMAIL_USER } from "@/configs";



// Configure nodemailer transport
const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
} as SMTPTransport.Options);

// Handle form submission
export async function handleFormSubmissionAction({
  name,
  email,
  phone,
  message,
}: ContactUSInterface): Promise<ContactUsActionResponseInterface> {
  try {
      jsx(EmailTemplate, { name, email, phone, message })
    const html = await render(jsx(EmailTemplate, { name, email, phone, message }));

    await transport.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "MySpa Contact Us Form Submission",
      html,
    });

    return {
      status: 200,
      body: {
        message: "Form submitted successfully",
      },
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      status: 400,
      body: {
        message: "Form submission failed. Please try again later.",
      },
    };
  }
}
