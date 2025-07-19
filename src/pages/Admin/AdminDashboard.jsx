// Components
import DashboardLaout from "../../components/Layout/Dashboard/DashboardLaout";

// Util
import { pageTitle } from "../../utils/utils";

const AdminDashboard = () => {
  pageTitle("Admin dashboard");

  return (
    <>
      <DashboardLaout>
        <section className="">Main Content</section>
      </DashboardLaout>
    </>
  );
};

export default AdminDashboard;
