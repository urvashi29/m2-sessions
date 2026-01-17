import React, { Component } from "react";
import Details from "./Details";

class App extends Component {
  state = {
    firstName: "alina",
    surname: "joe",
    age: 20,
    city: "Pune",
  };

  handleUpdate = () => {
    // this is referring to App
    // to update state, we use setState
    this.setState({
      city: "Banglore",
      firstName: "Alex",
    });
  };

  // whenever a state update, re-render (render function is called again)
  render() {
    return (
      <>
        <Details firstName={this.state.firstName} city={this.state.city} />
        <h2>Updating state</h2>
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default App;

// Reconciliation Process: state update process
// Diffing algo -> to compare DOM trees
// Virtual DOM

// in html
{
  /* <p id="sample">Hello</p>
  <p id="name">Alina</p>
<button onclick="updateName()">Update</button> */
}

// in js
// function updateName() {
// document.querySelector("#sample").textContent = "Hi"
// document.querySelector("#name").textContent = "Alex"

// }
