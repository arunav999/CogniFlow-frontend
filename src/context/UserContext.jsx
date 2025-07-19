// React
import { useState, useEffect, createContext } from "react";

// React-Router
import { useNavigate, useLocation } from "react-router-dom";

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

        // Get role
        const redirect = res.redirect;

        // Setting user
        setStatus((prev) => ({
          ...prev,
          user: res.user,
        }));

        // If logged in and on public route then redirect to dashboard
        if (location.pathname === "/" || location.pathname === "/auth") {
          navigate(redirect);
        }

        // Set loading
        setStatus((prev) => ({
          ...prev,
          loading: false,
        }));
      } catch (error) {
        // Retry after delay (for refresh token)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Retry in 2s

        try {
          const retryRes = await getUserInfo();
          console.log(retryRes);

          // Get role after retry

          const retryRedirect = retryRes.redirect;

          setStatus((prev) => ({
            ...prev,
            user: retryRes.user,
          }));

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
