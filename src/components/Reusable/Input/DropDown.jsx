import { useState } from "react";

import UserCard from "../Cards/UserCard";

import { MdOutlineErrorOutline } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa6";

const DropDown = ({ icon, error, errorMessage }) => {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div
          className={`border-2 ${
            error ? "border-red-600" : "border-gray-300"
          } relative flex min-w-82 font-body rounded-2xl text-gray-700 items-center`}
        >
          <span
            className={`pl-1.5 ${error ? "text-red-700" : "text-gray-500"}`}
          >
            {icon}
          </span>

          {/* Drop down */}
          <div
            className="py-4 px-6 text-gray-500 flex items-center justify-between w-full cursor-pointer"
            onClick={() => setDrop((prev) => !prev)}
          >
            <p>Select members</p>
            <p
              className={`transform ${
                drop ? "rotate-0" : "rotate-180"
              } transition-all rounded-[50%] p-[3px] hover:bg-gray-300`}
            >
              <FaChevronUp />
            </p>
          </div>

          {/* Options */}
          {drop && (
            <div
              className="animate-modal-in no-scrollbar bg-light-text-link-hover absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[90%] z-20 py-4 px-6 rounded-2xl max-h-[380px] overflow-y-auto flex flex-col gap-4"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/* Dynamic */}
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          )}
        </div>

        {/* Error Message */}
        <div className="flex items-center gap-2 px-4 text-red-700 font-body text-sm my-1 h-4 w-full">
          {error && (
            <>
              <span className="text-base">
                <MdOutlineErrorOutline />
              </span>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;
