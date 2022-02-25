import React from 'react';
import Project from './Project';
import './Projects.css';
import CalculatorImg from './Images/Calculator.jpg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've worked on. 
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Calculator."
            img={CalculatorImg}
            tech="js react css"
            link="https://codepen.io/digantsharma1998/pen/dyVdJBo"
            repo="https://github.com/digantsharma1998/calcultor"
          >
            <small>Built using React and CSS.</small>
            <p>A project on which I built a virtual calculator with its usual features.</p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;