import React, { Component } from "react";

class index extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(err, info) {
    console.error(err);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>something went wrong!</div>;
    }
    return <>{this.props.childern}</>;
  }
}

export default index;
