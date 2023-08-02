import { Schema, model, connect } from "mongoose";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

const user = model<IUser>("User", userSchema);

export { user as UserModel };
