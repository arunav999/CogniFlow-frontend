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
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UserDashboard from "../pages/User/UserDashboard";

// 404 | NotFound
import NotFound from "../pages/404/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Admin Routes */}
          <Route element></Route>

          <Route path="/u" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
