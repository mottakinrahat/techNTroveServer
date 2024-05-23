// headphone.routes.js

import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { headPhoneController } from './headphone.controller';
import { HeadphoneProductValidation } from './headphone.validation'; // Import validation schema if needed

const router = express.Router();

// POST route for creating a new HeadPhone
router.post(
  "/",
  validateRequest(HeadphoneProductValidation.HeadphoneProductValidationSchema), // Validate request if needed
  headPhoneController.createHeadPhone
);

// GET route for retrieving all HeadPhones
router.get("/", headPhoneController.getAllHeadPhone);

export const HeadPhoneRoutes = router;
