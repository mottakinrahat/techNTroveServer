import { z } from "zod";

// user registration schema
const clientValidationSchema = z.object({
  name: z.string(),
  image: z.string(),
  designation: z.string(),
  quote: z.string(),
});

export const clientValidation = {
  clientValidationSchema,
};
