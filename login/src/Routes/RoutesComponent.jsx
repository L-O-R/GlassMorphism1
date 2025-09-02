import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesComponent;
