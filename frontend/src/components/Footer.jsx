import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= BRAND ================= */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="logo-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h2>
              StayWise AI
            </h2>

          </div>

          <p>
            Smart Hotel Ecosystem powered by AI.
            Transforming guest experiences with
            intelligent automation.
          </p>

        </div>





        {/* ================= PRODUCT ================= */}

        <div className="footer-column">

          <h3>
            Product
          </h3>

          <ul>

            <li>
              <a href="#features">
                Features
              </a>
            </li>

            <li>
              <a href="/dashboard">
                Dashboard
              </a>
            </li>

            <li>
              <a href="/ai">
                AI Assistant
              </a>
            </li>

            <li>
              <a href="#">
                Integrations
              </a>
            </li>

          </ul>

        </div>






        {/* ================= COMPANY ================= */}

        <div className="footer-column">

          <h3>
            Company
          </h3>

          <ul>

            <li>
              <a href="/about">
                About Us
              </a>
            </li>

            <li>
              <a href="#">
                Careers
              </a>
            </li>

            <li>
              <a href="#">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#">
                Partners
              </a>
            </li>

          </ul>

        </div>






        {/* ================= RESOURCES ================= */}

        <div className="footer-column">

          <h3>
            Resources
          </h3>

          <ul>

            <li>
              <a href="#">
                Blog
              </a>
            </li>

            <li>
              <a href="#">
                FAQ
              </a>
            </li>

            <li>
              <a href="#">
                Documentation
              </a>
            </li>

            <li>
              <a href="#">
                Help Center
              </a>
            </li>

          </ul>

        </div>






        {/* ================= CONTACT ================= */}

        <div className="footer-column">

          <h3>
            Contact
          </h3>

          <ul className="contact-list">

            <li>
              <Mail size={17}/>
              hello@staywise.ai
            </li>

            <li>
              <Phone size={17}/>
              +91 98765 43210
            </li>

            <li>
              <MapPin size={17}/>
              Mumbai, India
            </li>

            <li>
              <FaLinkedin size={17}/>
              linkedin.com/in/staywiseai
            </li>

            <li>
              <FaInstagram size={17}/>
              @staywise.ai
            </li>

          </ul>

        </div>

      </div>







      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="footer-line"></div>

        <div className="footer-bottom-content">

          <p>

            © 2026 <strong>StayWise AI</strong>. All Rights Reserved.

          </p>

          <p className="developer-credit">

            Designed &amp; Developed by

            <span> Sakshi Mahadik</span>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;