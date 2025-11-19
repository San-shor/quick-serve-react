import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = use(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
