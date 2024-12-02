import { handler } from "../lib/handler";
import { userLoginSchema , userRegistrationSchema } from "../schemas/userSchemas";
import { z } from "zod";

export const registerUser = handler({
  req: z.object({ body: userRegistrationSchema}),
  res: z.object({ message: z.string(), data: userRegistrationSchema }),
  async handler(req) {
    console.log("Request received:", req.body);
    return {
      message: "User registered successfully",
      data: req.body,
    };
  },
});

export const loginUser = handler({
  req: z.object({ body: userLoginSchema }),
  res: z.object({ message: z.string(), data: userLoginSchema }),
  async handler(req) {
    return { message: "User logged in successfully", data: req.body };
  },
});
