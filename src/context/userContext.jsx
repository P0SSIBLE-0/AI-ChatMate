import React, { createContext, useEffect, useState } from "react";
import run from "../gemini";

export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [previousChats, setPreviousChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState('');
  const [currentQuery , setCurrentQuery] = useState('');

  
  const searchGemini = async (text) => {
    if (text.length > 1) {
      setLoading(true);
      setCurrentQuery(text);
      const response = await run(text);
      setPreviousChats(prev => [...prev, { query: text, response }]);
      setCurrentChat(response);
      setText("");
      setLoading(false);
    }
  };

  useEffect(() => {
    searchGemini(text);
  }, [text]);

  return (
    <UserContext.Provider
      value={{
        text,
        setText,
        previousChats,
        setPreviousChats,
        loading,
        setLoading,
        currentChat,
        setCurrentChat,
        searchGemini,
        currentQuery,
        setCurrentQuery
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
