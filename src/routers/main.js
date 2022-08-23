import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "../pages/404";
import Home from "../pages/Home";
import PortfolioRouter from "./portfolio";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">about</Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <PortfolioRouter />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}
