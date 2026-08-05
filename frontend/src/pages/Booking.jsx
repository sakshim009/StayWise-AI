import "./Booking.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {

  const location = useLocation();
  const navigate = useNavigate();

  const { hotel, room } = location.state || {};

  /* ================= STATES ================= */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState("1 Guest");
  const [payment, setPayment] = useState("UPI");

  if (!hotel || !room) {

    return (

      <div className="booking-page">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2 className="no-booking">
          No booking information found.
        </h2>

      </div>

    );

  }

  /* ================= PRICE CALCULATION ================= */

  const roomPrice =
    typeof room.price === "number"
      ? room.price
      : Number(
          String(room.price).replace(/[^\d]/g, "")
        );

  let nights = 1;

  if (checkIn && checkOut) {

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference = end - start;

    if (difference > 0) {

      nights = Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      );

    }

  }

  const subtotal = roomPrice * nights;

  const tax = Math.round(subtotal * 0.10);

  const serviceFee = 150;

  const total =
    subtotal +
    tax +
    serviceFee;

  /* ================= CONFIRM BOOKING ================= */

  const handleBooking = () => {

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !checkIn ||
      !checkOut
    ) {

      alert("Please fill all booking details.");

      return;

    }

    if (
      new Date(checkOut) <=
      new Date(checkIn)
    ) {

      alert(
        "Check-out date must be after check-in date."
      );

      return;

    }

    const bookingId =
      "SWA-" +
      new Date().getFullYear() +
      "-" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    navigate(
      "/booking-confirmation",
      {

        state: {

          bookingId,

          hotel,

          room,

          name,

          email,

          phone,

          guests,

          payment,

          checkIn,

          checkOut,

          nights,

          subtotal,

          tax,

          serviceFee,

          total,

        },

      }
    );

  };

  return (

    <div className="booking-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="booking-title">
        Book Your Stay
      </h1>

      <div className="booking-container">

        {/* ================= HOTEL CARD ================= */}

        <div className="booking-card">

          <img
            src={room.image}
            alt={room.name}
            className="booking-room-image"
          />

          <div className="booking-info">

            <h2>{hotel.name}</h2>

            <p className="hotel-location">
              📍 {hotel.location}
            </p>

            <p className="hotel-rating">
              ⭐ {hotel.rating}
            </p>

            <hr />

            <h3 className="room-title">
              {room.name}
            </h3>

            <div className="room-details">

              <p>
                <strong>Price :</strong>
                ₹{roomPrice.toLocaleString()}
              </p>

              <p>
                <strong>Capacity :</strong>
                {room.capacity}
              </p>

            </div>

            <h4 className="amenities-title">
              Amenities
            </h4>

            <ul className="amenities-list">

              {(room.features || []).map(
                (feature, index) => (

                  <li key={index}>
                    ✔ {feature}
                  </li>

                )
              )}

            </ul>

          </div>

        </div>

        {/* ================= BOOKING FORM ================= */}

        <div className="booking-form">

          <h2>Guest Details</h2>

                    {/* Full Name */}

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          {/* Email */}

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Phone */}

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

          </div>

          {/* Check In / Check Out */}

          <div className="date-row">

            <div className="form-group">

              <label>Check In</label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) =>
                  setCheckIn(e.target.value)
                }
              />

            </div>

            <div className="form-group">

              <label>Check Out</label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) =>
                  setCheckOut(e.target.value)
                }
              />

            </div>

          </div>

          {/* Guests */}

          <div className="form-group">

            <label>Guests</label>

            <select
              value={guests}
              onChange={(e) =>
                setGuests(e.target.value)
              }
            >

              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>

            </select>

          </div>

          {/* Payment */}

          <div className="form-group">

            <label>Payment Method</label>

            <select
              value={payment}
              onChange={(e) =>
                setPayment(e.target.value)
              }
            >

              <option>UPI</option>
              <option>Credit / Debit Card</option>
              <option>Cash at Hotel</option>

            </select>

          </div>

                    {/* ================= BOOKING SUMMARY ================= */}

          <div className="booking-summary">

            <h3>Booking Summary</h3>

            <div className="summary-row">
              <span>Room Price / Night</span>
              <span>₹{roomPrice.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Number of Nights</span>
              <span>{nights}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Taxes (10%)</span>
              <span>₹{tax.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Service Fee</span>
              <span>₹{serviceFee.toLocaleString()}</span>
            </div>

            <hr />

            <div className="summary-row total-row">

              <span>Total Amount</span>

              <span>
                ₹{total.toLocaleString()}
              </span>

            </div>

            <button
              className="confirm-btn"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>

          </div>

                  </div>
        {/* End Booking Form */}

      </div>
      {/* End Booking Container */}

    </div>
    /* End Booking Page */

  );

}

export default Booking;