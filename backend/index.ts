import { app } from "./app";
import http from "http";
import { Server } from "socket.io";
import { Eevents } from "./src/common/enums/events";
import { dbConnect } from "./src/db/connection";
import * as dotenv from "dotenv";
import { IMessage } from "./src/common/interfaces/message";
import { MessageModel } from "./src/db/models/message";
dotenv.config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("disconnect", () => {
    console.log(" user disconnected");
  });

  socket.on(Eevents.message, (msg: any) => {
    console.log("message received", msg);
  });

  socket.on("join-group", (groupId: string) => {
    socket.join(groupId);
    console.log(`User ${socket.id} have joined to group ${groupId}`);
  });

  socket.on("message", (message: IMessage) => {
    console.log(message);

    const newMessage = new MessageModel(message);
    newMessage.save();
    io.to(message.groupId).emit("message-from-server", message);
  });
});

server.on("error", (err) => {
  console.log("Error opening server");
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  dbConnect();
});
