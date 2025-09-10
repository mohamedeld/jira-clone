import z from "zod";

export const loginSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(6).max(100).trim().nonempty(),
});

export const registerSchema = z.object({
  name: z.string().min(2).max(100).trim().nonempty(),
  email: z.email().nonempty(),
  password: z.string().min(6).max(100).trim().nonempty(),
});
