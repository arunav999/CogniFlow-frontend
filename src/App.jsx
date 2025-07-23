// ==================== 3rd-party Imports ====================
// React Router Provider for routing
import { RouterProvider } from "react-router-dom";

// ==================== App Routes ====================
// Main application routes configuration
import router from "./routes/AppRoutes";

// ==================== Context Providers ====================
// Global state providers for active section and user
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { UserProvider } from "./context/UserContext";

// ==================== Main App Component ====================
// Wraps the app with context providers and router
const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ActiveSectionProvider>
    </>
  );
};

export default App;
