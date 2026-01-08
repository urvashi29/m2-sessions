// debouncing function

// execute multiple async operations togather
// Promise.all([promiseOne, PromiseTwo, promiseThree]).then((value) => {
//   console.log(value);
// });

// Promise.race([promiseOne, PromiseTwo, promiseThree]).then((value) => {
//   console.log(value);
// });

function apiCall() {
  //api call fro search
  console.log("API call....");
}

// throttle function
function throttle(func, delay) {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
        timeoutId = null;
      }, delay);
    }
  };
}

const throttleFunc = throttle(apiCall, 1000); //function, delay

document.querySelector("#name").addEventListener("input", throttleFunc);

// document.querySelector("#name").addEventListener("input", apiCall);

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const debounceFunc = throttle(apiCall, 1000); //function, delay

document.querySelector("#age").addEventListener("input", debounceFunc);

// Task
// 1. What will be the output ?
// console.log("Start");
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// let promoiseObj = new Promise((res, rej) => {
//   res(100);
// });

// console.log("End");

// 2. What will be the output ?
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 3. What will be the output ?
// console.log(1);
// setTimeout(() => {
//   console.log("hello");
// }, 0);
// console.log(2);
