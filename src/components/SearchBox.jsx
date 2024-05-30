import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const { setText, setCurrentChat } = useContext(UserContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setText(input);
    setInput("")
    setCurrentChat(null);
    navigate('/playground');
  };
  return (
    <div className="mt-8 w-full max-w-2xl overflow-hidden">
      <div className="relative  w-full p-1 px-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? handleSearch() : null}
          placeholder="Ask anything. What are you stuck on?" 
          className="w-full m-auto py-4 pl-12 pr-14 bg-[#303133] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
        />
        <button 
         onClick={handleSearch}
        className="absolute right-4 rotate-180 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m12 0h6M9 5l-7 7 7 7" />
          </svg>
        </button>
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 1c-3.86 0-7 1.57-7 3.5V16h14v-1.5c0-1.93-3.14-3.5-7-3.5z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBox;
