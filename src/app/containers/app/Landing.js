import React, { lazy } from "react";

const Content = lazy(() => import("./Content"));

const Landing = () => {
  return (
    <>
      {/* <Header /> */}
      <Content />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
