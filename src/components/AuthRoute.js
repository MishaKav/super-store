import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../Auth/Auth";

function AuthRoute({ component: Component, ...rest }) {
  if (!Auth.isAuthenticated()) {
    return (
      <Route {...rest} render={() => <Redirect to={{ pathname: "/" }} />} />
    );
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}
export default AuthRoute;
