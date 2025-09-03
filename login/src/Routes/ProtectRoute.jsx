import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const isAuth = localStorage.getItem("isLogIn") || false;
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectRoute;
