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

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/u" element={<UserDashboard />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
