import { pageTitle } from "../../utils/utils";

import useUserAuth from "../../hooks/useUserAuth";

const Dashboard = () => {
  const { user } = useUserAuth();

  pageTitle(`${user?.company} - ${user?.role} dashboard | Cogniflow`);

  return (
    <>
      <section className="">Section for Dashboard</section>
    </>
  );
};

export default Dashboard;
