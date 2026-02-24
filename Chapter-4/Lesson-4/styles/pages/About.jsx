import React from "react";
import styled from "styled-components";

const About = () => {
  const Button = styled.button`
    background-color: orange;
    color: white;
    font-size: 16px;
    padding: 10px 6px;
    &:hover {
      background-color: blue;
    }
    ${(props) => {
        console.log(props);
      if (props.primary) {
        return `background-color: pink`;
      }
    }}
  `;

  const HeadingTwo = styled.h2`
    color: palevioletred;
    font-weight: bold;
  `;

  return (
    <>
      <Button primary>Click me</Button>
      <HeadingTwo>Welcome</HeadingTwo>
    </>
  );
};

export default About;
