// src/components/ChatInput.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

function ChatInput() {
  const { text, setCurrentChat, setLoading , setText} = useContext(UserContext);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    setLoading(true);
    setCurrentChat(input);
    setText(input);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="p-4 bg-transparent fixed bottom-0 w-full left-0 px-4">
      <div className="relative flex items-center max-w-6xl mx-auto" >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? handleSendMessage() : null} 
          placeholder="Send message..."
          className="w-full py-3 px-6 bg-[#303133] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 mx-2"
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
