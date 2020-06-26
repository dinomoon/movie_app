import React, { Fragment } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <Fragment>
        <div>{isLoading ? "Loading..." : "We are ready."}</div>
      </Fragment>
    );
  }
}

export default App;
