import React, { Fragment } from "react";

// function Potato(props) {
//   return <p>I love {props.favorite}</p>;
// }
function Potato({ favorite }) {
  return <p>I love {favorite}</p>;
}

function App() {
  return (
    <Fragment>
      <div className="App">hello</div>
      <Potato favorite="kimchi" />
      <Potato favorite="삼겹살" />
      <Potato favorite="돈까스" />
      <Potato favorite="라면" />
    </Fragment>
  );
}

export default App;
