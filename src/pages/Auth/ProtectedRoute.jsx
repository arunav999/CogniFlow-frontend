// ==================== 3rd-party Imports ====================
import { Navigate, Outlet } from "react-router-dom";

// ==================== Spinner ====================
import { PropagateLoader } from "react-spinners";

// ==================== Hooks ====================
import useUserAuth from "../../hooks/useUserAuth";

// ==================== Protected Route Component ====================
// Restricts access to routes based on authentication and allowed roles
const ProtectedRoute = ({ allowedRoles = [] }) => {
  // Get user and loading state from context
  const { user, loading } = useUserAuth();

  // Show loading spinner while user info is loading
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <PropagateLoader loading={loading} speedMultiplier={1.25} size={20} />
      </div>
    );

  // Redirect to auth if not logged in
  if (!user) return <Navigate to="/auth" replace />;

  // Role-based access control
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/403-forbidden" replace />;
  }

  // All checks passed, render child routes
  return <Outlet />;
};

export default ProtectedRoute;
