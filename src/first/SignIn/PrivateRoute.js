import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./Authentication";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// <Route
// {...rest}
// render={(routeProps) =>
//   !!currentUser ? (
//     <RouteComponent {...routeProps} />
//   ) : (
//     <Navigate to={"/googleauth"} />
//   )
// }
// />
