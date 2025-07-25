// ==================== IMPORTS ====================
import { Link } from "react-router-dom";
import useUserAuth from "../../../hooks/useUserAuth";

import WorkspaceEmptyState from "../../../components/Layout/Workspaces/WorkspaceEmptyState";

import { IoAdd } from "react-icons/io5";

// Custom hooks
// import { useGetAllWorkspaces } from "../../../hooks/query/useWorkspaces";

// Util
import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  const { user } = useUserAuth();

  // const { wsData, isWsLoading, wsError, isWsError } = useGetAllWorkspaces();

  // const errorMessage = wsError?.response?.data?.message || "No workspace";

  pageTitle(`${user?.company} - Workspaces | Cogniflow`);

  return (
    <>
      <section className="xs:px-4 md:px-16">
        {/* Create button */}
        <div className="xs:text-sm sm:text-lg font-body">
          <button className="flex items-center gap-1 bg-[#d8d7d779] py-1 px-2 cursor-pointer rounded-lg text-gray-500 border border-gray-400">
            <span>
              <IoAdd />
            </span>
            <span>Create workspace</span>
          </button>

          {/* Sorting will come later */}
        </div>

        {/* If no workspace */}
        <WorkspaceEmptyState />
      </section>
    </>
  );
};

export default Workspaces;
