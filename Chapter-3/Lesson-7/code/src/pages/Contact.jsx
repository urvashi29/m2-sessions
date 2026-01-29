import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/products");
  }, 2000);

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
