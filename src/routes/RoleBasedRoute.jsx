import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const getRoleDefaultPath = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
      case "moderator":
        return "/dashboard";
      case "worker":
        return "/worker-dashboard";
      case "customer":
        return "/customer-dashboard";
      default:
        return "/login";
    }
  };
  const { isAuthenticated, user } = use(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to={getRoleDefaultPath(user?.role)} replace />;
  }

  return children;
};

export default RoleBasedRoute;
