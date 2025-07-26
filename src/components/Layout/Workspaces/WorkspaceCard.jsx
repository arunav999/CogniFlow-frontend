import { Link } from "react-router-dom";
import { LuEye, LuPencil, LuTrash2 } from "react-icons/lu";

import useUserAuth from "../../../hooks/useUserAuth";
import { useGetUserById } from "../../../hooks/query/useUsers";
import { useModal } from "../../../hooks/useModal";

import Modal from "../../Reusable/Modal/Modal";
import AvatarGroup from "../../Reusable/Avatar/AvatarGroup";
import WorkspaceModal from "./WorkspaceModal";

import { ROLES } from "../../../utils/roles/roles";
import { ROUTE_NAMES } from "../../../utils/roles/routesNames";

const WorkspaceCard = ({
  wsId,
  wsName,
  wsDesc,
  wsCreatedBy,
  wsUpdatedBy,
  wsProjects,
}) => {
  // Modal options
  const { dialogRef, open, close, modalContent } = useModal();

  // Get user details
  const { user } = useUserAuth();
  const { userData } = useGetUserById(wsCreatedBy);
  const { userData: updatedByUser } = useGetUserById(wsUpdatedBy);

  // Created by
  const userFname = userData?.user?.firstName;
  const role = userData?.user?.role;
  const isMe = user?._id === userData?.user?.id;

  // Updated by
  const userUpdFname = updatedByUser?.user?.firstName;
  const uRole = updatedByUser?.user?.role;
  const uIsMe = user?._id === updatedByUser?.user.id;

  // Create dynamic route based on role
  const workspaceBasePath =
    role === ROLES.ADMIN
      ? ROUTE_NAMES.ADMIN.WORKSPACE
      : ROUTE_NAMES.USERS.WORKSPACE;

  // Modal function
  const handleModal = (type) => {
    open(type); // set modalContent to "edit" or "delete"
  };

  return (
    <>
      {/* ===== MODAL ===== */}
      <Modal modalRef={dialogRef} onBackdropClick={close}>
        <WorkspaceModal type={modalContent} onClose={close} />
      </Modal>

      {/* WS Card */}
      <div className="hover:shadow-ws-card transition-all duration-300 rounded-xl border-2 border-[#0000001a] py-4 px-8 font-body max-w-3xl">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center py-2 px-4">
          <h2 className="font-heading text-2xl font-semibold text-light-text-secondary">
            {wsName}
          </h2>
          <p className="text-xs text-light-text-tertiary">{wsDesc}</p>
        </div>

        {/* Members */}
        <div className="flex items-center justify-between">
          <p>Members:</p>
          <AvatarGroup />
        </div>

        {/* Projects */}
        <div className="flex items-center justify-between mb-1">
          <p>Projects:</p>
          <p>{wsProjects?.length === 0 ? "No projects" : wsProjects}</p>
        </div>

        {/* Created by */}
        <div className="flex items-center justify-between mb-2">
          <p>Created by:</p>
          <p>
            {userFname} {isMe ? "(you)" : `| ${role}`}
          </p>
        </div>

        {/* Updated by */}
        {wsUpdatedBy !== null && (
          <div className="flex items-center justify-between mb-1">
            <p>Updated by:</p>
            <p>
              {userUpdFname} {uIsMe ? "(you)" : `| ${uRole}`}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex items-center justify-between p-1">
          <p className="border py-1 px-2 transition-all hover:bg-purple-100 rounded text-purple-700">
            <Link
              to={`${workspaceBasePath}/${wsId}`}
              className="flex items-center justify-center gap-1"
            >
              <span>
                <LuEye />
              </span>
              <span>View</span>
            </Link>
          </p>
          {/* Edit */}
          <button
            onClick={() => handleModal("edit")}
            className="cursor-pointer border py-1 px-2 transition-all hover:bg-amber-100 rounded text-amber-700 flex items-center justify-center gap-1"
          >
            <span>
              <LuPencil />
            </span>
            <span>Edit</span>
          </button>
          {/* Delete */}
          <button
            onClick={() => handleModal("delete")}
            className="cursor-pointer border py-1 px-2 transition-all hover:bg-red-100 rounded text-red-700 flex items-center justify-center gap-1"
          >
            <span>
              <LuTrash2 />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkspaceCard;
