import React from "react";

interface IProps {
  color: string;
  text: string;
}

export const GroupItem: React.FC<IProps> = ({ color, text }) => {
  return (
    <div style={{ ...styles.container, backgroundColor: color }}>{text}</div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid gray",
    width: "100%",
    height: "55px",
    marginBottom: "5px",
  },
};
