// Router Provider
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import AppRoutes from "./routes/AppRoutes";

// Context
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <Router>
        <ActiveSectionProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ActiveSectionProvider>
      </Router>
    </>
  );
};

export default App;
