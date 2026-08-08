import { useState, useEffect, useRef } from "react";
import "./ChatWindow.css";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm StayWise AI. How can I help you today?",
      time: "Just now",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
        time: getTime(),
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("https://staywise-ai-backend-6vue.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
          time: getTime(),
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Unable to connect to StayWise AI.",
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="chat-section">
      <div className="chat-container">
        <h1>🤖 StayWise AI Assistant</h1>

        <p>Your personal hotel concierge</p>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              text={msg.text}
              time={msg.time}
            />
          ))}

          {loading && (
            <ChatMessage
              sender="ai"
              text="Thinking..."
              time=""
            />
          )}

          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input-wrapper">
          <ChatInput sendMessage={sendMessage} />
        </div>
      </div>
    </section>
  );
}

export default ChatWindow;