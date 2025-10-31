import React, { useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import UserList from "../components/UserList";
import { useChat } from "../hooks/useChat";

const ChatPage = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const { connect, users, messages, typingUsers } = useSocketContext();
  const { input, handleSendMessage, handleTyping } = useChat();

  const handleJoin = () => {
    if (username.trim()) {
      connect(username);
      setJoined(true);
    }
  };

  if (!joined)
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Join the Chat
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={handleJoin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Join Chat
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <UserList users={users} />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <MessageList messages={messages} typingUsers={typingUsers} />
        <MessageInput
          input={input}
          handleTyping={handleTyping}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatPage;
