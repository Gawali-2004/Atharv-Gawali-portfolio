import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [expanded, setExpanded] = useState(false); // ✅ manage toggle state
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
        color: "white",
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .nav-link {
          color: white !important;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #66d9ef !important;
          transform: scale(1.1);
        }
        .custom-toggle-icon {
          color: white;
          font-size: 24px;
        }
        .navbar {
          transition: top 0.3s ease; /* Smooth transition for navbar */
        }
        .hide-navbar {
          top: -100px; /* Move navbar out of view */
        }
        .show-navbar {
          top: 0; /* Bring navbar back into view */
        }
      `}</style>

      <Navbar
        expand="lg"
        sticky="top"
        className={`px-3 shadow ${showNavbar ? "show-navbar" : "hide-navbar"}`}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          background: "rgba(15,32,39,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold text-white">
            Atharv Gawali
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)}
          >
            <FaBars className="custom-toggle-icon" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" onClick={() => setExpanded(false)}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
              <Nav.Link href="#experience" onClick={() => setExpanded(false)}>
                Experience
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sections */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
