import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from "react";
import { LoginScreen } from "../components/login/LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};
