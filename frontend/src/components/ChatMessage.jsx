import React from "react";
import "./ChatMessage.css";

function ChatMessage({ sender, text, time }) {

  return (

    <div className={`message-row ${sender}`}>

      {/* Avatar */}

      <div className="avatar">

        {
          sender === "ai"
          ? "🤖"
          : "👤"
        }

      </div>


      {/* Message Content */}

      <div className="message-content">

        <div className="message-bubble">

          {text}

        </div>


        <span className="message-time">

          {time || "Just now"}

        </span>


      </div>


    </div>

  );

}


export default ChatMessage;