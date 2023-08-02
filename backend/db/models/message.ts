import { Schema, model, connect, Types } from "mongoose";
import { IMessage } from "../interfaces/message";

const messageSchema = new Schema<IMessage>({
  sender: { type: Types.ObjectId, ref: "User" },
  group: { type: Types.ObjectId, ref: "Group" },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const message = model<IMessage>("Message", messageSchema);
export { message as MessageModel };
