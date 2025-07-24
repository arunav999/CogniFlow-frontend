// ==================== 3rd-party Imports ====================
// React Router Provider for routing
import { RouterProvider } from "react-router-dom";

// ==================== App Routes ====================
// Main application routes configuration
import router from "./routes/AppRoutes";

// ==================== Tanstack ====================
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// devtools - removed in production
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// ==================== Context Providers ====================
// Global state providers for active section and user
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { UserProvider } from "./context/UserContext";

// ==================== New Query Client ====================
const queryClient = new QueryClient();

// ==================== Main App Component ====================
// Wraps the app with context providers and router
const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </UserProvider>
      </ActiveSectionProvider>
    </>
  );
};

export default App;
