import React from "react";

const Card = ({ product, email, bgColor, flag }) => {
  return (
    <div style={{ backgroundColor: bgColor, color: "white" }}>
      <p>{product?.title}</p>
      <p>{email && <p>Email: {email}</p>}</p>
    </div>
  );
};

export default Card;
