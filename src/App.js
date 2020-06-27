import React, { Fragment } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <Fragment>
        <section class="movie__container">
          {isLoading ? (
            <div class="loading">Loading...</div>
          ) : (
            <ul class="movie__list">
              {movies.map((movie) => (
                <li>
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.title}
                    poster={movie.medium_cover_image}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </Fragment>
    );
  }
}

export default App;
