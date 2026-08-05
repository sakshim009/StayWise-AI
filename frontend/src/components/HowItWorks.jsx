import "./HowItWorks.css";

import {
  UserSearch,
  BrainCircuit,
  CreditCard,
  Headset,
  BarChart3
} from "lucide-react";


const processSteps = [

  {
    icon: <UserSearch />,
    title: "Guest Search",
    description:
      "Guests enter their destination, dates, and preferences to begin their personalized hotel experience."
  },


  {
    icon: <BrainCircuit />,
    title: "AI Recommendation",
    description:
      "StayWise AI analyzes requirements and suggests the most suitable rooms and services."
  },


  {
    icon: <CreditCard />,
    title: "Smart Booking",
    description:
      "Complete reservations with automated confirmation and intelligent pricing."
  },


  {
    icon: <Headset />,
    title: "AI Assistance",
    description:
      "Guests receive instant support for services, requests, and hotel information."
  },


  {
    icon: <BarChart3 />,
    title: "Hotel Insights",
    description:
      "Hotels get AI-powered analytics to improve revenue, operations, and guest satisfaction."
  }

];



function HowItWorks() {


  return (

    <section className="how-section">


      <div className="how-container">



        {/* Heading */}

        <div className="how-heading">


          <span className="how-tag">

            ✨ HOW STAYWISE AI WORKS

          </span>



          <h2>

            One Intelligent Platform.

            <br />

            Endless{" "}

            <span>
              Possibilities
            </span>

          </h2>



          <p>

            From the first search to post-stay insights,
            StayWise AI creates a seamless experience
            for both guests and hotel teams.

          </p>


        </div>





        {/* Steps */}


        <div className="how-grid">


          {
            processSteps.map((step,index)=>(


              <div 
                className="how-card"
                key={index}
              >



                <div className="how-icon">

                  {step.icon}

                </div>



                <div className="how-number">

                  0{index + 1}

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


export default HowItWorks;