// src/components/ChatPage.js
import React from 'react';
import ChatContainer from './ChatContainer';

function ChatPage() {
  return (
    <div className="flex flex-col w-full md:flex-row h-screen bg-gray-900 text-white">
      <div className="flex flex-col flex-1">
        <ChatContainer />
      </div>
    </div>
  );
}

export default ChatPage;
