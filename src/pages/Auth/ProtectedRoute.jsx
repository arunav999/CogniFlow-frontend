// imports
import { Navigate } from "react-router-dom";

// React Spinners
import { PropagateLoader } from "react-spinners";

// Custom Hook
import useUserAuth from "../../hooks/useUserAuth";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // Extracting form context
  const { user, loading } = useUserAuth();

  // Still loadin user info
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <PropagateLoader loading={loading} speedMultiplier={1.25} size={20} />
      </div>
    );

  // Not logged in
  if (!user) return <Navigate to="/auth" replace />;

  // Role-based access
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/403-forbidden" replace />;
  }

  // All checks passed
  return children;
};

export default ProtectedRoute;
