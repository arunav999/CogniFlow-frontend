// Imports
import { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

// User hook
import useUserAuth from "../hooks/useUserAuth";

// Utils
import { ROLES } from "../utils/roles/roles";
import { ROUTE_NAMES } from "../utils/roles/routesNames";

const PublicRoute = () => {
  const { user } = useUserAuth();

  // check role
  const redirect =
    user?.role === ROLES.ADMIN
      ? ROUTE_NAMES.ADMIN.DASHBOARD
      : [ROLES.MANAGER, ROLES.DEVELOPER].includes(user?.role)
      ? ROUTE_NAMES.USERS.DASHBOARD
      : "/auth";

  // For nav
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && (location.pathname === "/" || location.pathname === "/auth")) {
      navigate(redirect);
    } else if (!user) {
      navigate("/auth");
    }
  }, [user, location.pathname, redirect]);

  return <Outlet />;
};

export default PublicRoute;
