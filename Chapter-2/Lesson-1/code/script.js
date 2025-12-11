// ES5
// "use strict";
// x = 10;
// console.log(x);//get error

// console.log(this);//undefined

// Multiline strings
// console.log("Hello, \n World!");

// ES6
// Template Literals (``)
let str = `Hello 
World`;
console.log(str);

let firstName = "alina";
let lastName = "joe";
let city = "Pune";

console.log("My name is " + firstName + " " + lastName + " living in " + city);

// variable & expression substituion
console.log(`My name is ${firstName} ${lastName} living in ${city}`);

// Object Destructuring
const person = {
  id: 1,
  name: "alina",
  salary: 20000,
  contact: {
    email: "admin@gmail.com",
  },
};

const {
  id,
  salary,
  contact: { email },
} = person;
console.log(id, salary, email);

// Array Destructuring
const numbers = [10, 20, 30];
const [a, , b] = numbers;
console.log(a, b);

// Object Restructuring
const emp = {
  firstName,
  lastName,
  city,
};

console.log(emp);

// Rest Operators (...): get indefinite number of arguments in a array
add = (...a) => {
  console.log(a); //[1, 2, 4, 5, 6, 7]//reduce
};

add(1, 2, 4, 5, 6, 7, 10);

// Modules

// ES5
// var multiply = require("./common");
// multiply(10, 20);

// ES6
// import { multiply, x } from "./common";
// multiply(10, 20);
// console.log(x);

// Array of objects
let products = [
  {
    id: 1,
    productName: "",
    productPrize: "",
    discount: "",
  },
  {
    id: 1,
    productName: "",
    productPrize: "",
    discount: "",
  },
];

products.forEach((product) => {
  console.log(product.discountedPrize);
});
