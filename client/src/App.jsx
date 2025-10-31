import React from "react";
import { SocketProvider } from "./context/SocketContext";
import ChatPage from "./pages/ChatPage";

const App = () => (
  <SocketProvider>
    <ChatPage />
  </SocketProvider>
);

export default App;
