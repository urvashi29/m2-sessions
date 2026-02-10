import React from "react";

const index = () => {
  
  const throttle = () => {
  }

  const debounce = () => {
  }

  const handleChange = () => {};

  return (
    <>
      <input onChange={debounce(handleChange, 1000)} />
      <input onChange={throttle(handleChange, 1000)} />
    </>
  );
};

export default index;
