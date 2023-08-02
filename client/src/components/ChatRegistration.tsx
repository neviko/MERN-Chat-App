import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { UseFetchData } from "./UseFetchData";

const ChatRegistration = () => {
  const [nickName, setNickName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<SubmitEvent>) => {
    // input validation here
    const url = "localhost:5000/api/groups/";
    const {
      data: getData,
      loading: getLoading,
      error: getError,
    } = UseFetchData({ url });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <TextField
        id="standard-basic"
        label="Email or Nickname"
        variant="standard"
        onChange={(e) => setNickName(e.target.value)}
      />
      <Button type="submit" />
    </div>
  );
};

export default ChatRegistration;
