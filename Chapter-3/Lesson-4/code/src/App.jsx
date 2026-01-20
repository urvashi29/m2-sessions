import React, { use, useState } from "react";
import Counter from "./Counter";
import Login from "./Login";

const App = () => {
  // let count = 0; //normal variable

  // [state variable, method to update it] = useState(initial state value)
  const [firstName, setFirstName] = useState("alina"); //string
  const [age, setAge] = useState(20); //number
  const [person, setPerson] = useState({
    name: "alex",
    designation: "Developer",
  }); //object

  const [isLogged, setIsLoggedIn] = useState(false); //boolean
  const [sample, setSample] = useState(null); //null
  const [colors, setColors] = useState(["pink", "purple", "white"]); //array
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "OCOOPA Magnetic Hand Warmers",
      originalPrice: 1000,
      discountPrice: 400,
      description: "Magnetic Hand",
      productImage:
        "https://m.media-amazon.com/images/I/61Bijcj-+bL._AC_SX679_.jpg",
    },
    {
      id: 2,
      productName: "STANLEY Quencher H2.0 Tumbler ",
      originalPrice: 2000,
      discountPrice: 1000,
      description: "Quencher H2.0",
      productImage:
        "https://m.media-amazon.com/images/I/61Bijcj-+bL._AC_SX679_.jpg",
    },
    {
      id: 3,
      productName: "Flower Candle Warmer Lamp",
      originalPrice: 600,
      discountPrice: 200,
      description: "Magnetic Hand",
      productImage:
        "https://m.media-amazon.com/images/I/719sMt6HaEL._AC_SL1500_.jpg",
    },
  ]); //array of objects

  const handleUpdate = () => {
    setAge(24);
    setFirstName("Alaya");
    setIsLoggedIn(true);
    setPerson({ ...person, designation: "Senior Developer" });

    const newProducts = [...products];
    newProducts[0].discountPrice = 500;
    setProducts(newProducts);

    //updating count
    // count = 5;
    // console.log(count);
  };

  return (
    <>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>
        {person.name}, working as {person.designation}
      </p>
      <ul>
        {products.map((product) => {
          return (
            <li>
              {product.productName} | {product.discountPrice}
            </li>
          );
        })}
      </ul>

      <button onClick={handleUpdate}>Update</button>

      {/* Conditional rendering  */}
      {isLogged ? <Counter firstName={firstName} /> : <Login />}
    </>
  );
};

export default App;

// Task
// create a function based component, display and update movie data (array of objects)
