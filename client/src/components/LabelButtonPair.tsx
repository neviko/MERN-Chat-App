import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

interface IProps {
  onTextSet: (text: string) => void;
  buttonText: string;
  labelText: string;
}

export const LabelButtonPair: React.FC<IProps> = ({
  onTextSet,
  buttonText,
  labelText,
}) => {
  const [text, setText] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: input validation here
    e.preventDefault();
    onTextSet(text);
  };

  return (
    <div style={{ margin: "15px", marginBottom: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label={labelText}
          variant="standard"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">{buttonText}</Button>
      </form>
    </div>
  );
};
