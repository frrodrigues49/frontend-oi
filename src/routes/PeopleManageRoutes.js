import React from "react";
import { Route, Switch } from "react-router-dom";

// PAGES
import Index from "../pages/PeopleManage/PeopleManageList";
import Create from "../pages/PeopleManage/PeopleManageForm";
import Edit from "../pages/PeopleManage/PeopleManageForm";

export default function PeopleManageRoutes({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Index} />
      <Route path={`${match.url}/create`} component={Create} />
      <Route path={`${match.url}/edit/:id`} component={Edit} />
    </Switch>
  );
}
