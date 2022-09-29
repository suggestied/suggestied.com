import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "../pages/404";
import Home from "../pages/Home";

import React from "react";

export default function MainRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">about</Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}
