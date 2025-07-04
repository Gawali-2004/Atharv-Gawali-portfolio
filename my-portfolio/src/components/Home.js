import React from "react";
import { Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    id="home"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
      padding: "100px 0",
      background: "linear-gradient(135deg, #141e30, #243b55)",
      textAlign: "center",
    }}
  >
    <Container>
      <h1
        className="display-4 text-white fw-bold mb-3"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "1px" }}
      >
        Hi, I'm <strong>Atharv Gawali</strong>
      </h1>
      <p className="lead text-white mb-4" style={{ fontSize: "1.25rem" }}>
        Frontend Developer | React Enthusiast | Open to Work
      </p>
      <a
        href="/Atharv_s_Resume.pdf"
        download
        className="btn btn-outline-light mt-3 d-inline-flex align-items-center"
        style={{
          border: "2px solid #66d9ef",
          padding: "10px 20px",
          borderRadius: "30px",
          fontWeight: "500",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#66d9ef";
          e.currentTarget.style.color = "#141e30";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FaDownload className="me-2" />
        <span>Download Resume</span>
      </a>
    </Container>
  </motion.div>
);

export default Home;
