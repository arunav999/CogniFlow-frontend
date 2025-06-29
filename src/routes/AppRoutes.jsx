// Browser Router import;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importing components
import HomePage from "../components/Layout/HomePage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

// Dashboards
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UserDashboard from "../pages/User/UserDashboard";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
