import "./HotelSolutions.css";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Brain,
  DollarSign,
  BedDouble,
  BarChart3,
} from "lucide-react";


function HotelSolutions() {

  const navigate = useNavigate();


  return (

    <section
      id="solutions"
      className="hotel-solutions"
    >


      <div className="hotel-container">



        {/* ================= LEFT CONTENT ================= */}


        <div className="hotel-content">



          <span className="hotel-tag">

            AI POWERED HOTEL PLATFORM

          </span>




          <h2>

            Manage Your Hotel

            <span> Smarter with AI.</span>

          </h2>




          <p>

            Automate operations, optimize pricing,
            improve guest experiences, and monitor
            your hotel's performance through one
            intelligent platform.

          </p>





          <div className="hotel-feature">


            <div className="feature-icon">

              <Brain size={24}/>

            </div>



            <div>

              <h3>
                AI Booking Assistant
              </h3>


              <p>

                Handle guest bookings instantly using
                AI-powered recommendations.

              </p>


            </div>


          </div>





          <div className="hotel-feature">


            <div className="feature-icon">

              <DollarSign size={24}/>

            </div>



            <div>


              <h3>
                Dynamic Pricing
              </h3>


              <p>

                Automatically adjust prices according
                to occupancy and demand.

              </p>


            </div>


          </div>






          <div className="hotel-feature">


            <div className="feature-icon">

              <BedDouble size={24}/>

            </div>



            <div>


              <h3>
                Smart Housekeeping
              </h3>


              <p>

                Assign and monitor housekeeping tasks
                intelligently.

              </p>


            </div>


          </div>







          <div className="hotel-feature">


            <div className="feature-icon">

              <BarChart3 size={24}/>

            </div>



            <div>


              <h3>
                Revenue Analytics
              </h3>


              <p>

                Track revenue, occupancy and bookings
                with real-time insights.

              </p>


            </div>


          </div>







          <button

            className="dashboard-btn"

            onClick={() => navigate("/dashboard")}

          >

            Explore Dashboard


            <ArrowRight size={18}/>


          </button>





        </div>









        {/* ================= RIGHT DASHBOARD PREVIEW ================= */}



        <div className="dashboard-wrapper">



          <div className="hotel-preview-card">





            <div className="hotel-preview-top">


              <h3>

                StayWise Dashboard

              </h3>



              <span>

                Live Preview

              </span>



            </div>







            <div className="hotel-preview-stats">





              <div className="hotel-preview-stat">


                <small>
                  Occupancy
                </small>


                <h2>
                  92%
                </h2>


                <p>
                  Excellent
                </p>


              </div>







              <div className="hotel-preview-stat">


                <small>
                  Revenue
                </small>


                <h2>
                  $28.4K
                </h2>


                <p>
                  This Month
                </p>


              </div>







              <div className="hotel-preview-stat">


                <small>
                  Bookings
                </small>


                <h2>
                  148
                </h2>


                <p>
                  Today
                </p>


              </div>







              <div className="hotel-preview-stat">


                <small>
                  Rating
                </small>


                <h2>
                  4.9★
                </h2>


                <p>
                  Guest Score
                </p>


              </div>





            </div>









            <div className="hotel-preview-chart">





              <div className="hotel-preview-chart-header">

                Monthly Performance

              </div>







              <div className="hotel-preview-bars">


                <div className="hotel-preview-bar b1"></div>

                <div className="hotel-preview-bar b2"></div>

                <div className="hotel-preview-bar b3"></div>

                <div className="hotel-preview-bar b4"></div>

                <div className="hotel-preview-bar b5"></div>

                <div className="hotel-preview-bar b6"></div>

                <div className="hotel-preview-bar b7"></div>



              </div>





            </div>





          </div>





        </div>





      </div>



    </section>

  );

}


export default HotelSolutions;