import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../middleware/validateRequest";
import { UserValidation } from "./user.validation";
import auth from "../middleware/auth";

const router = express.Router();

// register user
router.post(
  "/register",
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
);

// login user
router.post(
  "/login",
  validateRequest(UserValidation.loginUserValidationSchema),
  UserControllers.loginUser
);

// change user password
//TODO: validate auth()
router.post(
  "/change-password",
  auth("user"),
  validateRequest(UserValidation.changePasswordValidationSchema),
  UserControllers.changePassword
);

export const UserRoutes = router;
