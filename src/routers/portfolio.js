import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Error404 from "../pages/404";
import Casino from "../pages/portfolio/casino";
import FrogGame from "../pages/portfolio/froggame";

export default function PortfolioRouter() {
  let { path } = useRouteMatch();

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
