import { Router, Request, Response } from "express";
import userRouter from "./user.router.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.use(userRouter);

export default router;
