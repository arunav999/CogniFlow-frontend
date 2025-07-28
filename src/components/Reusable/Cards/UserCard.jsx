import useUserAuth from "../../../hooks/useUserAuth";

import Avatar from "../Avatar/Avatar";

const UserCard = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div className="py-2 px-4 rounded-lg flex w-full justify-between items-center bg-light-bg-card hover:bg-light-bg-body cursor-pointer transition-all">
        <span className="">
          <Avatar />
        </span>
        <p className="">
          {user?.firstName} {user?.lastName}
        </p>
        <input type="checkbox" name="" id="" />
      </div>
    </>
  );
};

export default UserCard;
