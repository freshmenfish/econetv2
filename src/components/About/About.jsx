import React from 'react'
import './about.css';
import tree from '../../assets/tree.png';

/* Simple Home Page */
const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <span className="text_one">Save the Environment <text className="green_text">with EcoNet</text></span>
        <span className="text_two">Your impact begins <text className="green_text">here.</text></span>
      </div>
      <img src={ tree } className="tree"/>
    </section>
  )
}

export default About
