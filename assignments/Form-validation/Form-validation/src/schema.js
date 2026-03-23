import { z } from "zod";

export const formSchema = z
  .object({
    fullName: z.string().min(1, "Full Name required"),

    email: z.string().email("Invalid email"),

    phone: z
      .string()
      .regex(/^\d+$/, "Only numbers allowed")
      .min(10, "Phone must be 10 digits"),

    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, "Weak password"),

    confirmPassword: z.string(),

    creditCard: z
      .union([z.literal(""), z.string().regex(/^\d{16}$/, "Credit card must be 16 digits")])
      .optional(),

    state: z.string().min(1, "Select state"),

    city: z.string().min(1, "Select city")
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });