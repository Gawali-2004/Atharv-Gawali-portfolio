import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import jsLogo from "../assets/js.png";
import pythonLogo from "../assets/python.png";
import cppLogo from "../assets/cpp.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import githubLogo from "../assets/github.png";
import vscodeLogo from "../assets/vscode.png";
import tableauLogo from "../assets/tablaue.png";

const Skills = () => {
  const cardStyle = {
    background: "#1e1e1e",
    border: "1px solid #444",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    marginBottom: "30px",
    color: "white",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
  };

  const iconStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginRight: "12px",
    borderRadius: "8px",
    background: "#fff",
    padding: "6px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  };

  return (
    <div
      id="skills"
      style={{
        paddingTop: "120px", // ✅ push below navbar
        paddingBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        background: "linear-gradient(135deg, #2c5364, #0f2027)",
        color: "white",
        position: "relative",
      }}
    >
      {/* Optional offset for anchor jump */}
      <div
        style={{
          content: "''",
          display: "block",
          height: "80px",
          marginTop: "-80px",
          visibility: "hidden",
        }}
      ></div>

      <Container>
        <motion.h2
          className="text-center fw-bold mb-4"
          style={{ fontSize: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
          <div
            style={{
              height: "4px",
              width: "60px",
              margin: "8px auto 0",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            }}
          ></div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <Card style={cardStyle}>
              <Row>
                <Col md={6}>
                  <h5 className="fw-bold mb-3">Programming</h5>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li style={listItemStyle}>
                      <img
                        src={jsLogo}
                        alt="JavaScript"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #f0db4f, #323330)",
                        }}
                      />
                      JavaScript
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={pythonLogo}
                        alt="Python"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #306998, #FFD43B)",
                        }}
                      />
                      Python
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={cppLogo}
                        alt="C++"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #00599C, #A8B400)",
                        }}
                      />
                      C++
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={htmlLogo}
                        alt="HTML5"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #e34c26, #f06529)",
                        }}
                      />
                      HTML5
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={cssLogo}
                        alt="CSS3"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #264de4, #f06529)",
                        }}
                      />
                      CSS3
                    </li>
                  </ul>
                </Col>

                <Col md={6}>
                  <h5 className="fw-bold mb-3">Frameworks & Tools</h5>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li style={listItemStyle}>
                      <img
                        src={reactLogo}
                        alt="React"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #61DAFB, #20232A)",
                        }}
                      />
                      React
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={bootstrapLogo}
                        alt="Bootstrap"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #7952B3, #563D7C)",
                        }}
                      />
                      Bootstrap
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={githubLogo}
                        alt="GitHub"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #181717, #24292e)",
                        }}
                      />
                      GitHub
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={vscodeLogo}
                        alt="VS Code"
                        style={{
                          ...iconStyle,
                          background: "linear-gradient(135deg, #007ACC, #1E1E1E)",
                        }}
                      />
                      VS Code
                    </li>
                    <li style={listItemStyle}>
                      <img
                        src={tableauLogo}
                        alt="Tableau"
                        style={{
                          ...iconStyle,
                          // background: "linear-gradient(135deg, #E97627, #F5F5F5)",
                          background: 
                          
                          "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                          /* Add subtle animated particles */
                        }}
                      />
                      Tableau
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Skills;
