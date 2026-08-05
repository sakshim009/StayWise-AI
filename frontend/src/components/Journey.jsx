import "./Journey.css";

import {
  Search,
  Sparkles,
  CalendarCheck,
  ConciergeBell,
  LineChart
} from "lucide-react";


const journeySteps = [

  {
    icon: <Search />,
    number: "01",
    title: "Discover",
    description:
      "Guests search destinations, dates, and preferences to find the perfect stay."
  },

  {
    icon: <Sparkles />,
    number: "02",
    title: "Personalize",
    description:
      "StayWise AI understands guest needs and recommends the best room options."
  },

  {
    icon: <CalendarCheck />,
    number: "03",
    title: "Book Smart",
    description:
      "Complete bookings smoothly with intelligent pricing and instant confirmation."
  },

  {
    icon: <ConciergeBell />,
    number: "04",
    title: "Enjoy Stay",
    description:
      "AI assistance helps guests with services, requests, and personalized experiences."
  },

  {
    icon: <LineChart />,
    number: "05",
    title: "Improve Experience",
    description:
      "Hotels use AI insights to improve operations and guest satisfaction."
  }

];



function Journey() {


  return (

    <section className="journey-section">


      <div className="journey-container">



        <div className="journey-heading">


          <span className="journey-tag">

            ✨ YOUR SMART HOTEL JOURNEY

          </span>



          <h2>

            From Booking To{" "}

            <span>
              Better Experiences
            </span>

          </h2>



          <p>

            StayWise AI connects every step of the hotel journey
            with intelligent automation and personalized services.

          </p>


        </div>





        <div className="journey-timeline">


          {
            journeySteps.map((step,index)=>(


              <div 
                className="journey-card"
                key={index}
              >



                <div className="journey-number">

                  {step.number}

                </div>



                <div className="journey-icon">

                  {step.icon}

                </div>



                <h3>

                  {step.title}

                </h3>



                <p>

                  {step.description}

                </p>



              </div>


            ))
          }


        </div>



      </div>


    </section>

  );

}


export default Journey;