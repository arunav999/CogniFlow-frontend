// Components
import DashboardLaout from "../../components/Layout/Dashboard/DashboardLaout";

import useUserAuth from "../../hooks/useUserAuth";

// Util
import { pageTitle } from "../../utils/utils";

const AdminDashboard = () => {
  const { user } = useUserAuth();

  pageTitle(`${user?.company} - Admin dashboard`);

  return (
    <>
      <DashboardLaout>
        <section className="">Main Content</section>
      </DashboardLaout>
    </>
  );
};

export default AdminDashboard;
