import { useState, useEffect, useRef } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await axiosPublic.post("/api/chat", {
        message: input,
      });

      setMessages((prev) => [...prev, { sender: "bot", text: res.data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            error.response?.data?.message ||
            "⚠️ Server error, please try again later.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-6 bottom-6 z-50 bg-[#D1A054] hover:bg-[#b8843f] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl"
      >
        🤖
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 max-h-[70vh] flex flex-col bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 px-4 py-2 font-semibold text-white flex justify-between items-center">
            Chat with AI
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-900">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-[#D1A054] text-white"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 italic">🤖 Thinking...</div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex p-3 bg-gray-800 border-t border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-full bg-gray-700 text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-3 py-2 rounded-full bg-[#D1A054] hover:bg-[#b8843f] transition text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
