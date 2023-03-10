
import React from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'need to add a project',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com',
  },
 
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Project</h1>
      <div className="portfolio-items">
        {portfolioData.map((item) => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>View project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
