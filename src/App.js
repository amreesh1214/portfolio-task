import React, { useState } from 'react';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';


function App() {
  const [activeLink, setActiveLink] = useState('Home');

  const renderContent = () => {
    switch (activeLink) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      {renderContent()}
    </div>
  );
}

export default App;
