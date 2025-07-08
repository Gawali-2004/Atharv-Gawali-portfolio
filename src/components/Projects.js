// src/components/Projects.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "TextUtils",
      desc: "TextUtils  is  a word  counter and character counting utility which can be  used  to  manipulate your  text  in  the way you want. You can remove  extra spaces, copy  the manipulated text  as  well  as  convert your  text  to  uppercase to  lowercase and lowercase to  uppercase",
      github: "https://github.com/Gawali-2004/my-app",
      website: "https://gawali-2004.github.io/my-app//",
      tech: ["React", "Bootstrap", "JavaScript", "HTML", "CSS-5"],
    },
    {
      title: "To-Do List",
      desc: "Users are able to add, edit or remove tasks and mark tasks as complete, making it manageable to track daily tasks and staying organized. It uses the browser's localStorage in order to ensure that persisted tasks remain in your tasks, through refreshing the page or closing your browser.",
      github: "https://github.com/Gawali-2004/To-Do-List",
      website: "https://todo-list-atharv.netlify.app/",
      tech: ["HTML", "CSS-5", "JavaScript"],
    },
    {
      title: "News App-Voxify",
      desc: "This News App is a real-time news application that works with the News API to get accurate and real-time news data for various categories. The app features core news functionalities and allows for category filtering in order to help users see news articles based on the relevant field such as General, Technology, and Health.",
      github: "https://github.com/Gawali-2004/NewsApp",
      website: "https://newsapp-atharv.netlify.app/",
      tech: ["React", "Bootstrap", "JavaScript", "API", "NewsAPI", "HTML"],
    },
  ];

  return (
    <div
      id="projects"
      style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
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
          Projects
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

        <Row className="g-4 mt-4">
          {projectData.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className="project-card bg-dark text-white border-light h-100 shadow-lg"
                  style={{
                    borderRadius: "20px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Card.Body>
                    <Card.Title className="fs-4">{project.title}</Card.Title>
                    <Card.Text>{project.desc}</Card.Text>

                    <div className="mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="badge bg-secondary me-2"
                          style={{
                            borderRadius: "12px",
                            fontSize: "0.8rem",
                            padding: "6px 12px",
                            marginBottom: "6px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-3 flex-wrap">
                      {project.website && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="me-1" /> Visit Site
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
