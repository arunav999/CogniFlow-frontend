// ==================== 3rd-party Imports ====================
import { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

// ==================== Hooks ====================
import useUserAuth from "../hooks/useUserAuth";

// ==================== Utils ====================
import { ROLES } from "../utils/roles/roles";
import { ROUTE_NAMES } from "../utils/roles/routesNames";

// ==================== Public Route Component ====================
// Handles public route access and redirects based on user authentication and role
const PublicRoute = () => {
  const { user } = useUserAuth();

  // Determine redirect path based on user role
  const redirect =
    user?.role === ROLES.ADMIN
      ? ROUTE_NAMES.ADMIN.DASHBOARD
      : [ROLES.MANAGER, ROLES.DEVELOPER].includes(user?.role)
      ? ROUTE_NAMES.USERS.DASHBOARD
      : "/auth";

  // Navigation hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect logic on mount or when user/location changes
  useEffect(() => {
    if (user && (location.pathname === "/" || location.pathname === "/auth")) {
      navigate(redirect);
    } 
  }, [user, location.pathname, redirect]);

  return <Outlet />;
};

export default PublicRoute;
