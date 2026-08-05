import "./FeaturedRooms.css";

import {
  Wifi,
  Tv,
  Snowflake,
  Bell,
  CheckCircle,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function FeaturedRooms({ rooms, aiRecommendation }) {
  const navigate = useNavigate();

  return (
    <section id="rooms" className="rooms-section">
      <div className="rooms-heading">
        <span className="section-line"></span>

        <h2>
          Featured <span>Hotels</span>
        </h2>

        <p>
          Experience luxury, comfort, and personalized stays designed for every
          guest.
        </p>
      </div>

      {/* ================= AI RECOMMENDATION ================= */}

      {aiRecommendation && (
        <div className="ai-recommendation-card">
          <div className="ai-header">
            <Sparkles size={24} color="#C9A227" />
            <h3>StayWise AI Recommendation</h3>
          </div>

          <h2>{aiRecommendation.hotelName}</h2>

          <div className="ai-match">
            ⭐ Match Score: {aiRecommendation.match}
          </div>

          <h4>Why AI recommends this hotel</h4>

          <ul>
            {aiRecommendation.reasons.map((reason, index) => (
              <li key={index}>✅ {reason}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ================= HOTEL LIST ================= */}

      <div className="rooms-container">
        {rooms.length === 0 ? (
          <p className="no-rooms">
            Search a destination to find rooms.
          </p>
        ) : (
          rooms.map((hotel) => (
            <div className="room-card" key={hotel.id}>
              <div className="room-image">
                <img src={hotel.image} alt={hotel.name} />

                <div className="rating">
                  ⭐ {hotel.rating}
                </div>
              </div>

              <div className="room-content">
                <h3>{hotel.name}</h3>

                <p className="room-description">
                  📍 {hotel.location}
                </p>

                <div className="amenities">
                  <div className="amenity">
                    <Wifi />
                    <span>WiFi</span>
                  </div>

                  <div className="amenity">
                    <Tv />
                    <span>Smart TV</span>
                  </div>

                  <div className="amenity">
                    <Snowflake />
                    <span>AC</span>
                  </div>

                  <div className="amenity">
                    <Bell />
                    <span>24/7 Service</span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <h4
                    style={{
                      marginBottom: "12px",
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    Available Rooms
                  </h4>

                  {hotel.rooms.map((room, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color="#C9A227"
                      />

                      <div>
                        <strong>{room.name}</strong>

                        <br />

                        <small>
                          {room.price} • {room.capacity}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="room-bottom">
                  <div className="price">
                    <span>
                      {hotel.rooms.length} Room Types
                    </span>

                    <small>Available Now</small>
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/room/${hotel.id}`)
                    }
                  >
                    View
                    <br />
                    Rooms
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;