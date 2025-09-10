import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "@/app/auth.schema";
const app = new Hono()
  .post(
    "/login",

    zValidator("json", loginSchema),
    (c) => {
      const { email, password } = c.req.valid("json");
      console.log("aelc", { email, password });
      return c.json({ email, password });
    }
  )
  .post("/register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json");
    return c.json({ name, email, password });
  });

export default app;
