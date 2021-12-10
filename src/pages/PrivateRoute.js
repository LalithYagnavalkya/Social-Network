import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useAuthContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { isUserAuthenticated } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => {
        return isUserAuthenticated ? (
          children
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};
export default PrivateRoute;
