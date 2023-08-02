import React, { useEffect } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import { Eevents } from "./common/enums/events";

let socket;

function App() {
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.emit(Eevents.message);
  }, []);

  return <div className="App">nevo</div>;
}

export default App;
