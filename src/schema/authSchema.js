import { z } from "zod";

// REGX
const nameRegx = /^[a-zA-Z'-]+$/;
const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordCaseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
const passwordCharRegex = /^(?=.*\d)(?=.*[\W_])/;

// Signup validation schema
export const registerSchema = z
  .object({
    // Fname
    firstName: z
      .string({ required_error: "First name is required" })
      .trim()
      .min(3, { message: "First name must be atleast 3 characters" })
      .regex(nameRegx, { message: "Letters only (no numbers or symbols)" }),

    // Lname
    lastName: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || (val.length < 0 && val.length > 3), {
        message: "Last name must be atleast 3 characters",
      })
      .refine((val) => !val || nameRegx.test(val), {
        message: "Letters only (no numbers or symbols)",
      }),

    // Email
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .toLowerCase()
      .min(5, { message: "Email must be 5 characters" })
      .regex(emailRegx, { message: "Invalid email format" }),

    // Password
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(8, { message: "8-15 characters only" })
      .max(15, { message: "8-15 characters only" })
      .refine((val) => passwordCaseRegex.test(val), {
        message: "Need 1 UPPERCASE & 1 lowercase",
      })
      .refine((val) => passwordCharRegex.test(val), {
        message: "Add number & special symbol like !@#$",
      }),

    // Confirm password
    confirmPassword: z.string().trim(),

    // Company
    company: z
      .string({ required_error: "Company name is required" })
      .trim()
      .min(5, { message: "Company must be 5 characters" }),

    // Invite code ---  this will change
    inviteCode: z.string().optional().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Login validation schema
export const loginSchema = z.object({
  // Email
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .min(5, { message: "Email must be 5 characters" })
    .regex(emailRegx, { message: "Invalid email format" }),

  // Password
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(1, { message: "Password is required" }),
});
