import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

// Services
import { workspaceById } from "../../../services/workspacesService";

// Util
import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  const { user } = useUserAuth();

  pageTitle(`${user?.company} - Workspaces`);

  return (
    <>
      <section className="">
        <ul>
          <li>Adding the workspaces</li>
        </ul>
      </section>
    </>
  );
};

export default Workspaces;
