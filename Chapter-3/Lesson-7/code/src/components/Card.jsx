import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, email, bgColor, flag }) => {
  return (
    <div style={{ backgroundColor: bgColor, color: "white" }}>
      {/* <p>
        <Link to={"/products/" + product.id}>{product?.title}</Link>
      </p> */}
      <p>{email && <p>Email: {email}</p>}</p>
    </div>
  );
};

export default Card;
