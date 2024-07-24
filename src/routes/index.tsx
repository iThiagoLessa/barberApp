import React from "react";
import Loader from "../common/Loader/Loader";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

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
