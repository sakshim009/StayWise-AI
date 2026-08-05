import "./BookingPass.css";
import { useLocation, useNavigate } from "react-router-dom";

function BookingPass() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking =
    location.state ||
    JSON.parse(
      localStorage.getItem("latestBooking")
    );


  if (!booking) {

    return (

      <div className="pass-page">

        <div className="pass-card">

          <h1>
            No Booking Found
          </h1>

          <p>
            Please complete a booking first.
          </p>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>

        </div>

      </div>

    );

  }


  const {

    bookingId,
    hotel,
    room,
    name,
    checkIn,
    checkOut,
    guests,
    payment,
    nights,
    total,
    isCancelled

  } = booking;


  return (

    <div className="pass-page">


      <div className="pass-card">


        {/* LOGO */}

        <div className="logo">
          StayWise AI
        </div>


        <h1>
          Digital Booking Pass
        </h1>



        {/* STATUS */}

        <div
          className={`status ${
            isCancelled
              ? "status-cancelled"
              : "status-confirmed"
          }`}
        >

          {
            isCancelled
              ? "Booking Cancelled"
              : "Booking Confirmed"
          }

        </div>



        {/* BOOKING NUMBER */}

        <div className="booking-number">

          <span>
            Booking ID
          </span>

          <h2>
            {bookingId}
          </h2>

        </div>




        {/* DETAILS */}

        <div className="pass-details">


          <div className="pass-row">

            <span>
              Hotel
            </span>

            <strong>
              {hotel?.name}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Room
            </span>

            <strong>
              {room?.name}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Guest Name
            </span>

            <strong>
              {name}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Check In
            </span>

            <strong>
              {checkIn}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Check Out
            </span>

            <strong>
              {checkOut}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Guests
            </span>

            <strong>
              {guests}
            </strong>

          </div>



          <div className="pass-row">

            <span>
              Payment
            </span>

            <strong>
              {payment}
            </strong>

          </div>



          <div className="pass-row total-row">

            <span>
              Total Paid
            </span>

            <strong>
              ₹{total?.toLocaleString()}
            </strong>

          </div>



        </div>




        {/* NOTE */}

        <div className="pass-note">

          <p>
            Please show this digital booking pass
            at the hotel reception during check-in.
            Keep your booking ID ready for verification.
          </p>

        </div>




        {/* BUTTON */}

        <div className="pass-footer">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >

            Back to Home

          </button>

        </div>



      </div>


    </div>

  );

}


export default BookingPass;