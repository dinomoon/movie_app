import React, { Fragment } from "react";
import PropTypes from "prop-types";

// function Potato(props) {
//   return <p>I love {props.favorite}</p>;
// }
function Food({ name, rating }) {
  return (
    <Fragment>
      <h2>I love {name}</h2>
      <strong>{rating} / 5</strong>
    </Fragment>
  );
}

const foodILike = [
  { id: 1, name: "kimchi", rating: 4 },
  { id: 2, name: "돈까스", rating: 4.5 },
  { id: 3, name: "삼겹살", rating: 4.6 },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <Fragment>
      <h1>ReactJS로 영화 웹 서비스 만들기</h1>
      {foodILike.map((food) => (
        <Food key={food.id} name={food.name} rating={food.rating} />
      ))}
    </Fragment>
  );
}

export default App;
