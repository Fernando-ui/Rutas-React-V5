import React from "react";
import { Route,Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { DcScreen } from "../components/dcs/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <Switch>
              <Route exact path="/dc" component={DcScreen}/>
              <Route exact path="/hero/:heroeId" component={ HeroScreen}/>
              <Route exact path="/marvel" component={MarvelScreen}/>
              <Route exact path="/search" component={SearchScreen} />
              <Redirect to="/marvel"/>
          </Switch>
      </div>
    </>
  );
};
