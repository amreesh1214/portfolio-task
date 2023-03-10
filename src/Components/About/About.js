import React from "react";
import './About.css';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        My name is Amreesh  and I'm a Full Stack developer based based in chennai.
        I've been building websites and applications for over 1 year and I'm
        passionate about creating clean, efficient, and scalable code.
      </p>
      <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skillset">
        <div className="skill">
          <h3 className="skill-title">Web Development</h3>
          <p className="skill-desc">
            HTML, CSS, JavaScript, React, Node.js, MongoDB
          </p>
        </div>
        {/* <div className="skill">
          <h3 className="skill-title">Programming Languages</h3>
          <p className="skill-desc">Java, Python, C++</p>
        </div>
        <div className="skill">
          <h3 className="skill-title">Other Skills</h3>
          <p className="skill-desc">
            Git, GitHub, Agile Development, UI/UX Design
          </p> */}
        {/* </div> */}
      </div>
    </section>
      
    </div>
  );
}

export default About;
