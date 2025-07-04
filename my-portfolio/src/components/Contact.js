import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../App.css";          // ← keeps the new styles in one place

const Contact = () => (
  <section id="contact" className="contact-section">
    <Container className="text-center">
      {/* ─── Heading ─── */}
      <motion.h2
        className="fw-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
        <div className="section-underline"></div>
      </motion.h2>

      {/* ─── Info ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:atharvgawali.comp@siem.org.in">
            atharvgawali.comp@siem.org.in
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +91 8010372615
        </p>

        {/* ─── Social Icons ─── */}
        <div className="contact-icons">
          <a
            href="https://linkedin.com/in/atharv-gawali-b85676275"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Gawali-2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="mailto:atharvgawali.comp@siem.org.in"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
      </motion.div>
    </Container>
  </section>
);

export default Contact;
