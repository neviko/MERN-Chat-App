import React from "react";
import { Message } from "../common/types/message";
import "../css/Chat.css";

interface IProps {
  groupNames: string[];
  messages: Message[];
}

export const ChatContainer: React.FC<IProps> = ({ groupNames, messages }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* groups container */}
      <div className="groups-container container"></div>

      {/*messages container*/}
      <div className="messages-container container"></div>
    </div>
  );
};
