import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <Fragment>
        <div>{this.formatCount()}</div>
        <button>+</button>
      </Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
