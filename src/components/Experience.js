// src/components/Experience.js
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate, FaLaptopCode } from "react-icons/fa";

const Experience = () => (
  <div
    id="experience"
    style={{
      padding: "80px 20px",
      background: "linear-gradient(135deg, #3a3d40, #181719)",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    <Container>
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{ fontSize: "2.5rem", letterSpacing: "0.5px" }}
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
            margin: "10px auto 0",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #66d9ef, #6a11cb)",
          }}
        ></div>
      </motion.h2>

      <motion.ul
        className="mx-auto"
        style={{
          maxWidth: "750px",
          fontSize: "1.1rem",
          lineHeight: "1.9",
          padding: "0",
          listStyle: "none",
          textAlign: "left",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <li style={{ marginBottom: "25px", display: "flex", gap: "12px" }}>
          <FaBriefcase size={20} color="#66d9ef" style={{ marginTop: "3px" }} />
          <div>
            <strong>Frontend Developer Intern</strong> – <span style={{ color: "#ddd" }}>InternPe</span><br />
            <small style={{ color: "#aaa" }}>January 2025 – February 2025</small>
          </div>
        </li>

        <li style={{ marginBottom: "25px", display: "flex", gap: "12px" }}>
          <FaLaptopCode size={20} color="#66d9ef" style={{ marginTop: "3px" }} />
          <div>
            <strong>Smart India Hackathon 2023 Finalist</strong><br />
            <small style={{ color: "#aaa" }}>National-level, Software Edition</small>
          </div>
        </li>

        <li style={{ display: "flex", gap: "12px" }}>
          <FaCertificate size={20} color="#66d9ef" style={{ marginTop: "3px" }} />
          <div>
            <strong>Deloitte Virtual Internship</strong><br />
            <small style={{ color: "#aaa" }}>Data Analytics Training Program</small>
          </div>
        </li>
      </motion.ul>
    </Container>
  </div>
);

export default Experience;
