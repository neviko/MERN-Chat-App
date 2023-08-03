import React, { useEffect, useState } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import { Eevents } from "./common/enums/events";
import ChatRegistration from "./components/ChatRegistration";
import { UseFetchData } from "./components/UseFetchData";
import { BASE_URL } from "./constants/url";
import axios from "axios";
import { ChatContainer } from "./components/ChatContainer";

let socket;
const url = `${BASE_URL}/api/group`;

function App() {
  const [nickname, setNickname] = useState<string>();
  const [groups, setGroups] = useState<string[]>();

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
        const { data } = await axios.get<string[]>(url);
        console.log(data);
        if (data) {
          setGroups(data as string[]);
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
        <ChatRegistration
          onNicknameSet={(nickName: string) => setNickname(nickName)}
        />
      )} */}
      <ChatContainer groupNames={["a", "b", "c"]} messages={[]} />
    </div>
  );
}

export default App;
