import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Removed to avoid build error. Ensure styles are added inline or in public CSS files.
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

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

      <Container id="home" className="mt-5 text-center">
        <h1 className="display-4 text-white">Hello, I'm <strong>Atharv Gawali</strong></h1>
        <p className="lead text-white">B.E. Computer Engineering | React Developer | Open to Opportunities</p>
        <a href="/Atharv_Gawali-1.pdf" download className="btn btn-outline-light mt-3">
          <FaDownload className="me-2" />Download Resume
        </a>
      </Container>

      <Container id="about" className="mt-5">
        <h2>About Me</h2>
        <p>
          I'm a dedicated Computer Engineering student passionate about frontend development. I love creating interactive and responsive web apps using React, Bootstrap, and modern JavaScript tools. As a Smart India Hackathon 2023 finalist, I value teamwork and problem-solving in tech.
        </p>
      </Container>

      <Container id="skills" className="mt-5">
        <h2>Technical Skills</h2>
        <Row>
          <Col md={6}>
            <ul>
              <li><strong>Languages:</strong> Python, C++, JavaScript, SQL, HTML/CSS</li>
              <li><strong>Frameworks:</strong> React, Bootstrap</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul>
              <li><strong>Libraries:</strong> pandas, NumPy, Matplotlib</li>
              <li><strong>Tools:</strong> GitHub, VS Code, Figma</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container id="projects" className="mt-5">
        <h2>Projects</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>TextUtils</Card.Title>
                <Card.Text>
                  A React-based utility app to analyze and transform text: case conversion, space cleanup, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>To-Do List Web App</Card.Title>
                <Card.Text>
                  A responsive JavaScript-based to-do app with add/delete functionality and local storage persistence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="experience" className="mt-5">
        <h2>Experience & Certifications</h2>
        <ul>
          <li><strong>Frontend Developer Intern</strong> – InternPe (Jan–Feb 2025): Developed UI components and static pages using HTML, CSS, and React.</li>
          <li><strong>Smart India Hackathon 2023 – Finalist:</strong> Contributed to building a web platform for government services. Presented the solution at the national level finale.</li>
        </ul>
      </Container>

      <Container id="contact" className="mt-5 text-center">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> atharvgawali.comp@siem.org.in</p>
        <p><strong>Phone:</strong> +91 8010372615</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://linkedin.com/in/atharv-gawali-b85676275" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://github.com/Gawali-2004" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="mailto:atharvgawali.comp@siem.org.in"><FaEnvelope size={30} /></a>
        </div>
      </Container>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        © 2025 Atharv Gawali | Built with React & Bootstrap
      </footer>
    </div>
  );
}

export default App;
