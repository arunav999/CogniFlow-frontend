import { Link } from "react-router-dom";

// Icons
import { LuEye, LuPencil, LuTrash2 } from "react-icons/lu";

import AvatarGroup from "../../Reusable/Avatar/AvatarGroup";

const WorkspaceCard = () => {
  return (
    <>
      <div className="hover:shadow-ws-card transition-all duration-300 rounded-xl border-2 border-[#0000001a] py-4 px-8 font-body max-w-3xl">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center py-2 px-4">
          <h2 className="font-heading text-2xl font-semibold text-light-text-secondary">
            Test - HQ
          </h2>
          <p className="text-xs text-light-text-tertiary">
            The description for the workspace
          </p>
        </div>

        {/* Members */}
        <div className="flex items-center justify-between">
          <p>Members:</p>
          <AvatarGroup />
        </div>

        {/* Projects */}
        <div className="flex items-center justify-between mb-1">
          <p>Projects:</p>
          <p>12</p>
        </div>

        {/* Created by */}
        <div className="flex items-center justify-between mb-2">
          <p>Created by:</p>
          <p>name - you | role</p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between p-1">
          <p className="border py-1 px-2 transition-all hover:bg-purple-100 rounded text-purple-700">
            <Link
              to="/dynamic"
              className="flex items-center justify-center gap-1"
            >
              <span>
                <LuEye />
              </span>
              <span>View</span>
            </Link>
          </p>
          <button className="cursor-pointer border py-1 px-2 transition-all hover:bg-amber-100 rounded text-amber-700 flex items-center justify-center gap-1">
            <span>
              <LuPencil />
            </span>
            <span>Edit</span>
          </button>
          <button className="cursor-pointer border py-1 px-2 transition-all hover:bg-red-100 rounded text-red-700 flex items-center justify-center gap-1">
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
