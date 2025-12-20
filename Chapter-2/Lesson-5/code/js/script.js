// // deleteElement
// function deleteEle() {
//   // hiding
//   //   document.querySelector("#sample").style.display = "none";

//   // removing
//   document.querySelector("#sample").remove();
// }

// // removeAttribute
// // document.querySelector("img").removeAttribute("alt")

// // attaching events through js
// // addEventListener(event name, callback function)
// // document.querySelector("#btn").addEventListener("click", function () {
// //   document.querySelector("#test").innerHTML = "eveny attached through js";
// // });

// function display() {
//   document.querySelector("#test").textContent = "eveny attached through js";
// }

// document.querySelector("#btn").addEventListener("click", display);

// // remove event from an element
// // document.querySelector("#btn").removeEventListener();

// // Text Content, innerHTML
// console.log(document.querySelector("#items").innerHTML);
// console.log(document.querySelector("#items").textContent);
// console.log(document.querySelector("#items").innerText);

// let div = document.createElement("div");
// div.innerHTML = "<p>Hello</p><p>World</p>"; //<div><p>Hello</p><p>World</p></div>
// div.textContent = "Hello";

// //
// let ol = document.createElement("ol"); //<ol></ol>
// ol.innerHTML = `
// <li>ReactJS</li>
// <li>NodeJs</li>
// <li>MongoDB</li>
// `;

// //
// let ul = document.createElement("ul");
// let li = document.createElement("li");
// li.textContent = "Hello";
// ul.append(li);

// Event Propogation
// addEventListener(event name, function , boolean(default : false) )
// Bubbling -> false
document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    // console.log(e.target);
    console.log("grandparent");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log("parent");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("child");
    e.stopPropagation();
  },
  false
);

// Capturing -> true
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   function () {
//     console.log("grandparent");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   function () {
//     console.log("parent");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   function () {
//     console.log("child");
//   },
//   true
// );

// onsubmit -> e.preventDefault()

document.querySelector("#first").addEventListener("change", function (e) {
  console.log(e);
  console.log(e.target.value);
  let firstName = e.target.value;
  console.log(this); //input
});

console.log(this); //window

function add() {
  console.log(this); //window
}

let obj = {
  add() {
    console.log(this); //obj
  },
  multiply: () => {
    console.log(this); //window
  },
};

obj.add();
obj.multiply();
