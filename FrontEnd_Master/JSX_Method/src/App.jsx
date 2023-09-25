// import React from 'react';  Now no need to import react
import { createRoot } from "react-dom/client"; // add client for client side rendering
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import { StrictMode } from "react";
// import Pet from "./Pet";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
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
//         animal:8,
//         breed:"german"

//     }),
//     React.createElement(Pet,{
//         name:"lucky",
//         animal:9,
//         breed:"husky"

//     }),
//     React.createElement(Pet,{
//         name:"sunflower",
//         animal:12,
//         breed:"street dog"

//     }),]
//   );
// };
// change into simple syntax

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    // <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {/* what route in BrowserRouter is available to use. */}
      {/* <div> */}
      {/* <h1>Adopt Me!</h1> replace to ...header */}
      <header>
  <Link to="/">Adopt Me!</Link>
</header>
      {/* <Pet name="luna" animal={3} breed="german" />
      <Pet name="Puma" animal={6} breed="libra" />
      <Pet name="lucky" animal={9} breed="cat" /> */}
      {/* <SearchParams /> */}
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
      {/* </div> */}
      </QueryClientProvider>
    </BrowserRouter>
    //</StrictMode>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App)); jsx auto create element for you.
root.render(<App />);
