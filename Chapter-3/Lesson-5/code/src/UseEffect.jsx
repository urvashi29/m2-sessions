import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("alex");

  let el = document.createElement("div");
  el.textContent = "Hello";

  //  componentDidMount(): If dependency array is empty, then it is called only once on initial render
  useEffect(() => {
    console.log("initial render");
    document.querySelector("body").appendChild(el);
  }, []);

  // componentDidUpdate():  If dependency array has state variable, whenever is update, it is called
  //   useEffect(() => {
  //     console.log("name is updated");
  //     // api call & post request
  //   }, [name]);

  //   If no array is there, then it is on every render
  //   useEffect(() => {
  //     console.log("on every render");
  //   });

  //   componentWillUmount()
  useEffect(() => {
    return () => {
      console.log("element is removed");
      el.remove();
      //   el.removeEventListener();
      //   clearTimeout(id);
      //   clearInterval(id);
    };
  }, [name]);

  return (
    <>
      <p>{name}</p>
      <button onClick={() => setName("alaya")}>Update Name</button>
    </>
  );
};

export default UseEffect;
