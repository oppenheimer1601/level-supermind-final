import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "react-markdown";
import { FaSpinner } from "react-icons/fa6";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ type: "bot", text: "Hello! I am Guru Your Spiritual Guide" }]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock API response delay
    setTimeout(async() => {
      const message = await GetBotResponse();
      const botMessage = { type: "bot", text: ` According to me \n "${message}"` }; // Replace with actual API response
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const GetBotResponse = async () => {
    setLoader(true)
    const response = await fetch("/api/get-chatbot-response",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue: input }),
    })
    const result = await response.json();
    setLoader(false)
    return result?.message;
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-full flex items-center justify-center bg-black w-full mt-10 rounded-xl text-[#d5d2be]">
      <div className="w-full p-4 bg-black rounded-xl">
        <div className="h-[350px] w-full overflow-y-auto space-y-3 p-4 bg-black rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xl px-4 py-2 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-[#100821] text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  <Markdown>
                    {message.text}
                  </Markdown>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-transparent border-b border-white text-white outline-none"
          />
          {loader===false?<button
            onClick={sendMessage}
            className="px-4 py-2 bg-[#100821] text-white font-semibold rounded-lg hover:bg-indigo-500 transition text-xl"
          >
            Send
          </button>:<span className="px-4 py-2 bg-[#100821] text-white font-semibold rounded-lg transition text-xl">
            <FaSpinner className="animate-spin"/>  
          </span>}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
