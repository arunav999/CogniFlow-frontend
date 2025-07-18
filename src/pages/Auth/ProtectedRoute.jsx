// Imports
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// Service
import { getUserInfo } from "../../services/Auth/authService";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const [loading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getUserInfo();
        console.log(response.user.role);

        let role = response.user.role;

        if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
          console.log("Form if check", role);
          setIsAllowed(true);
        }
      } catch (error) {
        setIsAllowed(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [allowedRoles]);

  if (loading) return <div className="">Loading...</div>;

  return isAllowed ? children : <Navigate to="/auth" replace />;
  // return children;
};

export default ProtectedRoute;
