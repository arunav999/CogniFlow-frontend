import { Link, useNavigate } from "react-router-dom";

import { useRef, useEffect } from "react";

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

  // Header scroll effect
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 0) {
        headerRef.current.className =
          "w-full top-0 fixed py-3 xs:px-4 md:px-22 flex items-center justify-between font-heading transition-all ease-in-out bg-[#f5e1da] shadow-[0_1px_8px_1px_rgba(0,0,0,0.05)] rounded-b-[8px] h-[5.6rem]";
      } else {
        headerRef.current.className =
          "w-full top-0 fixed py-3 xs:px-4 md:px-22 flex items-center justify-between font-heading transition-all ease-in-out h-[6.6rem] bg-light-bg-body";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If user avatar url is null
  const isURL = user?.avatar?.url !== null;

  return (
    <>
      <div className="relative h-[1000px]">
        {/* ========== TOP HEADER ========== */}
        <header
          ref={headerRef}
          className="w-full top-0 fixed py-3 xs:px-4 md:px-22 flex items-center justify-between font-heading transition-all ease-in-out h-[6.6rem] bg-light-bg-body"
        >
          {/* ROLE */}
          <div className="xs:text-xl md:text-2xl font-semibold text-light-text-tertiary">
            <Link to="/admin">Dashboard</Link>
          </div>

          {/* COMPANY */}
          <div className="xs:hidden md:block md:text-2xl font-bold text-light-text-primary">
            {user?.company}
          </div>

          {/* AVATAR */}
          <div className="xs:h-14 sm:h-18 xs:w-14 sm:w-18 rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-gray-300">
            <button className="cursor-pointer h-full w-full rounded-[50%]">
              {!isURL ? (
                <img
                  src={user?.avatar?.url}
                  alt="Profile Pic"
                  className="rounded-[50%] h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[50%] xs:text-[28px] sm:text-[38px] font-logo text-light-text-secondary xs:font-semibold sm:font-bold hover:text-light-bg-body hover:bg-light-text-secondary transition-all">
                  <p>{firstNameInitials(user?.firstName)}</p>
                  <p>{lastNameInitials(user?.lastName)}</p>
                </div>
              )}
            </button>
          </div>
        </header>

        {/* ========== SIDEBAR NAV ========== */}
        <nav className="border fixed top-0 right-0 h-screen">
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
