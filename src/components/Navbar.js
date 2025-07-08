import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      // Show navbar when scrolling up or at top of page
      setVisible(scrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      {/* Permanent Border Resume Button */}
      <a href="/path-to-resume.pdf" id="resume-button" download>
        Download Resume
      </a>
    </>
  );
};

export default Navbar;
