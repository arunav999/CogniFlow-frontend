// ==================== IMPORTS ====================
import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

// Custom hooks
import { useGetAllWorkspaces } from "../../../hooks/query/useWorkspaces";

// Util
import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  const { user } = useUserAuth();

  const { wsData, isWsLoading, wsError, isWsError } = useGetAllWorkspaces();

  const errorMessage = wsError?.response?.data?.message || "No workspace";

  pageTitle(`${user?.company} - Workspaces | Cogniflow`);

  return (
    <>
      <section className="">
        <div className="">List of workspaces</div>
        {isWsLoading && <div className="">Loading...</div>}
        {isWsError && <div className="">{errorMessage}</div>}

        {!isWsLoading && !isWsError && wsData?.workspaces?.length > 0 && (
          <ul>
            {wsData?.workspaces.map((ws) => (
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
