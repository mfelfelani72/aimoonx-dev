import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LazyAuthLanding = lazy(() => import("../../../features/auth/AuthLanding.js"));
const LazyLogin = lazy(() => import("../../../features/auth/Login.js"));
const LazySignUp = lazy(() => import("../../../features/auth/SignUp.js"));
const LazyConfirm = lazy(() => import("../../../features/auth/Confirm.js"));

const Content = () => {
  return (
    <div className="font-main bg-white p-4 h-screen">
      <Routes>
        <Route path="/" element={<LazyAuthLanding />}></Route>
        <Route path="/login" element={<LazyLogin />}></Route>
        <Route path="/sign-up" element={<LazySignUp />}></Route>
        <Route path="/confirm" element={<LazyConfirm />}></Route>

       
      </Routes>

     
    </div>
  );
};

export default Content;
