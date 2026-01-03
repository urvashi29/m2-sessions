console.log("hello");
console.log("world");

// callback
// Application of callback
setTimeout(() => {
  console.log(`Your name is Alina`);
}, 2000);

setInterval(() => {
  // console.log(new Date());
}, 1000);

// 1s = 1000ms

//callback hell or pyramid of doom
// callback chaining
// addToCart(function (productId) {
//     checkOut(productId, function (){
//         payment(function () {
//             orderHistory(function () {
//             })
//         })
//     })
// })

// addToCart()
//   .then(function () {})
//   .then()
//   .catch();

// promises
let myPromise = new Promise(function (myResolve, myReject) {
  //producing code
  let x = 0;
  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("error");
  }
});

console.log(myPromise);

// states of promises
// pending
// rejected
// fulfilled

// consuming code or consuming the promise
myPromise
  .then((result) => {
    console.log(result); //ok
  })
  .catch((err) => {
    console.log(err); //error
  });

// Application: axios

// async/await
async function subtract() {
  let y = (await 20) - 10;
  return y;
}

let response = subtract();
console.log(response);

response
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// multiply = async () => {

// }

function add() {
  console.log(10 + 20);
}
add();

//questions
async function display() {
  let promiseObj = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Resolved after 4 seconds");
    }, 4000);
  });

  console.log(promiseObj);
  await promiseObj.then((result) => {
    console.log(result);
  });

  console.log(promiseObj);
}

display();

console.log("hello");


// Task 
// function fetchNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
// }

// 1. You are given a function that simulates fetching data:
// Multiply the result by 2 and console it 
// Also add .catch() to handle any errors

// 2. Using the same fetchNumber function from above:
// Write an async function called getResult,and Use await to get the value 
// from fetchNumber
// Add 5 to the result and console the final value 