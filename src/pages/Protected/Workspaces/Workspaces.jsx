import { IoAdd } from "react-icons/io5";
import { ScaleLoader } from "react-spinners";

import WorkspaceEmptyState from "../../../components/Layout/Workspaces/WorkspaceEmptyState";
import WorkspaceCard from "../../../components/Layout/Workspaces/WorkspaceCard";

import useUserAuth from "../../../hooks/useUserAuth";
import { useGetAllWorkspaces } from "../../../hooks/query/useWorkspaces";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../components/Reusable/Modal/Modal";
import WorkspaceModal from "../../../components/Layout/Workspaces/WorkspaceModal";

import { pageTitle } from "../../../utils/utils";

const Workspaces = () => {
  // User context hook
  const { user } = useUserAuth();

  // Modal hook and function
  const { dialogRef, open, close, modalContent } = useModal();
  const handleCreateClick = () => {
    open("create");
  };

  // Services custom hook
  const { wsData, isWsLoading, wsError, isWsError } = useGetAllWorkspaces();

  // const errorMessage = wsError?.response?.data?.message || "No workspace";

  pageTitle(`${user?.company} - Workspaces | Cogniflow`);

  return (
    <>
      {/* Modal */}
      <Modal modalRef={dialogRef} onBackdropClick={close}>
        <WorkspaceModal type={modalContent} onClose={close} />
      </Modal>

      {/* WS - Section */}
      <section className="xs:px-2 md:px-16">
        {/* Create button - Always */}
        <div className="xs:text-sm sm:text-lg font-body">
          <button
            onClick={handleCreateClick}
            className="flex items-center gap-1 bg-[#d8d7d779] py-1 px-2 cursor-pointer rounded-lg text-gray-500 border border-gray-400"
          >
            <span>
              <IoAdd />
            </span>
            <span>Create workspace</span>
          </button>

          {/* Sorting will come later */}
        </div>

        {/* Loader */}
        {isWsLoading && (
          <div className="h-[50vh] flex items-center justify-center">
            <ScaleLoader color="#b0b0b0" />
          </div>
        )}

        {/* If no workspace */}
        {isWsError && <WorkspaceEmptyState onCreate={handleCreateClick} />}

        {/* If workspace available */}
        {!isWsError && (
          <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
            {wsData?.workspaces?.map((ws) => (
              <WorkspaceCard
                key={ws?.id}
                wsId={ws?.id}
                wsName={ws?.name}
                wsDesc={ws?.description}
                wsCreatedBy={ws?.createdBy}
                wsUpdatedBy={ws?.updatedBy}
                wsProjects={ws?.projects}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Workspaces;
