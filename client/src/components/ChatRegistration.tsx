import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

interface IProps {
  onNicknameSet: (nickname: string) => void;
}

const ChatRegistration: React.FC<IProps> = ({ onNicknameSet }) => {
  const [nickName, setNickName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: input validation here
    e.preventDefault();
    onNicknameSet(nickName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Email or Nickname"
          variant="standard"
          onChange={(e) => setNickName(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default ChatRegistration;
