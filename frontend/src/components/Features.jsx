import "./Features.css";

import {
  BedDouble,
  BadgeDollarSign,
  Bot,
  Sparkles,
  BarChart3,
  MessageSquareHeart,
} from "lucide-react";


const features = [

  {
    icon: <BedDouble />,
    title: "AI Room Recommendation",
    description:
      "Suggests the perfect room based on guest preferences, budget, and previous stays.",
  },


  {
    icon: <BadgeDollarSign />,
    title: "Dynamic Pricing",
    description:
      "Adjusts room prices intelligently according to demand, season, and occupancy.",
  },


  {
    icon: <Bot />,
    title: "AI Guest Assistant",
    description:
      "Provides instant 24/7 support for bookings, hotel services, and guest queries.",
  },


  {
    icon: <Sparkles />,
    title: "Smart Housekeeping",
    description:
      "Automatically schedules room cleaning and optimizes housekeeping operations.",
  },


  {
    icon: <BarChart3 />,
    title: "Predictive Analytics",
    description:
      "Forecast occupancy, revenue, and booking trends using AI-powered insights.",
  },


  {
    icon: <MessageSquareHeart />,
    title: "Guest Sentiment Analysis",
    description:
      "Analyze reviews and feedback to continuously improve guest satisfaction.",
  },

];




export default function Features() {


  return (

    <section
      id="features"
      className="feature-section"
    >


      <div className="feature-container">



        {/* ================= HEADING ================= */}


        <div className="feature-heading">


          <span className="feature-tag">

            ✨ SMART HOTEL CAPABILITIES

          </span>




          <h2>

            Everything Your{" "}

            <span className="gold-ai">

              Hotel

            </span>{" "}

            Needs.

            <br />


            Powered by{" "}

            <span className="gold-ai">

              AI

            </span>


          </h2>




          <p>

            Manage bookings, automate operations, and deliver exceptional
            guest experiences—all through one intelligent AI platform.

          </p>



        </div>







        {/* ================= FEATURE CARDS ================= */}



        <div className="feature-grid">



          {
            features.map((feature,index)=>(


              <div
                className="feature-card"
                key={index}
              >




                <div className="feature-icon">

                  {feature.icon}

                </div>





                <h3>

                  {feature.title}

                </h3>





                <p>

                  {feature.description}

                </p>





              </div>


            ))
          }



        </div>




      </div>



    </section>

  );

}