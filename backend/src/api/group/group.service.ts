import { GroupModel } from "../../db/models/group";

export const fetchGroupNames = async () => {
  return GroupModel.find({}, "name _id");
};
