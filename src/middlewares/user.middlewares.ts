import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../schemas/signup.schema.js";

type signUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function signUpValidate(
  req: Request,
  res: Response,
  next: NextFunction
): Response<string> {
  const signUp = req.body as signUpType;

  const { error } = signUpSchema.validate(signUp, { abortEarly: false });
  if (error) {
    return res.status(400).send(error.message);
  }

  if (signUp.password !== signUp.confirmPassword) {
    return res.status(400).send("As senhas precisam ser idênticas");
  }

  res.locals.signUps = signUp;
  next();
}
