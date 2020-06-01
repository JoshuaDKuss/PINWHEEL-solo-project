import React from 'react';
import './AboutPage.css';
// import logo from '..public/images/logo.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div className="card">
      <p>
      As the father of 2 young girls, I wanted to make an app that was more 
      detailed than Google Maps, regarding playground info. We spend all
      summer at playgrounds, and my aim is to bring a sense of whimsy to 
      this app, harkening back to my own childhood in the 1980's.</p><br/>
      {/* <img src={logo} id="logo" alt="logo" /> */}
      <p>
      Why name it “Pinwheel”? Pinwheels, in Chinese culture, represent 
      “childhood innocence”, “unseen energy” and “spiritual freedom”. 
      Sounds like a playground to me!
      </p>
      <p>ENJOY!</p><br/>
      <p>JOSH from North Saint Paul</p>
    </div>
  </div>
);

export default AboutPage;
