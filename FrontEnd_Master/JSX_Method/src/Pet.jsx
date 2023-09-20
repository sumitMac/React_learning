import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.age),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };
//change into simple syntax.

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};
export default Pet;
