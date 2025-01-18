"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { render } from "jsx-email";
import { jsx } from "react/jsx-runtime";
import { EmailTemplate } from "@/emails/contactUs";
import { EMAIL_FROM, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_TO, EMAIL_USER } from "@/configs";
import { BookPackageEmailTemplate } from "@/emails/bookPackage";



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
      subject: "Contact Us Form Submission",
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


/**
 * Interface for the data from the Book Package for,
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} phone - The phone number of the user
 * @param {string} date_of_travel - The date of travel
 * @param {number} number_of_aldults - The number of adults
 * @param {number} number_of_children - The number of children
 * @param {string} message - The message from the user
 * @returns {Object}
 */
export async function handleBookPackageNotificationAction(
  data: BooksSafariFormInterface
): Promise<
  | {
      status: number;
      message: string;
    }
  | {
      status: number;
      message: string;
    }
> 
{
  try {
    const html = await render(jsx(BookPackageEmailTemplate, data));
    await transport.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "Book Safari Package Form Submission",
      html,
    });

    return {
      status: 200,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      status: 400,
      message: "Form submission failed. Please try again later.",
    };
  }
}