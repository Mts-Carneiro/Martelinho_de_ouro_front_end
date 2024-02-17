import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export const PublicRoutes = () => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/service" /> : <Outlet />;
};
