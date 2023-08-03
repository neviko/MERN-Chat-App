import { Button, Input, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { TMessage } from "../common/types/message";
import { Message } from "./Message";
import { Socket } from "socket.io-client";
import "../css/Chat.css";

interface IProps {
  groupId: string;
  nickname: string;
  socket: Socket;
  chatMessages: TMessage[];
}

export const Chat: React.FC<IProps> = ({
  groupId,
  nickname,
  socket,
  chatMessages,
}) => {
  const [sendMessage, setSendMessage] = useState<string>("");

  const handleSendClick = async () => {
    const message: TMessage = {
      text: sendMessage,
      groupId: groupId,
      timestamp: new Date(Date.now()).toISOString(),
      sender: nickname,
    };
    try {
      await socket.emit("message", message);
      setSendMessage("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={styles.chat}>
      {chatMessages.map((message) => {
        return (
          <Message
            groupId={groupId}
            text={message.text}
            bgColor={message.sender === nickname ? "pink" : "aqua"}
            isShiftRight={message.sender === nickname}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        );
      })}

      <div style={styles.footerInput}>
        <TextField
          title="Message"
          placeholder="Type a Message"
          hiddenLabel
          variant="filled"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />

        <Button disabled={!!!sendMessage} onClick={handleSendClick}>
          SEND
        </Button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  chat: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ECECEC",
    flex: 2,
    minHeight: "500px",
  },
  footerInput: {
    height: "25px",
    width: "100%",
    alignItems: "flex-start",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    maxWidth: "inherit",
  },
};
