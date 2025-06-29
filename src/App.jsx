// Routes
import AppRoutes from "./routes/AppRoutes";

// Context
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <AppRoutes />
      </ActiveSectionProvider>
    </>
  );
};

export default App;
