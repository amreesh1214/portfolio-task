import React from 'react';
import './Home.css';
import logo from  '../../Assets/logo.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to my portfolio website!</h1>
      <p>My name is Amreesh  and I'm a FULL STACK DEVELOPER</p>
      <img src={logo} alt='logo' width="70%"/>
    
      
    </div>
    
  );
}

export default Home;
