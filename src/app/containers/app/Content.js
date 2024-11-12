import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LazyAuthLanding = lazy(() => import("../../../features/auth/AuthLanding.js"));

const Content = () => {
  return (
    <div className="font-main bg-white p-4 h-screen">
      <Routes>
        <Route path="/" element={<LazyAuthLanding />}></Route>

       
      </Routes>

     
    </div>
  );
};

export default Content;
