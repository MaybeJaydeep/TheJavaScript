import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

export default RoleRoute;