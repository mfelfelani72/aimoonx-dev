import React, { lazy } from "react";

const Landing = lazy(() => import("../containers/app/Landing"));

const Middleware = () => {
  return <Landing />;
};

export default Middleware;
