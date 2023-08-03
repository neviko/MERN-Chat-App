import express from "express";
import cors from "cors";

import { json } from "body-parser";
import { groupRouter } from "./src/api/group/group.controller";
import { messageRouter } from "./src/api/message/message.controller";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(json());
// if a route not found call to not a found error, which it will call to the error handler
app.use("/api/group", groupRouter);
app.use("/api/message", messageRouter);
app.all("*", async () => {
  // not found
});

export { app };
