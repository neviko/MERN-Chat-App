import { IUser } from "./user";

export interface IGroup {
  name: string;
  users: string[];
  created_at: Date;
}
