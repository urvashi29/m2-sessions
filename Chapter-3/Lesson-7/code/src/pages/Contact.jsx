import React from "react";
import Card from "../components/Card";

const Contact = () => {
  return (
    <>
      <Card email="admin@gmail.com" bgColor="pink" flag="contact" />
      <p className="text-red-400">Contact US: +9100000000</p>
      <p>Address</p>
      <p>Google map api integration</p>
      <h2>Contact Us</h2>
    </>
  );
};

export default Contact;
