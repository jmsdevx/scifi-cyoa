import React from "react";
import { Route, Switch } from "react-router-dom";
import Archetype from "../components/wizard/Archetype/Archetype";
import Color from "../components/wizard/Color/Color";
import Companion from "../components/wizard/Companion/Companion";
import Fear from "../components/wizard/Fear/Fear";
import LovedOne from "../components/wizard/LovedOne/LovedOne";
import Race from "../components/wizard/Race/Race";
import Review from "../components/wizard/Review/Review";

export default (
  <Switch>
    <Route path="/wizard/color" component={Color} />
    <Route path="/wizard/race" component={Race} />
    <Route path="/wizard/archetype" component={Archetype} />
    <Route path="/wizard/fear" component={Fear} />
    <Route path="/wizard/pet" component={Companion} />
    <Route path="/wizard/family" component={LovedOne} />
    <Route path="/wizard/review" component={Review} />
  </Switch>
);
