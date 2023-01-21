import { Request, Response } from "express";
import { signUpService } from "../services/user-service.js";

type signUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function signUpController(req: Request, res: Response) {
  const signUp = res.locals.signUps as signUpType;

  try {
    await signUpService(signUp);
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}
