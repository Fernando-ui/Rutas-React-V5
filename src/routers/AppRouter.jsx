import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DcScreen } from "../components/dcs/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Redirect exact to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
