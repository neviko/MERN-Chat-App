import mongoose, { Schema, model, connect, Types } from "mongoose";
import { IGroup } from "../../common/interfaces/group";

const groupSchema = new Schema<IGroup>({
  name: { type: String, required: true },
  users: [{ type: Types.ObjectId, ref: "User", required: true }],
  created_at: { type: Date, default: Date.now },
});

const group = model<IGroup>("Group", groupSchema);
export { group as GroupModel };
