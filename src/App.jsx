// Routes
import AppRoutes from "./routes/AppRoutes";

// Context
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </ActiveSectionProvider>
    </>
  );
};

export default App;
