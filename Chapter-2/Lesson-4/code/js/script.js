// attaching events through js

document.querySelector("#sample").innerHTML = "Hello";

// Events
function showAlert() {
  alert("Click Event happened!");
}

function addToCart() {
  //add product
  //increase the count in header
}

function mouseEvent() {
  alert("mouse events");
}

function keyEvent() {
  document.querySelector("#first").style.backgroundColor = "teal";
}

function changeBg() {
  document.querySelector("#email").style.backgroundColor = "yellow";
}

function captureInput() {
  //to capture user input
  let contact = document.querySelector("#contact").value;
  console.log(contact);
}

function submit() {
  // e.preventDefault();
  let email = document.querySelector("#email").value;
  console.log(email);
  document.querySelector("#success").innerHTML = "Form is submitted!";
}

function validate() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#emailnew").value;
  let contact = document.querySelector("#contactnew").value;

  // validate
  validateName(name);
}

function validateName(name) {
  if (name.trim().length < 3) {
    document.querySelector("#name-error").innerHTML = "Field is required*";
  } else {
    document.querySelector("#name-error").innerHTML = "";
  }
}

// classList (add class to an element through js)
function changeClass() {
  let ele = document.querySelector("#class-test").classList;
  // ele.remove("sample");
  ele.add("styleDiv");
  ele.toggle("sample");
}

//children
console.log(document.body.children);

// prepand()

// Task
// create a form: name, age, email, salary. onsubmitted display the user data in UI  (add email, name, age salary validation)
