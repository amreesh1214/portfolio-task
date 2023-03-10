
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Email: amreeshchouhan128@gmail.com</p>
      <p>Phone: (+91) 9790986669 </p>
      <div className="links">
      <a href="https://docs.google.com/document/d/15s_HYhNwjMG_T4vYlCY-vtMb1d_M6eJb/edit?usp=sharing&ouid=100781893491967336062&rtpof=true&sd=true" target="_blank" rel="noreferrer">
          Resume
        </a>
        
        <a href="https://github.com/amreesh1214" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        
      </div>
    </div>
  );
}

export default Contact;
