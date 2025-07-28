import Avatar from "../Avatar/Avatar";

const UserCard = ({ user, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(user);
  };

  return (
    <>
      <div
        className="py-2 px-4 rounded-lg flex w-full justify-between items-center bg-light-bg-card hover:bg-gray-200 cursor-pointer transition-all"
        onClick={handleClick}
      >
        <span className="">
          <Avatar />
        </span>
        <p className="">
          {user?.firstName} {user?.lastName}
        </p>
        <input type="checkbox" checked={isSelected} readOnly className="hidden" />
      </div>
    </>
  );
};

export default UserCard;
