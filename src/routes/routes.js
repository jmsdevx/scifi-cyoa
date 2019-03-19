import React from "react";
import { Route, Switch } from "react-router-dom";
import Archetype from "../components/wizard/Archetype/Archetype";
import Color from "../components/wizard/Color/Color";
import Companion from "../components/wizard/Companion/Companion";
import Fear from "../components/wizard/Fear/Fear";
import Intro from "../components/wizard/Intro/Intro";
import LovedOne from "../components/wizard/LovedOne/LovedOne";
import Race from "../components/wizard/Race/Race";
import Review from "../components/wizard/Review/Review";
import PageNotFound from "../layout/PageNotFound";

export default (
  <Switch>
    <Route path="/" exact component={Intro} />
    <Route path="/color" component={Color} />
    <Route path="/Race" component={Race} />
    <Route path="/Archetype" component={Archetype} />
    <Route path="/Fear" component={Fear} />
    <Route path="/Companion" component={Companion} />
    <Route path="/LovedOne" component={LovedOne} />
    <Route path="/Review" component={Review} />
    <Route component={PageNotFound} />
  </Switch>
);
