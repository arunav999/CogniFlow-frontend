import { IoAdd } from "react-icons/io5";

const WorkspaceEmptyState = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col font-body gap-2 h-[60vh]">
        <h2 className="font-heading xs:font-semibold sm:font-bold xs:text-xl sm:text-2xl">
          No workspace
        </h2>

        <button className="flex items-center gap-1 border-2 border-dashed py-4 px-8 rounded-lg text-gray-400 bg-[#d8d7d779] cursor-pointer">
          <span>
            <IoAdd />
          </span>
          <span>Create workspace</span>
        </button>
        <p className="text-gray-400 xs:text-xs sm:text-sm">
          Create one to get started with your team.
        </p>
      </div>
    </>
  );
};

export default WorkspaceEmptyState;
