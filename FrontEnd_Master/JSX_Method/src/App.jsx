// import React from 'react';  Now no need to import react
import {createRoot} from "react-dom";
import Pet from "./Pet";



// const Pet = (props) => { 
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.age),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };
// Move to separate component Pet.jsx

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//    [ React.createElement("h1", {}, "hello welcome"),
//     React.createElement(Pet,{
//         name:"lucy",
//         age:8,
//         breed:"german"

//     }),
//     React.createElement(Pet,{
//         name:"lucky",
//         age:9,
//         breed:"huskey"

//     }),
//     React.createElement(Pet,{
//         name:"sunflower",
//         age:12,
//         breed:"street dog"

//     }),]
//   );
// };
// change into simple syntax 
  
  const App = () => {
   return (<div>
      <h1>Adopt Me</h1>
     <Pet name="luna" age={3} breed="german" />
     <Pet name="Puma" age={6} breed="libra" />
     <Pet name="lucky" age={9} breed="cat" />
    </div>)
  };
  const container = document.getElementById("root");
  const root = createRoot(container);
  // root.render(React.createElement(App)); jsx auto create element for you.
  root.render(<App/>);
  