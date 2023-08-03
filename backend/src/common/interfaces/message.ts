import { IGroup } from "./group";
import { IUser } from "./user";

export interface IMessage {
  sender: string;
  groupId: string;
  text: string;
  timestamp: Date;
}
