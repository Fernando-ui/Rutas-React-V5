import React from "react";
import { Route,Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { DcScreen } from "../components/dcs/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <Switch>
              <Route exact path="/dc" component={DcScreen}/>
              <Route exact path="/heroe/:heroeId" component={ HeroScreen}/>
              <Route exact path="/marvel" component={MarvelScreen}/>
              <Redirect to="/marvel"/>
          </Switch>
      </div>
    </>
  );
};
