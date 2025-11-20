// routes.jsx
import { createBrowserRouter, Navigate } from "react-router";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CustomerDashboard from "../components/CustomerDashBoard";
import DashBoard from "../components/DashBoard";
import CustomerLayout from "../components/layout/CustomerLayout";
import DashboardLayout from "../components/layout/DashBoardLayout";
import WorkerLayout from "../components/layout/WorkerLayout";
import CreateWorker from "../components/worker/CreateWorker";
import WorkerList from "../components/worker/WorkerList";
import WorkerDashboard from "../components/WorkerDashBoard";
import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

const routes = createBrowserRouter([
  // Public routes
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Register,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["Admin", "Moderator"]}>
          <DashboardLayout />
        </RoleBasedRoute>
      </ProtectedRoute>
      // <ProtectedRoute>
      //   <RoleBasedRoute></RoleBasedRoute>
      // </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", Component: DashBoard },
      { path: "create-worker", Component: CreateWorker },
      { path: "manage-workers", Component: WorkerList },
    ],
  },

  // Worker routes
  {
    path: "/worker",
    element: (
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["Worker"]}>
          <WorkerLayout />
        </RoleBasedRoute>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/worker/dashboard" replace /> },
      { path: "dashboard", Component: WorkerDashboard },
    ],
  },

  // Customer routes
  {
    path: "/customer",
    element: (
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["Customer"]}>
          <CustomerLayout />
        </RoleBasedRoute>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/customer/dashboard" replace /> },
      { path: "dashboard", Component: CustomerDashboard },
    ],
  },

  // {
  //   path: "*",
  //   element: <Navigate to="/signup" replace />,
  // },
]);

export default routes;
