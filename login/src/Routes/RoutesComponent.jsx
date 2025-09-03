import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectRoute from "./ProtectRoute";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route element={<ProtectRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
