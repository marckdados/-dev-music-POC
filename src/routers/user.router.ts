import { Router } from "express";
import { signUpValidate } from "../middlewares/user.middlewares.js";
import { signUpController } from "../controllers/user.controller.js";

const router = Router();

router.post("/sign-up", signUpValidate, signUpController);

export default router;
