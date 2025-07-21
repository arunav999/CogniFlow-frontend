import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

// React icons
import { RiCloseCircleLine } from "react-icons/ri";

// Service
import { logoutUser } from "../../../services/Auth/authService";
// Custom hook
import useUserAuth from "../../../hooks/useUserAuth";

// Custom Components
import Links from "../../Reusable/Links/Links";
import Button from "../../Reusable/Button/Button";

// Utils
import { ROUTE_NAMES } from "../../../utils/roles/routesNames";
import { firstNameInitials, lastNameInitials } from "../../../utils/utils";

const DashboardLaout = () => {
  // Extracting user
  const { user } = useUserAuth();

  const navigate = useNavigate();

  // Sidebar toggle effect
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle((prev) => !prev);
  };

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
      <div className="relative">
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
          <div className="xs:h-14 sm:h-18 xs:w-14 sm:w-18 rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-gray-300 hover:border-gray-500 p-[1px] transition-all hover:shadow-button active:shadow-button-active hover:translate-y-[-3px] active:translate-y-[0px]">
            <button
              className="cursor-pointer h-full w-full rounded-[50%]"
              onClick={toggleSidebar}
            >
              {isURL ? (
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
        {
          <nav
            className={`fixed xs:w-[50%] sm:w-[25%] h-[100vh] flex flex-col items-center justify-center gap-4 transition-all duration-500 rounded-s-3xl ${
              toggle ? "top-0 right-0" : "top-0 -right-170"
            }`}
          >
            {/* RADIAL EFFECT */}
            <div className="h-full w-full overflow-hidden absolute top-0 rounded-s-3xl">
              <div
                className={`h-11 w-11 rounded-[50%] overflow-hidden ${
                  toggle
                    ? "scale-[70] duration-1000 ease-[cubic-bezier(0.86, 0, 0.07, 1)]"
                    : "scale-[0] duration-500 ease-[cubic-bezier(0.86, 0, 0.07, 1)]"
                } transition-all `}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(141, 202, 193, 0.3), rgba(83, 174, 160, 0.3))",
                  backdropFilter: "blur(0.25px)",
                }}
              ></div>
            </div>

            {/* TOGGLE BUTTON - CLOSE */}
            <div className="absolute top-12 -left-12 text-center cursor-pointer rounded-[50%] overflow-hidden">
              <button
                className="text-gray-500 xs:text-2xl md:text-3xl hover:bg-gray-500 hover:text-light-bg-body transition-all rounded-[50%] cursor-pointer"
                onClick={toggleSidebar}
              >
                <RiCloseCircleLine />
              </button>
            </div>

            {/* SIDEBAR CONTENT */}
            {/* AVATAR */}
            <div className="xs:h-24 sm:h-28 xs:w-24 sm:w-28 rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-gray-300 hover:border-gray-500 p-[1px] transition-all hover:shadow-button active:shadow-button-active hover:translate-y-[-3px] active:translate-y-[0px] z-40">
              <div className="cursor-pointer h-full w-full rounded-[50%]">
                {isURL ? (
                  <div className="relative rounded-[50%] group">
                    <img
                      src={user?.avatar?.url}
                      alt="Profile Pic"
                      className="rounded-[50%] h-full w-full object-cover scale-[1.3] group-hover:scale-[1] group-hover:blur-[4px] group-hover:brightness-[90%] transition-all duration-350 ease-in-out"
                    />

                    {/* ROLE TEXT */}
                    <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-350 ease-in-out rounded-[50%]">
                      <p className="text-2xl font-body text-light-bg-accent opacity-0 group-hover:opacity-100 transition-all duration-350 ease-in-out capitalize select-none">
                        {user?.role}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full rounded-[50%] flex items-center justify-center group relative">
                    {/* INITIALS TEXT */}
                    <div className="absolute inset-0 flex font-logo xs:text-[48px] sm:text-[68px] h-full w-full rounded-[50%] items-center justify-center text-light-text-secondary bg-light-bg-body xs:font-semibold sm:font-bold transition-all duration-350 ease-in-out transform group-hover:-translate-y-full">
                      <p>{firstNameInitials(user?.firstName)}</p>
                      <p>{lastNameInitials(user?.lastName)}</p>
                    </div>

                    {/* ROLE TEXT */}
                    <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-350 ease-in-out capitalize select-none group-hover:text-light-bg-body group-hover:bg-light-text-secondary h-full w-full rounded-[50%]">
                      <p className="font-logo xs:text-[26px] sm:text-[30px] xs:font-semibold sm: font-bold">
                        {user?.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* USER-NAME */}
            <div className="z-40 text-2xl">
              <p className="font-heading text-light-text-primary">
                {user?.firstName} {user?.lastName}
              </p>
            </div>

            {/* NAV-LINKS */}
            <ul className="z-40 flex flex-col gap-4" onClick={toggleSidebar}>
              <li>
                <Links to={`${ROUTE_NAMES.ADMIN.DASHBOARD}`}>Dashboard</Links>
              </li>
              <li>
                <Links to={`${ROUTE_NAMES.ADMIN.WORKSPACES}`}>Workspaces</Links>
              </li>
              <li>
                <Links to={`${ROUTE_NAMES.ADMIN.PROJECTS}`}>Projects</Links>
              </li>
              <li>
                <Links to={`${ROUTE_NAMES.ADMIN.TICKETS}`}>Tickets</Links>
              </li>
              <li>
                <Links to={`${ROUTE_NAMES.ADMIN.MANAGE_USERS}`}>Team</Links>
              </li>
            </ul>

            {/* LOGUT BUTTON */}
            <div className="">
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
            </div>
          </nav>
        }

        {/* ========== MAIN CONTENT ========== */}
        <main className="mt-27">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLaout;
