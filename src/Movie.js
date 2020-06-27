import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Fragment>
      <img src={poster} alt={title} title={title}></img>
      <h2 className="movie__title">{title}</h2>
      <strong className="movie__year">{year}</strong>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="movie__genre">
            {genre}
          </li>
        ))}
      </ul>
      <p className="movie__summary">{summary}</p>
    </Fragment>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
