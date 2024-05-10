import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { EventItemValidation } from "./eventItem.validation";
import { eventItemControllers } from "./eventItem.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(EventItemValidation.EventItemValidationSchema),
  eventItemControllers.createEventItem
);
router.get("/", eventItemControllers.getAllEventItem);
router.get("/:id", eventItemControllers.getSingleAllEventItem);
router.put(
  "/:id",
  validateRequest(EventItemValidation.updateEventItemValidationSchema),
  eventItemControllers.updateEventItem
);
router.delete("/:id", eventItemControllers.deleteEventItem);

export const EventItemRoutes = router;
