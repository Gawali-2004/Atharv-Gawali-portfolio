// src/components/Projects.js
import React from 'react';

function Projects() {
  const projectList = ['Project One', 'Project Two', 'Project Three'];

  return (
    <div id="projects" className="py-5 bg-light text-center">
      <h2>Projects</h2>
      <div className="container mt-4">
        <div className="row">
          {projectList.map((project, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project}</h5>
                  <p className="card-text">
                    Description for {project}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
