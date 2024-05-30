// src/components/Suggestions.js

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


function Suggestions() {
  const {setText} = useContext(UserContext);
  const navigate = useNavigate();
  const suggestions = [
    "How can I use trlX to RLHF a Llama model?",
    "What is QLoRA and does it have any tradeoffs?",
    "AWS EFA vs Infiniband",
    "Does torch.compile() work with DeepSpeed ZeRO?"
  ];
  const handleClick = (index) => {
    navigate("/playground")
    setText(suggestions[index]);
  }
  return (
    <div className="mt-12 w-full max-w-2xl flex flex-wrap justify-center space-x-2">
      {suggestions.map((suggestion, index) => (
        <div key={index} onClick={() => handleClick(index)} className="px-4 py-1 bg-neutral-700 text-gray-300 rounded-lg mb-2 hover:-translate-y-1 duration-200 cursor-pointer text-sm">
          {suggestion}
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
