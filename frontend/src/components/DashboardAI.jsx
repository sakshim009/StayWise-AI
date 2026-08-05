import { useState, useEffect, useRef } from "react";
import { Send, Bot } from "lucide-react";
import "./DashboardAI.css";

function DashboardAI() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "Hello Hotel Owner 👋\nI am your StayWise AI Manager. Ask me about rooms, bookings, revenue, guests, analytics or hotel operations."
    }
  ]);

  const [loading, setLoading] = useState(false);

  // Auto Scroll
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);



  const sendMessage = async () => {

    if (message.trim() === "") return;

    const userMessage = message.trim();

    // Add user message immediately
    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    setLoading(true);

    try {

      // Prepare conversation history
      const history = chat.map((item) => ({
        role: item.sender === "user" ? "user" : "assistant",
        content: item.text,
      }));

      history.push({
        role: "user",
        content: userMessage,
      });

      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            message: userMessage,

            role: "hotel_owner",

            history,

          }),

        }
      );

      const data = await response.json();

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            data.reply ||
            data.message ||
            "Sorry, I couldn't understand your request.",
        },
      ]);

    }
    catch (error) {

      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to connect with AI server. Please check backend.",
        },
      ]);

    }
    finally {

      setLoading(false);

    }

  };
    return (

    <div className="dashboard-ai">

      {/* ================= TITLE ================= */}

      <div className="ai-title">

        <Bot size={28} />

        <div>

          <h2>StayWise AI Assistant</h2>

          <p>Your intelligent hotel management partner</p>

        </div>

      </div>



      {/* ================= CHAT WINDOW ================= */}

      <div className="ai-chat-window">

        {

          chat.map((item, index) => (

            <div

              key={index}

              className={
                item.sender === "ai"
                  ? "ai-message"
                  : "user-message"
              }

            >

              {item.text}

            </div>

          ))

        }



        {

          loading &&

          <div className="ai-message">

            Thinking...

          </div>

        }



        {/* AUTO SCROLL TARGET */}

        <div ref={messagesEndRef}></div>

      </div>



      {/* ================= INPUT ================= */}

      <div className="ai-input">

        <input

          value={message}

          onChange={(e) => setMessage(e.target.value)}

          placeholder="Ask your hotel AI manager..."

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              e.preventDefault();

              sendMessage();

            }

          }}

        />



        <button

          onClick={sendMessage}

          disabled={loading}

        >

          <Send size={20} />

        </button>

      </div>

    </div>

  );

}

export default DashboardAI;