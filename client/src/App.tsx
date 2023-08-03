import React, { useEffect, useState } from "react";
import "./App.css";
import { ChatContainer } from "./components/ChatContainer";
import { LabelButtonPair } from "./components/LabelButtonPair";

function App() {
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      try {
        if (!nickname) {
          return;
        }
      } catch (e) {
        console.log("error while fetching data");
      }
    })();
  }, [nickname]);

  return (
    <div className="App">
      <h1>WeMatch Chat App</h1>
      {!nickname && (
        <LabelButtonPair
          buttonText="Login"
          labelText="Insert a Nickname"
          onTextSet={(nickName: string) => setNickname(nickName)}
        />
      )}
      <ChatContainer
        nickname={nickname}
        groups={[
          { id: "id", name: "name" },
          { id: "id2", name: "name2" },
        ]}
        messages={[]}
      />
    </div>
  );
}

export default App;
