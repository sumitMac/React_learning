const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.age),
      React.createElement("h3", {}, props.breed),
    ]);
  };
  
  const App = () => {
    return React.createElement(
      "div",
      {},
     [ React.createElement("h1", {}, "hello welcome"),
      React.createElement(Pet,{
          name:"lucy",
          age:8,
          breed:"german"
  
      }),
      React.createElement(Pet,{
          name:"lucky",
          age:9,
          breed:"huskey"
  
      }),
      React.createElement(Pet,{
          name:"sunflower",
          age:12,
          breed:"street dog"
  
      }),]
    );
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));
  