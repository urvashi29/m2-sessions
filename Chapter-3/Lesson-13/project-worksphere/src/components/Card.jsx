import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-[#F1E9E9] border border-[#E491C9] rounded-lg p-4 shadow-sm hover:shadow-md transition">
      {children}
    </div>
  );
};

export default Card;
