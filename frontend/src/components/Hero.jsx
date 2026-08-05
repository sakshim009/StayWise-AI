import "./Hero.css";
import hero from "../assets/image/Hero.jpg";


function Hero() {


  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  return (

    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >


      <div className="overlay"></div>



      <div className="hero-content">


        <div className="left-content">



          <p className="tagline">

            AI-POWERED SMART HOTEL ECOSYSTEM

          </p>





          <h1>

            Book Your Perfect Stay.

            <br />

            <span>
              Grow Your Hotel.
            </span>

          </h1>





          <p className="description">

            StayWise AI is an intelligent hotel ecosystem that helps guests
            discover and book the perfect stay while empowering hotel owners
            with AI-powered booking management, dynamic pricing,
            housekeeping automation, inventory tracking, and real-time
            business analytics.

          </p>





          <div className="hero-buttons">



            {/* GET STARTED */}

            <button

              className="start-btn"

              onClick={() =>
                scrollToSection("journey")
              }

            >

              Get Started

            </button>





            {/* DISCOVER PLATFORM */}

            <button

              className="discover-btn"

              onClick={() =>
                scrollToSection("features")
              }

            >

              Discover StayWise AI

            </button>



          </div>



        </div>



      </div>



    </section>

  );

}


export default Hero;