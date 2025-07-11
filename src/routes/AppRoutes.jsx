// Browser Router import;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importing components
import HomePage from "../components/Layout/HomePage";
import AuthPage from "../pages/Auth/AuthPage";

// Dashboards

// Admin pages

// 404 | NotFound
import NotFound from "../pages/Error/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route></Route>
          {/* Admin Routes */}

          {/* User Routes */}
          <Route path="*" element={<NotFound />} />
          {/* <Route /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
