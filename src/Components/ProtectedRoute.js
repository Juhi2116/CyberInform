import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  // Simulate authentication by checking for a token in localStorage
  const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;
