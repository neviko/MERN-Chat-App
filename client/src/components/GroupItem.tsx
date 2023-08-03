import React, { CSSProperties } from "react";

interface IProps {
  style?: React.CSSProperties[];
  text: string;
}

export const GroupItem: React.FC<IProps> = ({ style, text }) => {
  return <div style={styles.container}>{text}</div>;
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: "2px solid gray",
    width: "100%",
    height: "100px",
    backgroundColor: "red",
  },
};
