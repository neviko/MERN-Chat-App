import React from "react";
import "../css/message.css";

interface IProps {
  text: string;
  timestamp: string;
  groupId: string;
  sender: string;
  bgColor: string;
  isShiftRight: boolean;
}

export const Message: React.FC<IProps> = ({
  text,
  timestamp,
  sender,
  bgColor,
  isShiftRight,
}) => {
  return (
    <div
      className="message"
      style={{
        backgroundColor: bgColor,
        alignSelf: isShiftRight ? "flex-end" : "flex-start",
      }}
    >
      <div style={styles.text}>{text}</div>
      <div style={styles.sender}>
        sent at {timestamp} by: {sender}
      </div>
    </div>
  );
};

const styles = {
  text: {
    fontSize: "25px",
  },
  sender: {
    fontSize: "15px",
    color: "dark-gray",
  },
};
