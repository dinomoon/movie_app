import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <Fragment>
      <img src={poster} alt={title} title={title}></img>
      <h2>{title}</h2>
      <strong>{year}</strong>
      <p>{summary}</p>
    </Fragment>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
