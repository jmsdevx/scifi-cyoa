import React from "react";
import { Route, Switch } from "react-router-dom";
import Archetype from "../components/wizard/Archetype/Archetype";
import Color from "../components/wizard/Color/Color";
import Companion from "../components/wizard/Companion/Companion";
import Fear from "../components/wizard/Fear/Fear";
import Splash from "../layout/Splash";
import LovedOne from "../components/wizard/LovedOne/LovedOne";
import Race from "../components/wizard/Race/Race";
import Review from "../components/wizard/Review/Review";
import PageNotFound from "../layout/PageNotFound";
import Dashboard from "../layout/Dashboard";

export default (
  <Switch>
    <Route path="/" exact component={Splash} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/color" component={Color} />
    <Route path="/race" component={Race} />
    <Route path="/archetype" component={Archetype} />
    <Route path="/fear" component={Fear} />
    <Route path="/companion" component={Companion} />
    <Route path="/lovedOne" component={LovedOne} />
    <Route path="/review" component={Review} />
    <Route component={PageNotFound} />
  </Switch>
);
