import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "../layout/Splash";
import PageNotFound from "../layout/PageNotFound";
import Dashboard from "../layout/Dashboard";
import WizardContainer from "../components/wizard/WizardContainer";

export default (
  <Switch>
    <Route path="/" exact component={Splash} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/wizard" component={WizardContainer} />
    <Route component={PageNotFound} />
  </Switch>
);
