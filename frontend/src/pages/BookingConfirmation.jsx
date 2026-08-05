import "./BookingConfirmation.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import generatePDF from "../utils/generatePDF";
import { QRCodeSVG } from "qrcode.react";

function BookingConfirmation() {

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const [isCancelled, setIsCancelled] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  if (!data) {
    return (
      <div className="confirmation-page">
        <h2>No booking information found.</h2>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const {
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
  } = data;

  const handleCancelBooking = () => {
    setShowCancelModal(true);
  };

  const confirmCancellation = () => {
    setIsCancelled(true);
    setShowCancelModal(false);
  };

  const closeModal = () => {
    setShowCancelModal(false);
  };

  // Save latest booking for Digital Booking Pass
  localStorage.setItem(
    "latestBooking",
    JSON.stringify({
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
      isCancelled,
    })
  );

  return (

    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="success-icon">
          {isCancelled ? "❌" : "✅"}
        </div>

        <h1>
          {isCancelled
            ? "Booking Cancelled"
            : "Booking Confirmed!"}
        </h1>

        <div
          className={`status-badge ${
            isCancelled
              ? "cancelled"
              : "confirmed"
          }`}
        >
          {isCancelled ? "Cancelled" : "Confirmed"}
        </div>

        <p className="thank-you">
          {isCancelled
            ? "Your reservation has been cancelled successfully."
            : "Thank you for choosing StayWise AI. Your reservation has been successfully confirmed."}
        </p>

        <div className="booking-id">
          Booking ID
          <h2>{bookingId}</h2>
        </div>

        {/* ================= QR CODE ================= */}

        <div className="qr-card">

          <h3>Digital Check-in Pass</h3>

          <QRCodeSVG
            value={`${window.location.origin}/booking-pass`}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />

          <p className="qr-text">
            Show this QR code at the hotel reception for quick booking verification during check-in.
          </p>

        </div>

                {/* ================= BOOKING DETAILS ================= */}

        <div className="confirmation-details">

          <div className="detail-row">
            <span>Hotel</span>
            <strong>{hotel.name}</strong>
          </div>

          <div className="detail-row">
            <span>Room</span>
            <strong>{room.name}</strong>
          </div>

          <div className="detail-row">
            <span>Guest Name</span>
            <strong>{name}</strong>
          </div>

          <div className="detail-row">
            <span>Email</span>
            <strong>{email}</strong>
          </div>

          <div className="detail-row">
            <span>Phone</span>
            <strong>{phone}</strong>
          </div>

          <div className="detail-row">
            <span>Check In</span>
            <strong>{checkIn}</strong>
          </div>

          <div className="detail-row">
            <span>Check Out</span>
            <strong>{checkOut}</strong>
          </div>

          <div className="detail-row">
            <span>Nights</span>
            <strong>{nights}</strong>
          </div>

          <div className="detail-row">
            <span>Guests</span>
            <strong>{guests}</strong>
          </div>

          <div className="detail-row">
            <span>Payment Method</span>
            <strong>{payment}</strong>
          </div>

        </div>

        {/* ================= PAYMENT SUMMARY ================= */}

        <div className="price-summary">

          <h2>Payment Summary</h2>

          <div className="detail-row">
            <span>Room Charges</span>
            <strong>₹{subtotal.toLocaleString()}</strong>
          </div>

          <div className="detail-row">
            <span>Taxes (10%)</span>
            <strong>₹{tax.toLocaleString()}</strong>
          </div>

          <div className="detail-row">
            <span>Service Fee</span>
            <strong>₹{serviceFee.toLocaleString()}</strong>
          </div>

          <hr />

          <div className="detail-row total">
            <span>Total Paid</span>
            <strong>₹{total.toLocaleString()}</strong>
          </div>

        </div>

        {/* ================= BUTTONS ================= */}

        <div className="confirmation-buttons">

          <button
            className="receipt-btn"
            disabled={isCancelled}
            onClick={() => generatePDF(data)}
          >
            Download Receipt
          </button>

          {!isCancelled ? (

            <button
              className="cancel-btn"
              onClick={handleCancelBooking}
            >
              Cancel Booking
            </button>

          ) : (

            <button
              className="cancelled-btn"
              disabled
            >
              Booking Cancelled
            </button>

          )}

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>

            {/* ================= CANCEL BOOKING MODAL ================= */}

      {showCancelModal && (

        <div className="modal-overlay">

          <div className="cancel-modal">

            <h2>Cancel Booking?</h2>

            <p>
              Are you sure you want to cancel this booking?
              <br />
              This action cannot be undone.
            </p>

            <div className="modal-buttons">

              <button
                className="keep-btn"
                onClick={closeModal}
              >
                Keep Booking
              </button>

              <button
                className="confirm-cancel-btn"
                onClick={confirmCancellation}
              >
                Yes, Cancel Booking
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default BookingConfirmation;