import { useMemo } from "react";

import useUserAuth from "../../../hooks/useUserAuth";

import { firstNameInitials, lastNameInitials } from "../../../utils/utils";
import { randomColor } from "../../../utils/utils";

const Avatar = ({ userId_r, userImg, userFname, userLname }) => {
  const { user } = useUserAuth();

  const userId = user?._id;

  console.log(userId);
  const imgURL = user?.avatar?.url;

  const randomBgColor = useMemo(() => randomColor(`${userId}`));

  return (
    <>
      <div
        className={`h-10 w-10 rounded-[50%] flex items-center justify-center overflow-hidden border border-gray-100 p-[1px] xs:-mr-4`}
        style={
          imgURL
            ? { backgroundColor: "#f2f2f1" }
            : { backgroundColor: randomBgColor }
        }
      >
        {imgURL ? (
          <img
            src={imgURL}
            className="rounded-[50%] h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-[50%] xs:text-[24px]  font-logo text-white">
            <p>{firstNameInitials(user?.firstName)}</p>
            <p>{lastNameInitials(user?.lastName)}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar;
