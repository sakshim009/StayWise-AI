import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

import ownerKnowledge from "../data/ownerKnowledge.js";
import { detectIntent } from "../utils/detectIntent.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* ======================================================
   GENERAL SYSTEM PROMPT
====================================================== */

const SYSTEM_PROMPT = `

You are StayWise AI.

StayWise AI is an AI-powered Smart Hotel Ecosystem.

Never say StayWise AI is a hotel.

You help:

• Guests
• Hotel Owners
• Hotel Managers
• Hotel Staff

Your personality:

- Friendly
- Professional
- Intelligent
- Helpful
- Natural

Rules:

1. Reply in the same language as the user.

2. Understand spelling mistakes.

3. Keep answers natural like ChatGPT.

4. If the user greets you,
greet them naturally.

5. If the user thanks you,
respond politely.

6. If the user asks something unrelated to hotels,
answer it normally.

7. Never invent information that was not provided.

8. Use previous conversation history if available.

`;

/* ======================================================
   OWNER AI PROMPT
====================================================== */

const OWNER_PROMPT = `

You are StayWise AI Manager.

You are talking ONLY with the hotel owner or manager.

The following information represents the current hotel data.

Hotel Data:

${JSON.stringify(ownerKnowledge, null, 2)}

Rules:

1. Answer using the hotel data whenever possible.

2. If the user asks:

- bookings
- occupancy
- revenue
- reviews
- VIP guests
- room availability
- pending work
- housekeeping
- staff
- salaries
- analytics
- AI recommendations

use the hotel data to answer naturally.

3. Never say:
"I don't have access."

4. If information isn't available inside the hotel data,
say:

"That information isn't available in the current hotel records."

5. Do NOT invent new numbers.

6. Explain insights like a professional hotel manager.

7. Give suggestions whenever appropriate.

Example:

User:
How is today's performance?

Good Answer:

Today's hotel performance looks strong.

• Occupancy: 92%
• Today's Bookings: 24
• Revenue: ₹2.4 Lakhs
• Available Rooms: 18

Overall, the hotel is performing well. AI recommends increasing Deluxe Room pricing by around 8% due to expected weekend demand.

`;
/* ======================================================
   CHAT CONTROLLER
====================================================== */

export const chatWithAI = async (req, res) => {
  try {
    const {
      message,
      history = [],
    } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a message.",
      });
    }

    // Detect who is asking
    const intent = detectIntent(message);

    console.log("Detected Intent:", intent);

    // =====================================================
    // BUILD CONVERSATION
    // =====================================================

    const messages = [];

    // Base StayWise AI personality
    messages.push({
      role: "system",
      content: SYSTEM_PROMPT,
    });

    // If hotel owner/manager, also inject hotel data
    if (intent === "manager") {
      messages.push({
        role: "system",
        content: OWNER_PROMPT,
      });
    }

    // Conversation history
    if (Array.isArray(history) && history.length > 0) {
      history.forEach((item) => {
        if (
          item &&
          item.role &&
          item.content
        ) {
          messages.push({
            role: item.role,
            content: item.content,
          });
        }
      });
    }

    // Current user message
    messages.push({
      role: "user",
      content: message,
    });
        // =====================================================
    // SEND TO GROQ
    // =====================================================

    const completion = await groq.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages,
  temperature: 0.7,
  max_tokens: 700,
});

    const reply =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({
      reply,
    });

  } catch (error) {

    console.error("StayWise AI Error:", error);

    return res.status(500).json({

      reply:
        "⚠️ StayWise AI is temporarily unavailable. Please try again in a moment.",

    });

  }
};