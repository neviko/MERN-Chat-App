import React, { useEffect, useState } from "react";
import { TMessage } from "../common/types/message";
import "../css/Chat.css";
import { GroupItem } from "./GroupItem";
import { Button } from "@mui/material";
import { TGroup } from "../common/types/group";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { LabelButtonPair } from "./LabelButtonPair";
import { Chat } from "./Chat";
import { io, Socket } from "socket.io-client";

interface IProps {
  nickname: string;
}
let socket: any;

export const ChatContainer: React.FC<IProps> = ({ nickname }) => {
  const [selectedGroup, setSelectedGroup] = useState<TGroup>();
  const [groups, setGroups] = useState<TGroup[]>([]);
  const [chatMessages, setChatMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    (async () => {
      try {
        socket = io("http://localhost:5000");
        console.log("socket connected");

        socket.on("message-from-server", (message: TMessage) => {
          setChatMessages((messages) => [...messages, message]);
        });
      } catch (e) {
        console.error("error while connecting to websocket", e);
      }

      const { data } = await axios.get<TGroup[]>(`${BASE_URL}/api/group`);

      if (data) {
        console.log(data);
        setGroups(data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!selectedGroup) {
        return;
      }
      console.log("a group selected", selectedGroup);
      await socket.emit("join-group", selectedGroup.id);
      const { data } = await axios.get<TMessage[]>(
        `${BASE_URL}/api/message/${selectedGroup.id}`
      );
      console.log(data);
      setChatMessages(data);
    })();
  }, [selectedGroup]);

  const handleNewGroupClick = async (groupName: string) => {
    try {
      const { data: newGroup } = await axios.post<TGroup>(
        `${BASE_URL}/api/group`,
        {
          group_name: groupName,
        }
      );
      await socket.emit("join-group", newGroup.id);

      console.log(newGroup);
      setGroups([...groups, newGroup]);
    } catch (e) {
      console.error("something wrong wrong while creating a new group");
    }
  };

  return (
    <div style={{ display: "flex", maxHeight: "500px" }}>
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
      <div className="messages-container container">
        {/* messages */}
        <div>
          <Chat
            socket={socket}
            groupId={selectedGroup?.id || ""}
            nickname={nickname}
            chatMessages={chatMessages}
          />
        </div>

        {/* input text */}
        <div></div>
      </div>
    </div>
  );
};
