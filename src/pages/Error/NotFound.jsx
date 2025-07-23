// ==================== 3rd-party Imports ====================
import { useLocation } from "react-router-dom";

// ==================== Reusable Components ====================
import Links from "../../components/Reusable/Links/Links";

// ==================== Hooks ====================
import useUserAuth from "../../hooks/useUserAuth";

// ==================== Utilities ====================
import { pageTitle } from "../../utils/utils";
import { ROLES } from "../../utils/roles/roles";
import { ROUTE_NAMES } from "../../utils/roles/routesNames";

// ==================== Not Found Page Component ====================
// Renders a 404 page and suggests navigation based on user role
const NotFound = () => {
  pageTitle("404 - Not found");

  const { user } = useUserAuth();
  const location = useLocation();

  // Determine redirect path based on user role
  const redirect =
    user?.role === ROLES.ADMIN
      ? ROUTE_NAMES.ADMIN.DASHBOARD
      : [ROLES.MANAGER, ROLES.DEVELOPER].includes(user?.role)
      ? ROUTE_NAMES.USERS.DASHBOARD
      : "/auth";

  return (
    <>
      <section className="section">
        {/* ==================== Heading ==================== */}
        <div className="text-center mb-8">
          <h2 className="heading">404 &mdash; Page not found</h2>
          <h4 className="sub-heading text-light-text-secondary">
            Oops! We couldn't find the page you're looking for
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 font-body text-gray-600">
          <p>The path {location.pathname} does not exist.</p>

          <div className="flex gap-2">
            {user === null ? (
              <Links to="/">Home</Links>
            ) : (
              <Links to={redirect}>Dashboard</Links>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
