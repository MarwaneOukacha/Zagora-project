import { FaSignInAlt, FaUserPlus } from "react-icons/fa" // Import login and signup icons
import { Link, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import logo from "../assets/logo.png";
import "../navigation.css"

export const Navigation = (props) => {
  const location = useLocation()

  // Helper function to conditionally render links
  const renderLink = (to, label) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink to={to} smooth={true} duration={500} className="page-scroll">
          {label}
        </ScrollLink>
      )
    } else {
      return (
        <Link to="/" className="page-scroll">
          {label}
        </Link>
      )
    }
  }

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
            {/* Collapse button */}
          </button>

          {/* Conditionally render ScrollLink or Link for the brand logo */}
          {location.pathname === "/" ? (
            <ScrollLink to="page-top" smooth={true} duration={500} className="navbar-brand page-scroll">
              <img src={logo} alt="Company Logo" className="logo-img" />
              <span className="company-name">Petri Handcrafted Ceramics</span> {/* Company name */}
            </ScrollLink>
          ) : (
            <Link to="/" className="navbar-brand page-scroll">
              <img src={logo} alt="Company Logo" className="logo-img" />
              <span className="company-name">Petri Handcrafted Ceramics</span> {/* Company name */}
            </Link>
          )}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>{renderLink("features", "Excursions")}</li>
            <li>{renderLink("about", "About")}</li>
            <li>{renderLink("services", "Services")}</li>
            <li>{renderLink("testimonials", "Testimonials")}</li>
            <li>{renderLink("team", "Team")}</li>
            <li>{renderLink("contact", "Contact")}</li>
            {/* Use react-router-dom Link for the Login and Signup pages */}
            <li>
              <Link to="/login" className="page-scroll">
                <FaSignInAlt style={{ marginRight: "5px" }} />
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="page-scroll">
                <FaUserPlus style={{ marginRight: "5px" }} />
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
