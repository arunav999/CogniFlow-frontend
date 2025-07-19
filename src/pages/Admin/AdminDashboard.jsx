import { pageTitle } from "../../utils/utils";

import { logoutUser } from "../../services/Auth/authService";

import Button from "../../components/Reusable/Button/Button";

import { useNavigate } from "react-router-dom";

import useUserAuth from "../../hooks/useUserAuth";

const AdminDashboard = () => {
  pageTitle("Admin Dashboard");

  const { user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await logoutUser();
      console.log(response);

      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};

export default AdminDashboard;
