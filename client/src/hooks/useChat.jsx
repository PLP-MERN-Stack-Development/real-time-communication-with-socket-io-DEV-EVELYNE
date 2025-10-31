import { useState } from "react";
import { useSocketContext } from "../context/SocketContext";

export const useChat = () => {
  const { sendMessage, setTyping, messages, users, typingUsers } = useSocketContext();
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    setTyping(e.target.value.length > 0);
  };

  return { input, handleTyping, handleSendMessage, messages, users, typingUsers };
};
