import React from "react";

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
      style={{
        ...styles.message,
        backgroundColor: bgColor,
        alignSelf: isShiftRight ? "flex-end" : "flex-start",
        width: "fit-content",
        border: "8px",
        borderRadius: "10px 100px / 120px",
        margin: "20px",
        padding: "20px 20px",
        overflow: "auto",
        textAlign: "left",
      }}
    >
      <div style={styles.text}>{text}</div>
      <div style={styles.sender}>
        {timestamp} by: {sender}
      </div>
    </div>
  );
};

const styles = {
  text: {
    fontSize: "15px",
  },
  sender: {
    fontSize: "10px",
    color: "dark-gray",
  },
  message: {
    width: "fit-content",
    border: "8px",
    borderRadius: "10px 100px / 120px",
    margin: "20px",
    padding: "20px 20px",
  },
};
