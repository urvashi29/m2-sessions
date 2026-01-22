import React, { Component } from "react";

class Lifecycle extends Component {
  //initialization
  constructor() {
    super();
    this.state = {
      name: "alex",
      age: 20,
    };
  }

  // Mouting
  static getDerivedStateFromProps = (props, state) => {
    console.log(props.person, state);
    return null;
  };

  componentDidMount = () => {
    //API calls
    console.log("component did mount");
  };

  //updation
  handleUpdate = () => {
    this.setState({
      name: "alaya",
    });
  };

  //   to optimise
  shouldComponentUpdate = (nextProps, nextState) => {
    // conditional statements
    console.log("should component update");
    console.log(nextProps);
    if (nextState.age >= 20) {
      return true;
    } else {
      return false;
    }
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "snapshot";
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    //animation, toast messages, display what has changed
    console.log(prevProps);
    console.log(prevState, this.state, snapshot);
  };

//   componentWillUnmount = () => {
//     clear out timing events, remove event listeners 
//   }

  render() {
    return (
      <>
        <p>Hello {this.state.name}</p>
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default Lifecycle;
