import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-part-1">
      <h4>SRM University, Andhra Pradesh</h4>
         <p>Neerukonda, Mangalagiri Mandal <br></br>Guntur District,
             Mangalagiri, Andhra Pradesh 522240</p>
      </div>

      <div className="footer-part-2">
        <h4>Contact Us</h4>
        <h7>Name 1: +91 XXXXXXXXXX</h7>
        <br></br>
        <h7>Name 2: +91 XXXXXXXXXX</h7>
      </div>

      <div className="footer-part-3">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/SRMUAP/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/SRMUAP" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/srmuap.infinitus/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;