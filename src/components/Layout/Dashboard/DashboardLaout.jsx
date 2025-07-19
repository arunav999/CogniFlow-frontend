import { Link, useNavigate } from "react-router-dom";

// Service
import { logoutUser } from "../../../services/Auth/authService";
// Custom hook
import useUserAuth from "../../../hooks/useUserAuth";

// Button Custom
import Button from "../../Reusable/Button/Button";

// Utils
import { firstNameInitials, lastNameInitials } from "../../../utils/utils";

const DashboardLaout = ({ children }) => {
  // Extracting user
  const { user } = useUserAuth();

  const navigate = useNavigate();

  // If user avatar url is null
  const isURL = user.avatar.url !== null;

  return (
    <>
      <div className="relative">
        {/* ========== TOP HEADER ========== */}
        <header className="w-full top-0 fixed py-3 xs:px-4 md:px-22 flex items-center justify-between border">
          {/* ROLE */}
          <div className="capitalize border">
            <Link to="/admin">Dashboard</Link>
          </div>

          {/* COMPANY */}
          <div className=" border">{user.company}</div>

          {/* AVATAR */}
          <div className="h-12 w-12 rounded-[50%] flex items-center justify-center overflow-hidden">
            <button className="cursor-pointer h-full w-full rounded-[50%]">
              {isURL ? (
                <img
                  src={user.avatar.url}
                  alt="Profile Pic"
                  className="rounded-[50%] h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[50%]">
                  <p>{firstNameInitials(user.firstName)}</p>
                  <p>{lastNameInitials(user.lastName)}</p>
                </div>
              )}
            </button>
          </div>
        </header>

        {/* ========== SIDEBAR NAV ========== */}
        <nav className="fixed top-0 right-0 h-screen hidden">
          <Button
            secondary
            disabled={false}
            onClick={async () => {
              const res = await logoutUser();
              const redirect = res.redirect;
              navigate(redirect);
            }}
          >
            Logout
          </Button>
        </nav>

        {/* ========== MAIN CONTENT ========== */}
        <main className="mt-22 hidden">{children}</main>
      </div>
    </>
  );
};

export default DashboardLaout;
