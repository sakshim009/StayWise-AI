import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const recommendHotel = async (req, res) => {
  try {
    const { hotels, location, guests } = req.body;

    if (!hotels || hotels.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No hotels available for recommendation.",
      });
    }

    // Create a simple hotel list for Groq
    const hotelDetails = hotels
      .map(
        (hotel, index) => `
${index + 1}. ${hotel.name}
Location: ${hotel.location}
Rating: ${hotel.rating}
Room Types: ${hotel.rooms.length}
`
      )
      .join("\n");

    const prompt = `
You are StayWise AI, an intelligent hotel recommendation assistant.

The user searched for:

Location: ${location}
Guests: ${guests}

Available Hotels:

${hotelDetails}

Choose ONLY ONE best hotel.

Return ONLY valid JSON.

Format:

{
  "hotelName": "Hotel Name",
  "match": "96%",
  "reasons": [
    "Reason 1",
    "Reason 2",
    "Reason 3",
    "Reason 4"
  ]
}

Do not write anything except JSON.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 300,
    });

    let reply = completion.choices[0].message.content.trim();

    // Remove markdown if Groq wraps JSON in ```json ... ```
    reply = reply.replace(/```json/g, "").replace(/```/g, "").trim();

    let recommendation;

    try {
      recommendation = JSON.parse(reply);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "AI returned an invalid response.",
        raw: reply,
      });
    }

    return res.status(200).json({
      success: true,
      recommendation,
    });

  } catch (error) {
    console.error("Recommendation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to generate AI recommendation.",
    });
  }
};