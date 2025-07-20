// React
import { useState, useEffect, createContext } from "react";

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
  // Defining state
  const [status, setStatus] = useState({
    user: null,
    loading: true,
    path: null,
  });

  // Run on first render
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Getting user
        const res = await getUserInfo();

        // Get role
        const redirect = res.redirect;

        // Setting Status
        setStatus((prev) => ({
          ...prev,
          user: res.user,
          loading: false,
        }));
      } catch (error) {
        // Retry after delay (for refresh token)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Retry in 2s

        try {
          const retryRes = await getUserInfo();

          // Get role after retry

          const retryRedirect = retryRes.redirect;

          setStatus((prev) => ({
            ...prev,
            user: retryRes.user,
          }));
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
