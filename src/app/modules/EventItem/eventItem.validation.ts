import { z } from "zod";

// user registration schema
const EventItemValidationSchema = z.object({
  name: z.string(),
  image: z.string(),
});
const updateEventItemValidationSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
});

export const EventItemValidation = {
  EventItemValidationSchema,
  updateEventItemValidationSchema,
};
