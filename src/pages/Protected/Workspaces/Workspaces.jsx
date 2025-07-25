// ==================== IMPORTS ====================
import useUserAuth from "../../../hooks/useUserAuth";

import WorkspaceEmptyState from "../../../components/Layout/Workspaces/WorkspaceEmptyState";
import WorkspaceCard from "../../../components/Layout/Workspaces/WorkspaceCard";

import { IoAdd } from "react-icons/io5";

import AvatarGroup from "../../../components/Reusable/Avatar/AvatarGroup";

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
      <section className="xs:px-2 md:px-16">
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
        {/* <WorkspaceEmptyState /> */}

        {/* If workspace available */}
        <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
        </div>
      </section>
    </>
  );
};

export default Workspaces;
