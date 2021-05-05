import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Nav";
import Home from "./Home";
import "./index.css";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Checkout" component={Home} />
          <Route exact path="/Register" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
