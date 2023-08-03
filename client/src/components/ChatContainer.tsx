import React, { useEffect, useState } from "react";
import { Message } from "../common/types/message";
import "../css/Chat.css";
import { GroupItem } from "./GroupItem";
import { Button } from "@mui/material";
import { Group } from "../common/types/group";

interface IProps {
  groups: Group[];
  messages: Message[];
}

export const ChatContainer: React.FC<IProps> = ({ groups, messages }) => {
  const [selectedGroup, setSelectedGroup] = useState<Group>();

  useEffect(() => {
    (async () => {
      console.log("a new group selected", selectedGroup);
      //TODO: fetch messages
    })();
  }, [selectedGroup]);

  return (
    <div style={{ display: "flex" }}>
      {/* groups container */}
      <div className="groups-container container">
        {groups.map((groupItem) => (
          <div onClick={() => setSelectedGroup(groupItem)} key={groupItem.id}>
            <GroupItem text={groupItem.name} />
          </div>
        ))}
        <Button>new group +</Button>
      </div>

      {/*messages container*/}
      <div className="messages-container container"></div>
    </div>
  );
};
