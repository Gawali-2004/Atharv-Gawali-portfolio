// src/components/About.js
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => (
  <div
    id="about"
    style={{
      padding: "70px 20px",  // Adjust padding to ensure there's enough space
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      color: "white",
    }}
  >
    <Container>
      <motion.h2
        className="text-center fw-bold mb-3"
        style={{ fontSize: "2.5rem", letterSpacing: "1px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
        <div
          style={{
            height: "4px",
            width: "80px",
            margin: "8px auto 0",
            marginBottom: "30px",  // Increased margin-bottom for more space
            borderRadius: "5px",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          }}
        ></div>
      </motion.h2>

      <motion.p
        className="mx-auto"
        style={{
          maxWidth: "700px",
          fontSize: "1.15rem",
          lineHeight: "1.8",
          textAlign: "center",
          marginBottom: "50px", // Added space below the paragraph
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I'm a dedicated Computer Engineering student passionate about frontend development.
        I specialize in building responsive and scalable web applications using React, JavaScript, and Bootstrap.
        As a finalist in the Smart India Hackathon 2023, I thrive in team environments where I can turn creative ideas
        into functional interfaces. I'm open to internships and freelance work to grow my skills and contribute to
        impactful projects.
      </motion.p>
    </Container>
  </div>
);

export default About;
