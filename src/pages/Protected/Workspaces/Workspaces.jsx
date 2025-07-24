// ==================== IMPORTS ====================
import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

// Custom hooks
import { useGetAllWorkspaces } from "../../../hooks/query/useWorkspaces";

// Util
import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  const { user } = useUserAuth();

  const { data, isLoading, error } = useGetAllWorkspaces();
  console.log(data);

  console.log(error);

  pageTitle(`${user?.company} - Workspaces | Cogniflow`);

  return (
    <>
      <section className="">
        <div className="">List of workspaces</div>
        {isLoading && <div className="">Loading...</div>}
        {!isLoading && (
          <ul>
            {data?.workspaces.map((ws) => (
              <li key={ws?.id}>
                <Link to={`/admin/workspace/${ws?.id}`}>{ws?.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Workspaces;
