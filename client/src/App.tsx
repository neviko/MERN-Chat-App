import React, { useEffect } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import { Eevents } from "./common/enums/events";
import ChatRegistration from "./components/ChatRegistration";

let socket;

function App() {
  useEffect(() => {
    try {
      const socket = io("http://localhost:5000");
    } catch (e) {
      console.error("weeor while connecting to websocket", e);
    }
  }, []);

  return (
    <div className="App">
      nevo
      <ChatRegistration />
    </div>
  );
}

export default App;
