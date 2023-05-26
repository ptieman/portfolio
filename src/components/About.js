import React from "react";
import { useState, useEffect } from "react";
import Me from '../me.jpeg'

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('experience');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

  useEffect(() => {
    setSelectedCategoryItems(getSelectedCategoryItems(selectedCategory));
    setSelectedItem(getSelectedCategoryItems(selectedCategory)[0]);
  }, []);

  const handleCategorySelect = (categoryOrItem) => {
    if (typeof categoryOrItem === 'string') {
      setSelectedCategory(categoryOrItem);
      const items = getSelectedCategoryItems(categoryOrItem);
      setSelectedCategoryItems(items);
      setSelectedItem(items[0]);
    } else {
      setSelectedItem(categoryOrItem);
    }
  };
  const experienceItems = [
    { name: 'Getty Images', description: 'Developed responsive and user-friendly web applications using React, Ruby on Rails, and SCSS, following industry best practices and coding standards. Implemented efficient front-end solutions, optimized for performance and scalability, resulting in enhanced website loading speeds and improved overall user engagement. Conducted comprehensive testing and debugging, utilizing testing frameworks such as Jest and Rack to ensure high code quality and robustness' },
    { name: 'Open Source - EddieHub', description: 'Added new features and functionality, adhering to best coding practices and standards, resulting in increased project usability and user engagement. Participated in community discussions, contributing ideas and insights to project roadmaps and strategies, and engaging in constructive discussions on technical topics, contributing to the overall growth and development of the project'
    }
  ];

  const skillsItems = [
    { name: 'Languages', description: 'Python | Javascript | HTML | CSS | SCSS | Ruby on Rails' },
    { name: 'Frameworks/Databases', description: 'Flask | Django | React | PostgreSQL | MySQL' },
    { name: 'Other', description: 'CI/CD | Jest | ESLINT | Git | Docker | Splunk | Grafana | Github | Gitlab | Agile | TDD | Rack' },
  ];

  const coursesItems = [
    { name: 'SASS - The Complete SASS Course', description: 'Learned hands-on while building multiple projects using SASS - COMPLETED' },
    { name: 'OpenAI', description: 'Used OpenAI to build intelligent applications and solutions using Python that can understand and respond to human language, (natural language processing,) generate text, perform sentiment analysis. IN PROGRESS' },
    // { name: 'Course 3', description: 'Some courses description for Course 3' },
  ];

  // const otherItems = [
  //   { name: 'Item 1', description: 'Some other description for Item 1' },
  //   { name: 'Item 2', description: 'Some other description for Item 2' },
  //   { name: 'Item 3', description: 'Some other description for Item 3' },
  // ];

  const getSelectedCategoryItems = (category) => {
    switch (category) {
      case 'experience':
        return experienceItems;
      case 'skills':
        return skillsItems;
      case 'courses':
        return coursesItems;
      // case 'other':
      //   return otherItems;
      default:
        return [];
    }
  };

  

    return (
      <div className="about-page">
        <div class="heading"><h3>About Me</h3></div>

        <div className="about-section">
          <div className="dice"><i class='fas fa-dice-d20 fa-spin fa-pulse fa-5x'></i></div>
        
        <p className="about-page-bio">
        Well, hello there! I'm Presley. When I'm not tinkering with code, you can usually find me getting my hands dirty in the garden or crafting up a storm.
        I have a deep love for Dungeons & Dragons – nothing beats an evening of dungeon crawling and dragon slaying with loved ones. But when it comes to my professional life, I take things just as seriously as I do my hobbies. I love finding elegant solutions to complex problems and am always striving to learn and grow as a developer. So whether you're here to check out my portfolio or chat about D&D, I'm always up for a good adventure!
        </p>
        
        <img src={Me} alt="picture of Presley" className="about-page-pic"/>
        <div className="dice"><i class='fas fa-dice-d20 fa-spin fa-pulse fa-5x'></i></div>
        </div>
        <div className="inventory">
        <div className="left-column">
        <button onClick={() => handleCategorySelect('experience')} className={selectedCategory === 'experience' ? 'selected' : ''}>
          Experience
        </button>
        <button onClick={() => handleCategorySelect('skills')} className={selectedCategory === 'skills' ? 'selected' : ''}>
          Skills
        </button>
        <button onClick={() => handleCategorySelect('courses')} className={selectedCategory === 'courses' ? 'selected' : ''}>
          Courses
        </button>
        {/* <button onClick={() => handleCategorySelect('other')} className={selectedCategory === 'other' ? 'selected' : ''}>
          Education
        </button>     */}
      </div>
      <div className="middle-column">
  {selectedCategoryItems.map((item) => (
    <button
      key={item.name}
      onClick={() => handleCategorySelect(item)}
      className={selectedItem === item ? 'selected' : ''}
    >
      {item.name}
    </button>
  ))}
</div>
<div className="right-column">
{selectedItem ? <p>{selectedItem.description}</p> : null}
</div>
  </div>
    </div>
    )
  };
  

  export default About;