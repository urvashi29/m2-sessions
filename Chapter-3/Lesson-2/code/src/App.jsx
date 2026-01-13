import React, { Component } from "react";
import Display from "./Display";

// class based Component
class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    city: "Pune",
    employee: [
      {
        id: 1,
        firstName: "Alex",
      },
      {
        id: 2,
        firstName: "Alaya",
      },
    ],
  };

  render() {
    return (
      // JSX
      // this is referring to App
      <div>
        <Display user={this.state} />
        <p>
          {this.state.employee.map((emp) => {
            return <p>{emp.firstName}</p>;
          })}
        </p>
      </div>
    );
  }
}

export default App;

// Display({user :{}})

// rcc -> to create class based component
// rsc -> to create function based component

// Task
// Display Products data in UI (try to use cards with tailwind),
// create product state in class and display in function
