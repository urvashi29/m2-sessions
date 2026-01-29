import React from "react";

// High ordered Component
const ColorChanging = (Prospect) => {
  // return a component
  return () => {
    return (
      <div style={{ color: "pink" }}>
        <Prospect />
      </div>
    );
  };
};

export default ColorChanging;
