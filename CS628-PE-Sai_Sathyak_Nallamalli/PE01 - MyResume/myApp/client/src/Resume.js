import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <header className="header">
        <h1>Sai Sathyak Nallamalli</h1>
        <p>
          8935 160th NE Ave, Redmond, Washington, 98052 | 206-396-9970 | 
          saisathyak06.ssk@gmail.com
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Computer Science</h3>
          <p>City University of Seattle, Washington | Jan 2024</p>
          <p>GPA: 4.0/4.0</p>

          <h3>Bachelor of Computer Science</h3>
          <p>ACE Engineer College </p>
          <p>GPA: 9.0/10</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <p>HTML, CSS, Python, Excel</p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <h3>Software Engineer</h3>
        <p>ESPIRE INFO LABS PVT LTD</p>
        <ul>
          <li>
            Developed and maintained scalable microservices and API-driven communication templates
            using SmartCOMM, resulting in a 25% improvement in message delivery efficiency.
            Integrated Thunderhead orchestration workflows for dynamic user interactions across web andmobile platforms.
          </li>
          <li>
            Conducted rigorous manual and automated testing, wrote unit test cases using Python, andcollaborated with QA engineers to ensure cross-platform reliability.
            Designed and implemented internal tools that reduced ticket resolution time by 30%, enhancingIT support efficiency and user satisfaction.
            Participated in Agile sprints, contributed to daily stand-ups, sprint planning, and retrospectives
          </li>
          
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Virtual Mouse Using Webcam Developed a gaze-controlled navigation system using Python,
           OpenCV, and gesture recognition for improved accessibility.</h3>
          <h3>Smart Healthcare Kit (QUEPILL) Engineered an IoT-based medication reminder system with realtime SMS alerts, enhancing eldercare tracking</h3>
        </div>
      </section>
    </div>
  );
};

export default Resume;