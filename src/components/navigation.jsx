import React from "react";
import { FaSignInAlt } from "react-icons/fa"; // Import the login icon
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import { Link } from "react-router-dom"; // Import Link from react-router-dom for page navigation

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* This is for internal smooth scrolling */}
          <ScrollLink
            to="page-top"
            smooth={true}
            duration={500}
            className="navbar-brand page-scroll"
          >
            Zagora Desert Tour
          </ScrollLink>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Use react-scroll Link for smooth scrolling */}
            <li>
              <ScrollLink to="features" smooth={true} duration={500} className="page-scroll">
                Excursions
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="page-scroll">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="page-scroll">
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="testimonials" smooth={true} duration={500} className="page-scroll">
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="team" smooth={true} duration={500} className="page-scroll">
                Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="page-scroll">
                Contact
              </ScrollLink>
            </li>
            {/* Use react-router-dom Link for the Login page */}
            <li>
              <Link to="/login" className="page-scroll">
                <FaSignInAlt style={{ marginRight: "5px" }} />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
