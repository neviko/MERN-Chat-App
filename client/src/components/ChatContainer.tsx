import React, { useEffect, useState } from "react";
import { Message } from "../common/types/message";
import "../css/Chat.css";
import { GroupItem } from "./GroupItem";
import { Button } from "@mui/material";
import { Group } from "../common/types/group";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { LabelButtonPair } from "./LabelButtonPair";

const url = `${BASE_URL}/api/group`;

interface IProps {
  groups: Group[];
  messages: Message[];
}

export const ChatContainer: React.FC<IProps> = ({ messages }) => {
  const [selectedGroup, setSelectedGroup] = useState<Group>();
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Group[]>(url);
      console.log(data);
      if (data) {
        setGroups(data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      console.log("a new group selected", selectedGroup);

      //TODO: fetch messages
    })();
  }, [selectedGroup]);

  const handleNewGroupClick = async (groupName: string) => {
    try {
      const newGroup = await axios.post(url, {
        group_name: groupName,
      });

      //TODO: add new group to the groups state
    } catch (e) {}
  };

  return (
    <div style={{ display: "flex" }}>
      {/* groups container */}

      <div className="groups-container container">
        <LabelButtonPair
          buttonText="Add Group"
          labelText="New Group Name"
          onTextSet={handleNewGroupClick}
        />
        {groups.map((groupItem) => (
          <div onClick={() => setSelectedGroup(groupItem)} key={groupItem.id}>
            <GroupItem text={groupItem.name} />
          </div>
        ))}
      </div>

      {/*messages container*/}
      <div className="messages-container container"></div>
    </div>
  );
};
