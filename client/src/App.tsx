import React, { useEffect, useState } from "react";
import "./App.css";
import { ChatContainer } from "./components/ChatContainer";
import { LabelButtonPair } from "./components/LabelButtonPair";
import { errorMessages } from "./constants/errors";

function App() {
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        if (!nickname) {
          return;
        }
      } catch (e) {
        console.error(errorMessages.errFetchingData);
      }
    })();
  }, [nickname]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>WeMatch Chat App</h1>
      {nickname && <h4>Connected as: {nickname}</h4>}

      {!nickname ? (
        <LabelButtonPair
          buttonText="Login"
          labelText="Insert a Nickname"
          onTextSet={(nickName: string) => setNickname(nickName)}
        />
      ) : (
        <ChatContainer nickname={nickname} />
      )}
    </div>
  );
}

export default App;
