import React, { useEffect, useState } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import { ChatContainer } from "./components/ChatContainer";

let socket;

function App() {
  const [nickname, setNickname] = useState<string>();

  useEffect(() => {
    try {
      socket = io("http://localhost:5000");
      console.log("socket connected");
    } catch (e) {
      console.error("error while connecting to websocket", e);
    }
  }, []);

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
      {/* {!nickname && (
        <LabelButtonPair
          buttonText="Login"
          labelText="Insert a Nickname"
          onTextSet={(nickName: string) => setNickname(nickName)}
        />
      )} */}
      <ChatContainer
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
