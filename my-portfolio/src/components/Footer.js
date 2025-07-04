import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../App.css";                      // keeps all styles centralised

const Footer = () => {
  const year = new Date().getFullYear(); // always current year

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <p className="mb-3">
          © {year} Atharv Gawali &nbsp;|&nbsp; Powered by React & Bootstrap
        </p>

        <div className="footer-icons">
          <a
            href="https://linkedin.com/in/atharv-gawali-b85676275"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/Gawali-2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:atharvgawali.comp@siem.org.in"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
