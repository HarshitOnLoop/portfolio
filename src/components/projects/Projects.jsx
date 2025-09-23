import React from "react";
import "./Projects.css"; // Make sure your CSS is in this file

function Projects() {
  return (
    <div className="projetsection">
      <img src="macbook.png" className="laptop" alt="Laptop" />

      <div className="projects">
        <div className="paper">
          <div className="pin">
            <div className="shadow"></div>
            <div className="metal"></div>
            <div className="bottom-circle"></div>
          </div>
          <h1>projects</h1>
        </div>
      </div>

      <div className="cards-wrapper">
        {[
          { id: 1, img: "img/1.png", title: "Project 1", desc: "A short description about project 1." },
          { id: 2, img: "img/2.png", title: "Project 2", desc: "A short description about project 2." },
          { id: 3, img: "img/3.png", title: "Project 3", desc: "A short description about project 3." },
          { id: 4, img: "img/4.png", title: "Project 4", desc: "A short description about project 4." },
          { id: 5, img: "img/5.png", title: "Project 5", desc: "A short description about project 5." },
          { id: 6, img: "img/6.png", title: "Project 6", desc: "A short description about project 6." },
          { id: 7, img: "img/7.png", title: "Project 7", desc: "A short description about project 7." },
          { id: 8, img: "img/8.png", title: "Project 8", desc: "A short description about project 8." },
          { id: 9, img: "img/9.png", title: "Project 9", desc: "A short description about project 9." },
        ].map((project) => (
          <div key={project.id} id={`card${project.id}`} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-front">
                <img src={project.img} alt={project.title} />
                <p className="flip-title">{project.title}</p>
                <p className="flip-desc">{project.desc}</p>
              </div>
              <div className="flip-back">
                <p className="flip-title">More Info</p>
                <p>Details about {project.title.toLowerCase()} go here.</p>
                <div className="btn-group">
                  <button>Demo</button>
                  <button>Code</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blankspace"></div>
    </div>
  );
}

export default Projects;
