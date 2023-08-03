import { Schema, model, connect, Types } from "mongoose";
import { IMessage } from "../../common/interfaces/message";

const messageSchema = new Schema<IMessage>({
  sender: { type: String, ref: "User" },
  groupId: { type: String, ref: "Group" },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const message = model<IMessage>("Message", messageSchema);
export { message as MessageModel };
