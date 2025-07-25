import useUserAuth from "../../../hooks/useUserAuth";

import { firstNameInitials, lastNameInitials } from "../../../utils/utils";

const Avatar = () => {
  const { user } = useUserAuth();

  const imgURL = user?.avatar?.url;

  return (
    <>
      <div className="xs:h-10 sm:h-14 xs:w-10 sm:w-14 rounded-[50%] flex items-center justify-center overflow-hidden border-3 border-gray-100 p-[1px] xs:-mr-4 sm:-mr-6 bg-light-bg-body">
        {imgURL ? (
          <img
            src={imgURL}
            className="rounded-[50%] h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-[50%] xs:text-[28px] sm:text-[38px] font-logo text-light-text-secondary xs:font-semibold sm:font-bold">
            <p>{firstNameInitials(user?.firstName)}</p>
            <p>{lastNameInitials(user?.lastName)}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar;
