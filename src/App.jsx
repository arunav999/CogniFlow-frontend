// Router Provider
import { RouterProvider } from "react-router-dom";

// Routes
import router from "./routes/AppRoutes";

// Context
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
// import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        {/* <UserProvider> */}
        <RouterProvider router={router} />
        {/* </UserProvider> */}
      </ActiveSectionProvider>
    </>
  );
};

export default App;
