import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    id="home"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
      minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    color: "white",
    background: "linear-gradient(135deg, #141e30, #243b55)", // Only gradient
   
    }}
  >
    <h1
      className="display-4 text-white fw-bold mb-3"
      style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
    >
      Hi, I'm <strong>Atharv Gawali</strong>
    </h1>
    <p className="lead text-white mb-4" style={{ fontSize: "1.25rem" }}>
      Frontend Developer | React Explorer | Open to Work
    </p>
    <a
      href="/Atharv_s_Resume.pdf"
      download
      className="btn btn-outline-light mt-3"
      style={{
        border: "2px solid #66d9ef",
        padding: "10px 20px",
        borderRadius: "30px",
        fontWeight: "500",
        transition: "all 0.3s ease",
        color: "#66d9ef",
        backgroundColor: "transparent",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#66d9ef"; // Light blue background on hover
        e.currentTarget.style.color = "#141e30"; // Dark blue text color on hover
        e.currentTarget.style.border = "2px solid #66d9ef"; // Add border on hover
        e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom effect
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "transparent"; // Reset to transparent
        e.currentTarget.style.color = "#66d9ef"; // Reset text color to light blue
        e.currentTarget.style.border = "2px solid transparent"; // Reset border
        e.currentTarget.style.transform = "scale(1)"; // Remove zoom effect
      }}
    >
      <FaDownload className="me-2" />
      <span>Download Resume</span>
    </a>
  </motion.div>
);

export default Home;
