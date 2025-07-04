import React from "react";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import About from "./components/About";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 15s ease infinite",
      color: "white",
      paddingBottom: "40px"
    }}>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Atharv Gawali</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <About />
    </div>
  );
}

export default App;