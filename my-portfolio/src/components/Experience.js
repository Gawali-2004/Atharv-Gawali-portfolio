// src/components/Experience.js
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Experience = () => (
  <div
    id="experience"
    style={{
      padding: "60px 0",
      background: "linear-gradient(135deg, #3a3d40, #181719)",
      color: "white",
    }}
  >
    <Container>
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{ fontSize: "2.5rem" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience & Certifications
        <div
          style={{
            height: "4px",
            width: "80px",
            margin: "8px auto 0",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          }}
        ></div>
      </motion.h2>

      <motion.ul
        className="mx-auto"
        style={{ maxWidth: "700px", fontSize: "1.1rem", lineHeight: "1.8" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <li><strong>Frontend Developer Intern</strong> – InternPe (Jan–Feb 2025)</li>
        <li><strong>Smart India Hackathon 2023</strong> – Finalist (Software Edition)</li>
        <li><strong>Data  Analytics Internship  program </strong>Deloitte virtual Internship  program </li>
      </motion.ul>
    </Container>
  </div>
);

export default Experience;
