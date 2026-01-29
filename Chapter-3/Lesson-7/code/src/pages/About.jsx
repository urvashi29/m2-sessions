import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <p>Banner</p>
      <h2>Our Team</h2>
      <p>Vision & Mission</p>
      <h2>Why Us?</h2>
      About
      <p>
        If you have any queries, <Link to="/contact-us">Click here</Link>
      </p>
    </>
  );
};

export default About;
