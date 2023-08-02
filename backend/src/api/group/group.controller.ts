import express, { Request, Response } from "express";
import { fetchGroupNames } from "./group.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  //   const data = await fetchGroupNames();
  res.status(200);
  res.send();
});

export { router as groupRouter }; // or ES6
