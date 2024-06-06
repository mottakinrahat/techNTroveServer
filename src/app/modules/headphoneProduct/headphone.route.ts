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

// GET route for retrieving a single HeadPhone
router.get("/:id", headPhoneController.getSingleHeadPhone);

// PUT route for updating a single HeadPhone
router.put("/:id",
  validateRequest(HeadphoneProductValidation.HeadphoneProductValidationSchema), // Validate request if needed
  headPhoneController.updateHeadPhone
);

// DELETE route for deleting a single HeadPhone
router.delete("/:id", headPhoneController.deleteHeadPhone);

export const HeadPhoneRoutes = router;
