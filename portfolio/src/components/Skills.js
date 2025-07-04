import React from 'react';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import jsLogo from '../assets/javascript.png';
import pythonLogo from '../assets/python.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import gitLogo from '../assets/git.png';

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Git', logo: gitLogo },
];

function Skills() {
  return (
    <section id="skills" className="py-5 text-center">
      <h2 className="mb-4 fw-bold">Skills</h2>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-6 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="img-fluid"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
                <span className="mt-2 fw-semibold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
