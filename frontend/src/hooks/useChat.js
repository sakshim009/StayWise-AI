import { useState } from "react";

export default function useChat() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! Welcome to StayWise AI. How can I help you today?"
    }
  ]);

  const [typing, setTyping] = useState(false);

  const getReply = (message) => {

    const text = message.toLowerCase();

    if (
      text.includes("room") ||
      text.includes("book") ||
      text.includes("suite")
    ) {
      return "🏨 We'd be happy to help with your booking. Please tell me your check-in date, check-out date, and number of guests.";
    }

    if (
      text.includes("restaurant") ||
      text.includes("food") ||
      text.includes("dining") ||
      text.includes("cafe")
    ) {
      return "🍽 We have a Rooftop Restaurant and a Poolside Café. Would you like to reserve a table or view today's menu?";
    }

    if (
      text.includes("spa") ||
      text.includes("service") ||
      text.includes("housekeeping") ||
      text.includes("laundry")
    ) {
      return "🛎 Our hotel offers spa, housekeeping, laundry, airport pickup, and 24/7 room service. Which service do you need?";
    }

    if (
      text.includes("near") ||
      text.includes("places") ||
      text.includes("attractions")
    ) {
      return "📍 Nearby attractions include the beach, historic fort, shopping mall, and city museum. What would you like to explore?";
    }

    return "😊 I'm here to help with room bookings, dining, hotel services, and nearby attractions. Could you tell me a little more about what you need?";
  };

  const sendMessage = (text) => {

    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: getReply(text)
      };

      setMessages((prev) => [...prev, aiMessage]);

      setTyping(false);

    }, 1000);

  };

  return {
    messages,
    typing,
    sendMessage
  };
}