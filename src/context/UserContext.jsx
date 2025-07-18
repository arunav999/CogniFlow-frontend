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
  });

  // Run on first render
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserInfo();
        console.log("Calling from User Provider:", response.user);

        // Setting user and not losing prev values
        setStatus((prev) => ({
          ...prev,
          user: response.user,
        }));

        console.log("The User data is setting:", status.user);
      } catch (error) {
        // Retrying for refresh token
        await new Promise((resolve) => {
          console.log("Retrying...");
          setTimeout(resolve, 2000); // wait for 2s and retry again
        });

        try {
          const retryResponse = await getUserInfo();
          console.log("Retry- User Provider:", retryResponse);

          // Setting user and not losing prev values
          setStatus((prev) => ({
            ...prev,
            user: retryResponse.user,
          }));
        } catch (error) {
          // Setting user and not losing prev values
          setStatus((prev) => ({
            ...prev,
            user: null,
          }));
        }
      } finally {
        // Setting loading and not losing prev values
        setStatus((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    };

    fetchUser();
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
