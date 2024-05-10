import { array, string, z } from "zod";

const eventRulesValidationSchema = array(string());
const servicesValidationSchema = z.object({
  image: z.string(),
  title: z.string(),
  description: z.string(),
  eventRules: eventRulesValidationSchema,
});
const updateEventRulesValidationSchema = array(string()).optional();
const updateServicesValidationSchema = z.object({
  image: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  eventRules: updateEventRulesValidationSchema,
});

export const servicesValidations = {
  servicesValidationSchema,
  updateServicesValidationSchema,
};
