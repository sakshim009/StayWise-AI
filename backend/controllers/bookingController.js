import hotelKnowledge from "../data/hotelKnowledge.js";
export const searchHotels = (req, res) => {
  try {
    console.log("========== SEARCH ==========");
    console.log("Request Body:", req.body);

    const { location } = req.body;

    console.log("Location:", location);

    if (!location) {
      console.log("Location missing");

      return res.status(400).json({
        success: false,
        message: "Location is required",
      });
    }

    const hotels = hotelKnowledge.hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );

    console.log("Hotels Found:", hotels.length);
    console.log(hotels);

    return res.status(200).json({
      success: true,
      count: hotels.length,
      hotels,
    });
  } catch (error) {
    console.error("Search Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};