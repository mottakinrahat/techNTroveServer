import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { earphoneController } from "./earphone.controller";
import { EarphoneValidation } from "./earphone.validation";

const router = express.Router();

// POST route for creating a new earphone
router.post(
  "/",
  validateRequest(EarphoneValidation.earphoneProductValidationSchema),
  earphoneController.createEarphone
);

// GET route for retrieving all earphones
router.get("/", earphoneController.getAllEarphone);

// GET route for retrieving a single earphone
router.get("/:id", earphoneController.getSingleEarphone);

// PUT route for updating a single earphone
router.put(
  "/:id",
  validateRequest(EarphoneValidation.earphoneProductValidationSchema),
  earphoneController.updateEarphone
);

// DELETE route for deleting a single earphone
router.delete("/:id", earphoneController.deleteEarphone);

export const earphoneRoutes = router;
