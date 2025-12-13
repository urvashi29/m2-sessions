// Spread Operator (...)
//  for objects
let obj = {
  a: 10,
  b: 20,
};

//shallow copy
// let objTwo = obj;
// objTwo.a = 60;
// console.log(obj, objTwo);

// using spread opeartor (deep copy)
let objTwo = { ...obj, z: 100, y: 200, a: 60 };
console.log(obj, objTwo);

//  for arrays
let arr = [10, 2, 3];
let arrTwo = [...arr, 100, 200];
console.log(arr, arrTwo);

// Regex - Regular expression
const regerEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regerEmail.test("admin@gmail.com")); //true, if it correct

let vowelRegex = /^[aeiou]+$/gim;

let pwdRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi;

//extraction
const regex = /\d{2}-\d{2}-\d{4}/;
const str = "DOB:12-12-2025";
const match = str.match(regex);
console.log(match[0]);

// replace
const strVal = "html, css : html, css";
console.log(strVal.replace(/html/g, "HTML"));

//modifiers
// g- global,
// m - multi line
// i case insensitive

// [0-9]
// [a-z]
// [A-Z]

// Tasks on array helper functions: use es6 (map, filter, forEach, some, every, reduce)

//1. Check if all the property values(firstName) in an array of object is same or not
// array of object
// [
//     {
//         firstName: 'alina',
//         id: 1,
//         age: 12
//     }, {
//         firstName: 'harry',
//         id: 2,
//         age: 12
//     }, {
//         firstName: 'alina',
//         id: 3,
//         age: 12
//     }
// ]

// 2. Get the value of the first element in an array that has value greater than 20. arr = [1, 2, 3, 10, 30, 20]
// 3. Get the value of the first element in an array that has value less than 20.  arr = [1, 2, 3, 10, 30, 20]
// 4. Filter data based on a id(property) in an array of objects: pick id value (2)

// 5. Get all the person name based on age greater than and equal to 18, eligible to vote
// [{
//     firstName: 'joe',
//     age: 24
// }, {
//     firstName: 'alina',
//     age: 12
// },
// {
//     firstName: 'alex',
//     age: 20
// }
// ]

// 6. Check element is odd or even in an array. arr = [90, 89, 56, 45]

// 7. reduce method: Sum all the elements of an array [90, 89, 56, 45]

// 8. Sum of all the salaries and display final sum value: reduce method
// [{
//     salary: 56000,
//     id: 1
// },
// {
//     salary: 90000,
//     id: 2
// }]

// 9. Concatenation of all array elemets. ['pink', 'blue', 'green', 'red']: 'pinkbluegreenred'

// 10. reduce method: Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]

// 11. Regex: Check if given URL  is valid or not?
