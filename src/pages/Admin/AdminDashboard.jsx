// Components
import Topbar from "../../components/Layout/Dashboard/Topbar/Topbar";
import Sidebar from "../../components/Layout/Dashboard/Sidebar/Sidebar";
import MainContent from "../../components/Layout/Dashboard/Main/MainContent";

// Util
import { pageTitle } from "../../utils/utils";

const AdminDashboard = () => {
  pageTitle("Admin dashboard");

  return (
    <>
      <Topbar />
      <Sidebar />
      <main className="reletive mt-22">
        <MainContent />
      </main>
    </>
  );
};

export default AdminDashboard;
