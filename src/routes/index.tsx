import React from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import Loader from "../pages/Loader/Loader";

const Routes = () => {
  const isAuthenticated = false;
  const loading = false;
  return loading ? (
    <Loader />
  ) : isAuthenticated ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
