import { Link } from "react-router-dom";

import AvatarGroup from "../../Reusable/Avatar/AvatarGroup";

const WorkspaceCard = () => {
  return (
    <>
      <div className="shadow-md rounded-2xl py-4 px-8 font-body">
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
        <div className="">
          {/* <p>members(their pro pic or Initials as circle)</p> */}
          <AvatarGroup />
        </div>
        <p>projects - 0</p>
        <p>Created by: name</p>

        {/* Links */}
        <div className="flex items-center justify-between py-2 px-4">
          <p>
            <Link to="/dynamic">View</Link>
          </p>
          <button className="cursor-pointer">Edit</button>
          <button className="cursor-pointer">Delete</button>
        </div>
      </div>
    </>
  );
};

export default WorkspaceCard;
