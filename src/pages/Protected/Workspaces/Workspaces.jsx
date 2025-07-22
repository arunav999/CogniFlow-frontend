import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

// Services
import { workspaceById } from "../../../services/Workspaces/workspacesService";

// Util
import { pageTitle } from "../../../utils/utils";
import { useEffect, useState } from "react";

const Workspaces = () => {
  const { user } = useUserAuth();

  const workspaceId = user?.workspaces;
  const [state, setState] = useState(null);

  useEffect(() => {
    if (workspaceId !== undefined) {
      workspaceId.forEach(async (id) => {
        try {
          const res = await workspaceById(id);
          setState(res?.workspace);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [workspaceId]);

  pageTitle(`${user?.company} - Workspaces`);

  return (
    <>
      <section className="">
        <ul>
          {user?.workspaces.map((workspace) => (
            <li key={workspace} className="underline text-blue-700">
              <Link to={`/admin/workspace/${workspace}`}>
                Workspace Name: {state?.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Workspaces;
