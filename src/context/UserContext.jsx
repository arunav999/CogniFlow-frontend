// React
import { useState, useEffect, createContext } from "react";

// React-Router
import { useNavigate, useLocation } from "react-router-dom";

// Constants
import { ROLES } from "../utils/roles/roles";

// Get user info service
import { getUserInfo } from "../services/Auth/authService";

// User Context default values
export const UserContext = createContext({
  user: null,
  loading: true,
  setUser: () => {},
});

// Context provider
export const UserProvider = ({ children }) => {
  // Routing
  const navigate = useNavigate();
  const location = useLocation();

  // Defining state
  const [status, setStatus] = useState({
    user: null,
    loading: true,
  });

  // Run on first render
  useEffect(() => {

    const checkAuth = async () => {
      try {
        // Getting user
        const res = await getUserInfo();

        // Setting user
        setStatus((prev) => ({
          ...prev,
          user: res.user,
        }));

        // Get role
        const userRole = res.user.role;
        const redirect =
          userRole === ROLES.ADMIN
            ? "/admin"
            : userRole === ROLES.MANAGER
            ? "/manager"
            : "/developer";

        // If logged in and already on "/", redirect to dashboard
        if (location.pathname === "/" || location.pathname === "/auth")
          navigate(redirect);
      } catch (error) {
        // Retry after delay (for refresh token)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Retry in 2s

        try {
          const retryRes = await getUserInfo();

          setStatus((prev) => ({
            ...prev,
            user: retryRes.user,
          }));

          // Get role after retry
          const retryUserRole = retryRes.user.role;
          const retryRedirect =
            retryUserRole === ROLES.ADMIN
              ? "/admin"
              : retryUserRole === ROLES.MANAGER
              ? "/manager"
              : "/developer";

          // If login via refresh token
          if (location.pathname === "/" || location.pathname === "/auth")
            navigate(retryRedirect);
        } catch (retryError) {
          // Not logged in - stay on landing page
          setStatus((prev) => ({
            ...prev,
            user: null,
          }));
        } finally {
          setStatus((prev) => ({
            ...prev,
            loading: false,
          }));
        }
      }
    };

    checkAuth();
  }, []);

  // Return
  return (
    <UserContext.Provider
      value={{
        user: status.user,
        loading: status.loading,
        setUser: (newUser) => setStatus((prev) => ({ ...prev, user: newUser })),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
