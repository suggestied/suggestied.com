import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Error404 from "../pages/404";
import Casino from "../pages/portfolio/casino";
import FrogGame from "../pages/portfolio/froggame";

export default function PortfolioRouter() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/frog-game`}>
        <FrogGame />
      </Route>
      <Route path={`${path}/casino`}>
        <Casino />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
}
