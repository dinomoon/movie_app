import React, { Fragment } from "react";

// function Potato(props) {
//   return <p>I love {props.favorite}</p>;
// }
function Food({ name }) {
  return <h2>I love {name}</h2>;
}

const foodILike = [
  { id: 1, name: "kimchi" },
  { id: 2, name: "돈까스" },
  { id: 3, name: "삼겹살" },
];

function App() {
  return (
    <Fragment>
      <h1 className="App">ReactJS로 영화 웹 서비스 만들기</h1>
      {foodILike.map((food) => (
        <Food key={food.id} name={food.name} />
      ))}
    </Fragment>
  );
}

export default App;
