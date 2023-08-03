import express, { Request, Response } from "express";
import { fetchMessagesByGroup } from "./message.service";
import { GroupModel } from "../../db/models/group";

const router = express.Router();

router.get("/:groupId", async (req: Request, res: Response) => {
  try {
    //TODO: add pagination
    const messages = await fetchMessagesByGroup(req.params.groupId);
    res.status(200);
    res.send(messages);
  } catch (e) {
    res.status(501);
    res.send(e);
  }
});

export { router as messageRouter }; // or ES6
