import React from 'react';
import './Navbar.css';

function Navbar(props) {
  const { activeLink, setActiveLink } = props;

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      
          <button
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleClick('Home')}
          >
            Home
          </button>
        
          <button
            className={activeLink === 'About' ? 'active' : ''}
            onClick={() => handleClick('About')}
          >
            About
          </button>
        
        
          <button
            className={activeLink === 'Portfolio' ? 'active' : ''}
            onClick={() => handleClick('Portfolio')}
          >
            Portfolio
          </button>
        
          <button
            className={activeLink === 'Contact' ? 'active' : ''}
            onClick={() => handleClick('Contact')}
          >
            Contact
          </button>
        
    </nav>
  );
}

export default Navbar;
