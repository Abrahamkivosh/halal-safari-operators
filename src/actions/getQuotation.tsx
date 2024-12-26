"use server";
import { RequestQuotationFormData } from "@/components/getAQuote/validations";
import nodemailer from "nodemailer";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  from: process.env.EMAIL_FROM,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function getQuotationAction(
  data: RequestQuotationFormData
) {
  try {
    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Quotation Request",
      text: `
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Country: ${data.country}
          Duration: ${data.duration}
          Safari Start Date: ${data.safariStartDate}
          Safari End Date: ${data.safariEndDate}
          Adults: ${data.adults}
          Children: ${data.children}
          Age of Children: ${data.ageOfChildren?.join(", ")}
          Type of Safari: ${data.typeOfSafari.join(", ")}
          Notification Preference: ${data.notificationPreference.join(", ")}
          Budget: ${data.budget}
          Message: ${data.message}
        `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return the success message
    return {
      success: true,
      message: "Your quotation request has been sent successfully.",
      body: data,
    };
  } catch (error) {
    // Return the error message
    return {
      success: false,
      message: "An error occurred while sending your quotation request.",
      body: error,
    };
  }
}
