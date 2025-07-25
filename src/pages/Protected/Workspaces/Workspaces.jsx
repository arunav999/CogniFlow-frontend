// ==================== IMPORTS ====================
import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

// Custom hooks
import { useGetAllWorkspaces } from "../../../hooks/query/useWorkspaces";

// Util
import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  const { user } = useUserAuth();

  const { data, isLoading, error, isError } = useGetAllWorkspaces();

  const errorMessage = error?.response?.data?.message || "No workspace";

  pageTitle(`${user?.company} - Workspaces | Cogniflow`);

  return (
    <>
      <section className="">
        <div className="">List of workspaces</div>
        {isLoading && <div className="">Loading...</div>}
        {isError && <div className="">{errorMessage}</div>}

        {!isLoading && !isError && data?.workspaces?.length > 0 && (
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
