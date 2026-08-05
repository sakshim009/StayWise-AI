import "./ChooseJourney.css";

import {
  UserRound,
  Hotel,
  Sparkles,
  Search,
  Bot,
  CalendarCheck,
  LayoutDashboard,
  BarChart3,
  Settings2,
} from "lucide-react";


function ChooseJourney() {


  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({

        behavior:"smooth",

        block:"center",

      });

  };



  return (

    <section
      id="journey"
      className="journey-section"
    >


      <div className="journey-container">



        {/* ================= HEADING ================= */}


        <div className="journey-heading">


          <span className="journey-badge">

            <Sparkles size={16}/>

            Choose Your Journey

          </span>



          <h2>

            One Platform.

            <span>
              Two Experiences.
            </span>


          </h2>



          <p>

            Whether you are finding your perfect stay or growing your
            hotel business, StayWise AI creates a smarter experience.

          </p>


        </div>





        {/* ================= MAIN CARD ================= */}


        <div className="journey-card">





          {/* ================= GUEST ================= */}


          <div className="journey-side">



            <div className="side-icon guest-icon">

              <UserRound size={48}/>

            </div>




            <span className="side-tag">

              FOR GUESTS

            </span>




            <h3>

              Guest

            </h3>




            <p>

              Discover hotels, get AI recommendations,
              and book your perfect stay.

            </p>





            <div className="feature-chips">



              <div className="chip">

                <Search size={18}/>

                Search Hotels

              </div>




              <div className="chip">

                <Bot size={18}/>

                AI Assistant

              </div>




              <div className="chip">

                <CalendarCheck size={18}/>

                Instant Booking

              </div>



            </div>





            <button

              className="journey-btn"

              onClick={() =>
                scrollToSection("booking")
              }

            >

              Explore Hotels

            </button>



          </div>







          {/* ================= DIVIDER ================= */}



          <div className="journey-divider">

            <span></span>

          </div>







          {/* ================= HOTEL OWNER ================= */}



          <div className="journey-side">



            <div className="side-icon owner-icon">

              <Hotel size={48}/>

            </div>




            <span className="side-tag">

              FOR HOTEL OWNERS

            </span>





            <h3>

              Hotel Owner

            </h3>





            <p>

              Manage operations, automate tasks,
              and grow your hotel with AI.

            </p>





            <div className="feature-chips">



              <div className="chip">

                <LayoutDashboard size={18}/>

                Dashboard

              </div>




              <div className="chip">

                <BarChart3 size={18}/>

                Analytics

              </div>




              <div className="chip">

                <Settings2 size={18}/>

                AI Automation

              </div>



            </div>





            <button

              className="journey-btn dark"

              onClick={() =>
                scrollToSection("hotel-section")
              }

            >

              Grow Your Hotel

            </button>




          </div>



        </div>



      </div>


    </section>

  );

}


export default ChooseJourney;