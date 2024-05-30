// src/components/ChatContainer.js
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import ChatInput from "./chatInput";
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // You can choose other styles as well

// Configure marked to use highlight.js
marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

function ChatContainer() {
  const { currentChat, previousChats, loading, currentQuery } =
    useContext(UserContext);

    const chatContainerRef = useRef(null);

  const createMarkup = (content) => {
    const dirty = marked(content);
    const clean = DOMPurify.sanitize(dirty);
    return { __html: clean };
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };
  useEffect(() => {
    hljs.highlightAll();
    scrollToBottom()
  }, [currentChat]);

  
  return (
    <div className="flex-1 flex flex-col bg-[#171719] lg:p-8 h-full">
      <div ref={chatContainerRef} className="flex-1 lg:p-4 overflow-y-auto pb-12">
        {currentChat ? (
          previousChats.map((data, i) => {
            return (
              <div
                key={Math.round(Math.random() * 9999 + 11)}
                className="flex flex-col gap-5 px-8 pb-12"
              >
                <div className=" mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 mt-2 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <span className="bg-[#303331]  py-2 px-3 rounded-lg rounded-bl-none">
                    {i === previousChats.length - 1 ? currentQuery : data.query}
                  </span>
                  {console.log(data)}
                </div>
                {loading && i === previousChats.length - 1 ? (
                  <div className="space-y-2">
                    <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]">
                      {" "}
                    </div>
                    <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]">
                      {" "}
                    </div>
                    <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[230px]">
                      {" "}
                    </div>
                  </div>
                ) : (
                  <div className="leading-7 text-gray-200 prose lg:prose-base prose-invert max-w-none -mt-8">
                    <div
                      dangerouslySetInnerHTML={createMarkup(data.response)}
                    ></div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <img
              className="mix-blend-lighten p-4 h-56 w-56 lg:w-96 lg:h-96"
              src="https://cdn.dribbble.com/userupload/12998560/file/original-fd89c907c6b19b2d5f6ab229be3d63df.gif"
              alt=""
            />
            <p className="text-gray-500 text-lg px-4">
              No conversations yet. Start a new chat now!
            </p>
          </div>
        )}
      </div>
      <ChatInput scrollToBottom={scrollToBottom} />
    </div>
  );
}

export default ChatContainer;
