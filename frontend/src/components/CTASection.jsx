import { useNavigate } from "react-router-dom";
import "./CTASection.css";

import {
  Sparkles,
  CalendarDays,
  Star,
} from "lucide-react";

import hotelImage from "../assets/image/hotel-lobby2.png";


const CTASection = ({ openDashboard, openDemo }) => {

  const navigate = useNavigate();


  return (

    <section className="cta-section">

      <div className="cta-container">


        {/* Left Content */}

        <div className="cta-content">


          <div className="cta-badge">

            <Sparkles size={16} />

            <span>
              AI POWERED HOTEL SOLUTIONS
            </span>

          </div>



          <h2 className="cta-heading">

            Ready to Transform

            <br />

            Your <span>Hotel</span>

            <br />

            with AI?

          </h2>




          <p className="cta-description">

            Manage bookings, automate pricing,
            streamline operations, and deliver
            smarter guest experiences with one
            intelligent AI-powered platform.

          </p>




          {/* Buttons */}

          <div className="cta-buttons">


            {/* Request AI Demo Button */}

            <button
              className="cta-button"
              onClick={openDemo}
            >

              <Sparkles size={20} />
<span>Request AI Demo</span>

            </button>





            {/* Dashboard Button */}

            <button

              className="dashboard-button"

              onClick={() => navigate("/dashboard")}

            >

              Explore Dashboard

            </button>



          </div>





          <div className="cta-trust">


            <Star
              size={18}
              fill="currentColor"
            />


            <span>
              Trusted by 150+ Hotels Worldwide
            </span>


          </div>



        </div>





        {/* Right Image */}


        <div className="cta-image-wrapper">


          <img

            src={hotelImage}

            alt="Luxury Hotel Interior"

            className="cta-image"

          />



          <div className="cta-image-overlay"></div>



        </div>



      </div>



    </section>


  );

};


export default CTASection;