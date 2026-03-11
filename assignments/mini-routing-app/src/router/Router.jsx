import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";
import RoleRoute from "../components/RoleRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
        ],
      },

      {
        element: <RoleRoute allowedRoles={["admin"]} />,
        children: [{ path: "admin", element: <Admin /> }],
      },

      { path: "unauthorized", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);