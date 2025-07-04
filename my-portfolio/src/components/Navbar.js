import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // or simple <a> if no routing is used

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${showNavbar ? "show-navbar" : "hide-navbar"}`}>
      <Link to="#home">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#skills">Skills</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#experience">Experience</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
