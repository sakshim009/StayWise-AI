import { useParams, useNavigate } from "react-router-dom";
import "./ViewRoom.css";

import hotelKnowledge from "../data/hotelKnowledge";

function ViewRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotelKnowledge.hotels.find(
    (hotel) => hotel.id === Number(id)
  );

  if (!hotel) {
    return (
      <div className="view-room">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2>Hotel Not Found</h2>
      </div>
    );
  }

  return (
    <div className="view-room">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="view-container">

        {/* Hotel Information */}
        <section className="hotel-info">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="hotel-banner"
          />

          <div className="hotel-details">

            <h1>{hotel.name}</h1>

            <p className="hotel-location">
              📍 {hotel.location}
            </p>

            <p className="hotel-rating">
              ⭐ {hotel.rating}
            </p>

            <div className="about-section">

              <h3>About Hotel</h3>

              <p className="hotel-description">
                Experience luxury hospitality with elegant rooms,
                premium facilities, delicious dining and exceptional
                service designed to make every stay memorable.
              </p>

            </div>

          </div>

        </section>

        {/* Rooms */}
        <section className="rooms-grid">

          {hotel.rooms.map((room) => (

            <div
              className="room-card"
              key={room.id}
            >

              <img
                src={room.image}
                alt={room.name}
                className="room-image"
                onError={(e) => {
                  e.target.src = "/room1.jpg";
                }}
              />

              <div className="room-content">

                <h2>{room.name}</h2>

                <h3>{room.price}</h3>

                <p>👥 {room.capacity}</p>

                <h4>Amenities</h4>

                <ul>
                  {room.features.map((feature, index) => (
                    <li key={index}>✔ {feature}</li>
                  ))}
                </ul>

                <button
  className="book-btn"
  onClick={() =>
    navigate("/booking", {
      state: {
        hotel,
        room,
      },
    })
  }
>
  Book Now
</button>

              </div>

            </div>

          ))}

        </section>

      </div>
    </div>
  );
}

export default ViewRoom;