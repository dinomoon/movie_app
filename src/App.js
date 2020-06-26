import React, { Fragment } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <Fragment>
        <div>
          <h1>The number is {this.state.count}</h1>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
      </Fragment>
    );
  }
}

export default App;
