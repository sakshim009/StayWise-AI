import { useState } from "react";
import "./ChatInput.css";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ sendMessage }) {

  const [input, setInput] = useState("");

  const handleSend = () => {

    const message = input.trim();

    if (!message) return;

    sendMessage(message);

    setInput("");

  };

  return (

    <div className="chat-input">

      <input
        type="text"
        value={input}
        autoFocus
        placeholder="Ask StayWise AI anything..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button
        type="button"
        onClick={handleSend}
        disabled={!input.trim()}
        className="send-btn"
      >

        <FaPaperPlane />

      </button>

    </div>

  );

}

export default ChatInput;