import { z } from "zod";

// Form Validation Schema
export const requestQuotationFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  country: z.string().nonempty("Country is required"),
  duration: z.string().nonempty("Duration of travel is required"),
  safariStartDate: z.string().nonempty("Safari start date is required"),
  safariEndDate: z.string().nonempty("Safari end date is required"),
  adults: z.number().int().min(1, "At least one adult is required"),
  children: z.number().int().min(0, "Number of children cannot be negative"),
   ageOfChildren: z.array(z.string()).optional(),
  typeOfSafari: z.array(z.string()).min(1, {
    message: "You must select at least one Type of Safari.",
  }),
  notificationPreference: z.array(z.string()).min(1, {
    message: "You must select at least one Notification Preference.",
  }),
  budget: z.number().int().positive("Budget must be greater than zero"),
  message: z.string().nonempty("Message is required"),
  
})

export type RequestQuotationFormData = z.infer<typeof requestQuotationFormSchema>;
