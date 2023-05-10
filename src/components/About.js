import React from "react";
import Me from '../me.jpeg'


const About = () => {
    return (
      <div className="about-page">
        <div className="heading"><h3>About Me</h3></div>
        
        <div className="about-section">
        <p className="about-page-bio">
        Well, hello there! I'm the developer behind this website, but when I'm not tinkering with code, you can usually find me getting my hands dirty in the garden or crafting up a storm.
        And let's not forget about my love for Dungeons & Dragons – nothing beats an evening of slaying dragons with friends (or sometimes playing as the dragon myself). But when it comes to my professional life, I take things just as seriously as I do my hobbies. I love finding elegant solutions to complex problems and am always striving to learn and grow as a developer. So whether you're here to check out my portfolio or chat about D&D, I'm always up for a good adventure!
        </p>
        <img src={Me} alt="picture of Presley" className="about-page-pic"/>
        </div>
        <h3 className="about-page-skills-heading">Inventory</h3>
        <div className="buttons-list">
          <button className="skills-button" type="button">Experience</button>
          <button className="skills-button" type="button">Skills</button>
          <button className="skills-button" type="button">Courses</button>
          <button className="skills-button" type="button">Other</button>
        </div>
      </div>
    )
  };
  

  export default About;