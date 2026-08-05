import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChooseJourney from "../components/ChooseJourney";
import BookingCard from "../components/BookingCard";
import FeaturedRooms from "../components/FeaturedRooms";
import Features from "../components/Features";
import HotelSolutions from "../components/HotelSolutions";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import DemoModal from "../components/DemoModal";

import hotelKnowledge from "../data/hotelKnowledge";

function Home() {

  // ================= FEATURED HOTELS =================
  // Only 4 hotels shown on Home page

  const featuredHotels = [
    hotelKnowledge.hotels.find(
      (hotel) => hotel.name === "Sunshine Beach Resort"
    ),

    hotelKnowledge.hotels.find(
      (hotel) => hotel.name === "Jaipur Royal Heritage Palace"
    ),

    hotelKnowledge.hotels.find(
      (hotel) => hotel.name === "Chennai Marina Grand Hotel"
    ),

    hotelKnowledge.hotels.find(
      (hotel) => hotel.name === "Kerala Backwater Grand Resort"
    ),
  ];


  const [rooms, setRooms] = useState(featuredHotels);


  // AI Recommendation
  const [aiRecommendation, setAiRecommendation] = useState(null);


  // Demo popup
  const [showDemo, setShowDemo] = useState(false);



  return (
    <>

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <Hero />



      {/* JOURNEY */}
      <ChooseJourney />



      {/* BOOKING */}
      <section id="booking" className="booking-section">

        <BookingCard
          setRooms={setRooms}
          setAiRecommendation={setAiRecommendation}
        />

      </section>




      {/* FEATURED HOTELS */}

      <section id="rooms">

        <FeaturedRooms
          rooms={rooms}
          aiRecommendation={aiRecommendation}
        />

      </section>





      {/* FEATURES */}

      <Features />




      {/* HOTEL SOLUTIONS */}

      <section id="hotel-section">

        <HotelSolutions />

      </section>





      {/* CTA */}

      <CTASection
        openDemo={() => setShowDemo(true)}
      />





      {/* DEMO MODAL */}

      {
        showDemo && (
          <DemoModal
            closeDemo={() => setShowDemo(false)}
          />
        )
      }





      {/* FOOTER */}

      <Footer />


    </>
  );
}


export default Home;