import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setVisible(scrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
        <a href="#home" className="navbar-logo-link">
          <img
            src={logo}
            alt="ASG Logo"
            className="navbar-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "default-logo.png";
            }}
          />
          <span className="navbar-name">Atharv Gawali</span>
        </a>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#experience" className="nav-link" onClick={handleLinkClick}>
            Experience
          </a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </nav>

      {/* Permanent Resume Button */}
      <a href="/path-to-resume.pdf" id="resume-button" download>
        Download Resume
      </a>
    </>
  );
};

export default Navbar;
