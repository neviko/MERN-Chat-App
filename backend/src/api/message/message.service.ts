import { MessageModel } from "../../db/models/message";

export const fetchMessagesByGroup = async (groupId: string) => {
  console.log(`fetching messages from group ${groupId}`);
  return MessageModel.find({ group: groupId });
};
