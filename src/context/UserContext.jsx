// ==================== 3rd-party Imports ====================
import { useState, useEffect, createContext } from "react";

// ==================== Services ====================
import { getUserInfo } from "../services/authService";

// ==================== User Context ====================
// Provides user authentication state and loading status
export const UserContext = createContext({
  user: null,
  loading: true,
  setUser: () => {},
});

// Provider component to wrap the app and provide user state
export const UserProvider = ({ children }) => {
  // State for user and loading
  const [status, setStatus] = useState({
    user: null,
    loading: true,
  });

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Get user info
        const res = await getUserInfo();

        // Set user and loading state
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
