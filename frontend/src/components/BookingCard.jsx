import "./BookingCard.css";
import { useState } from "react";

import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  BadgeDollarSign,
  Headphones,
  Crown,
  ShieldCheck,
} from "lucide-react";

function BookingCard({ setRooms, setAiRecommendation }) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  const handleSearch = async () => {
    if (!location.trim()) {
      alert("Please enter a destination.");
      return;
    }

    try {
      // ================= SEARCH HOTELS =================
      const response = await fetch(
        "https://staywise-ai-backend-6vue.onrender.com/api/search/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location,
          }),
        }
      );

      const data = await response.json();
      console.log("SEARCH RESULT:", data);
console.log("HOTELS FOUND:", data.hotels?.length);

      if (!data.success) {
        alert(data.message);
        return;
      }

      // Show hotels
      setRooms(data.hotels);

      // ================= AI RECOMMENDATION =================
      try {
        const aiResponse = await fetch(
          "https://staywise-ai-backend-6vue.onrender.com/api/ai/recommend",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              location,
              guests,
              hotels: data.hotels,
            }),
          }
        );

        const aiData = await aiResponse.json();

        if (aiData.success) {
          setAiRecommendation(aiData.recommendation);
        } else {
          setAiRecommendation(null);
        }
      } catch (aiError) {
        console.error("AI Recommendation Error:", aiError);
        setAiRecommendation(null);
      }

      // ================= SCROLL =================
      setTimeout(() => {
        document.getElementById("rooms")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    }
  };
    return (
    <section className="booking-wrapper">
      {/* ================= SEARCH BAR ================= */}

      <div className="booking-bar">
        {/* LOCATION */}

        <div className="booking-field location-field">
          <MapPin size={22} />

          <div>
            <label>Location</label>

            <input
              type="text"
              placeholder="Choose destination"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* CHECK IN */}

        <div className="booking-field">
          <CalendarDays size={22} />

          <div>
            <label>Check In</label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>

        {/* CHECK OUT */}

        <div className="booking-field">
          <CalendarDays size={22} />

          <div>
            <label>Check Out</label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* GUESTS */}

        <div className="booking-field">
          <Users size={22} />

          <div>
            <label>Guests</label>

            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
            </select>
          </div>
        </div>

        {/* SEARCH */}

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          <Search size={22} />
          <span>Search</span>
        </button>
      </div>

      {/* ================= BENEFITS ================= */}

      <div className="booking-benefits">
        <div className="benefit-item">
          <BadgeDollarSign size={24} />

          <div className="benefit-content">
            <h4>Best Price</h4>
            <p>Lowest rates guaranteed</p>
          </div>
        </div>

        <div className="benefit-item">
          <Headphones size={24} />

          <div className="benefit-content">
            <h4>24/7 Support</h4>
            <p>Always here to help</p>
          </div>
        </div>

        <div className="benefit-item">
          <Crown size={24} />

          <div className="benefit-content">
            <h4>Premium Stay</h4>
            <p>Luxury experiences</p>
          </div>
        </div>

        <div className="benefit-item">
          <ShieldCheck size={24} />

          <div className="benefit-content">
            <h4>Secure Booking</h4>
            <p>Safe & Protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCard;