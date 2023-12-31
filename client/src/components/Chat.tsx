import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { TMessage } from "../common/types/message";
import { Message } from "./Message";
import { Socket } from "socket.io-client";
import { colors } from "../constants/style";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={styles.chat}>
        {chatMessages.map((message) => {
          return (
            <Message
              groupId={groupId}
              text={message.text}
              bgColor={
                message.sender === nickname
                  ? colors.specialGreen
                  : colors.specialGray
              }
              isShiftRight={message.sender === nickname}
              sender={message.sender}
              timestamp={new Date(message.timestamp).toLocaleTimeString(
                "en-GB",
                {
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
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
            style={{ width: "inherit" }}
          />

          <Button disabled={!!!sendMessage} onClick={handleSendClick}>
            SEND
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  chat: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    maxHeight: "480px",
    overflowX: "hidden",
  },
  footerInput: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    width: "80%",
    position: "absolute",
    bottom: "30px",
    marginBottom: "20px",
  },
};
