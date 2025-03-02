import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import "../navigation.css"; // Custom CSS file for the navbar
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import { Link as ScrollLink } from "react-scroll";
const Navbar = ({ navbar }) => {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (navbar) {
            setLinks(navbar);
        }
    }, [navbar]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };
    

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo" />
                <span className="company-name">PETRI & CERAMICS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
                {links.map((item) => (
                    <a key={item.id} href={item.link} className="nav-link">
                        {item.title}
                    </a>
                ))}
            </div>

            {/* Right Section - Cart, Buttons */}
            <div className="right-section">
                <FaShoppingBag className="cart-icon" />
                <button className="signup-btn">Sign Up</button>
                <button className="signin-btn">Sign In</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="mobile-toggle">
                <button onClick={toggleMenu}>
                    {menuOpen ? <HiX className="menu-icon" /> : <HiMenu className="menu-icon" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="mobile-menu-content">
                    {links.map((item) => (
                        <a key={item.id} href={item.link} className="mobile-nav-link">
                            {item.title}
                        </a>
                    ))}
                    <FaShoppingBag className="cart-icon" />
                    <button className="mobile-signup-btn">Sign Up</button>
                    <button className="mobile-signin-btn">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
