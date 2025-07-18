// Imports
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { PropagateLoader } from "react-spinners";

// Service
import { getUserInfo } from "../../services/Auth/authService";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const [loading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getUserInfo();
        console.log("Calling user from Protected route:", response);

        let role = response.user.role;

        if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
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

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <PropagateLoader loading={loading} speedMultiplier={1.25} size={20}/>
      </div>
    );

  return isAllowed ? children : <Navigate to="/auth" replace />;
  // return children;
};

export default ProtectedRoute;
