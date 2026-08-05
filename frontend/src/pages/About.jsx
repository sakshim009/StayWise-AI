import "./About.css";

import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  Brain,
  Hotel,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function About() {

  const navigate = useNavigate();

  return (

    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-badge">
          ✨ ABOUT STAYWISE AI
        </div>

        <h1>
          Reimagining Hotels
          <br />
          <span>
            with Artificial Intelligence
          </span>
        </h1>

        <p>
          StayWise AI is an intelligent hotel ecosystem designed
          to simplify operations, enhance guest experiences,
          and help hotels grow smarter with AI-powered solutions.
        </p>

      </section>





      {/* MISSION */}

      <section className="about-mission">

        <div className="mission-card">

          <Sparkles size={35} />

          <h2>
            Our Mission
          </h2>

          <p>
            Our mission is to transform traditional hospitality
            into a smarter, faster, and more personalized experience
            using artificial intelligence.
          </p>

        </div>





        <div className="mission-card">

          <Brain size={35} />

          <h2>
            AI First Approach
          </h2>

          <p>
            From booking assistance to analytics and automation,
            StayWise AI helps hotels make better decisions
            with real-time intelligence.
          </p>

        </div>

      </section>







      {/* FEATURES */}

      <section className="about-values">

        <h2>
          Why StayWise AI?
        </h2>

        <div className="value-grid">

          <div className="value-card">

            <Hotel />

            <h3>
              Smart Hotel Management
            </h3>

            <p>
              Manage rooms, bookings, services,
              and operations from one platform.
            </p>

          </div>





          <div className="value-card">

            <Users />

            <h3>
              Better Guest Experience
            </h3>

            <p>
              Deliver personalized recommendations
              and instant AI assistance.
            </p>

          </div>





          <div className="value-card">

            <BarChart3 />

            <h3>
              Data Driven Growth
            </h3>

            <p>
              Understand performance with analytics
              and intelligent insights.
            </p>

          </div>





          <div className="value-card">

            <ShieldCheck />

            <h3>
              Secure Platform
            </h3>

            <p>
              Built with reliable technology
              for modern hospitality businesses.
            </p>

          </div>

        </div>

      </section>







      {/* CTA */}

      <section className="about-cta">

        <h2>
          Building the Future of Hospitality
        </h2>

        <p>
          StayWise AI connects hotels, guests,
          and intelligent technology together.
        </p>

        <button
          className="about-btn"
          onClick={() => navigate("/")}
        >
          Explore StayWise AI
        </button>

      </section>

    </div>

  );
}

export default About;