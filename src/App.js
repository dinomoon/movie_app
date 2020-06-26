import React, { Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
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
