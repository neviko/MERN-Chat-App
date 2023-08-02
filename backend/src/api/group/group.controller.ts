import express, { Request, Response } from "express";
import { fetchGroupNames } from "./group.service";
import { GroupModel } from "../../db/models/group";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await fetchGroupNames();
    res.status(200);
    res.send(data);
  } catch (e) {
    res.status(501);
    res.send(e);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { group_name: groupName } = req.body;
    const group = new GroupModel({ name: groupName, users: null });
    await group.save();
    res.status(201);
    res.send(group);
  } catch (e) {
    res.status(501);
    res.send(e);
  }
});

export { router as groupRouter }; // or ES6
