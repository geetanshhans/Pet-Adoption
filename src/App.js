import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
