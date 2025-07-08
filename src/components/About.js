// src/components/About.js
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => (
  <div
    id="about"
    style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden",
      zIndex: 1,
      padding: "80px 20px 100px",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      color: "white",
    }}
  >
    <Container>
      <motion.h2
        className="fw-bold mb-4"
        style={{ fontSize: "2.75rem", letterSpacing: "0.5px" }}
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
            margin: "10px auto 0",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #66d9ef, #6a11cb)",
          }}
        ></div>
      </motion.h2>

      <motion.p
        className="mx-auto"
        style={{
          maxWidth: "750px",
          fontSize: "1.15rem",
          lineHeight: "1.8",
          textAlign: "center",
          marginBottom: "40px",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
     
        <strong>I'm a dedicated Computer Engineering student passionate about frontend development.</strong>
          I specialize in building responsive and scalable web applications using <strong>React</strong>,  <strong>JavaScript</strong>, and  <strong>Bootstrap</strong>.
        As a finalist in the  <strong>Smart India Hackathon 2023</strong>, I thrive in team environments where I can turn creative ideas
        into functional interfaces. I'm open to internships and freelance work to grow my skills and contribute to
        impactful projects.
      </motion.p>
    </Container>
  </div>
);

export default About;
