// Router Provider

// Routes

// Context
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <UserProvider></UserProvider>
      </ActiveSectionProvider>
    </>
  );
};

export default App;
