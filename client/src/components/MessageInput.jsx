import React from "react";

const MessageInput = ({ input, handleTyping, handleSendMessage }) => (
  <div className="flex items-center p-3 border-t bg-white">
    <input
      type="text"
      value={input}
      onChange={handleTyping}
      placeholder="Type a message..."
      className="flex-1 border rounded-lg px-3 py-2 mr-2 outline-none focus:ring focus:ring-blue-300"
    />
    <button
      onClick={handleSendMessage}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Send
    </button>
  </div>
);

export default MessageInput;
