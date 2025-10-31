import React from "react";

const MessageList = ({ messages }) => (
  <div className="flex flex-col space-y-2 p-4 overflow-y-auto h-[70vh] bg-white rounded-xl shadow-inner">
    {messages.map((msg) => (
      <div key={msg.id} className="p-2 rounded-lg bg-white shadow-sm">
        <span className="font-semibold text-blue-600">
          {msg.sender || "System"}:
        </span>{" "}
        <span>{msg.message}</span>
      </div>
    ))}
  </div>
);

export default MessageList;
