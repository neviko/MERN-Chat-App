import { IGroup } from "./group";
import { IUser } from "./user";

export interface IMessage {
  sender: IUser;
  group: IGroup;
  content: string;
  timestamp: Date;
}
