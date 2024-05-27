import { z } from "zod";

const loginValidationSchema = z.object({
  _id: z.string().optional(),
  username: z.string({ required_error: "username is required" }),
  password: z.string({ required_error: "password is required" }),
});
export const AuthValidation = {
  loginValidationSchema,
};
