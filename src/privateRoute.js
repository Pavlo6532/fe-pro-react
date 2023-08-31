import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "./constants/constants";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={LOGIN_ROUTE} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
