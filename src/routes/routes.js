import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "../layout/Splash";
import PageNotFound from "../layout/PageNotFound";
import Dashboard from "../layout/Dashboard";
import WizardLayout from "../components/wizard/WizardLayout";

export default (
  <Switch>
    <Route path="/" exact component={Splash} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/wizard" component={WizardLayout} />
    <Route component={PageNotFound} />
  </Switch>
);
