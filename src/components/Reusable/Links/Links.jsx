import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          ` text-xl font-light px-4 py-2 ${
            isActive ? "bg-[#53aea0]" : "bg-white"
          } rounded transition-all duration-300 bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-primary)_50%)] bg-[length:220%] hover:bg-[position:100%] hover:text-white `
        }
      >
        Custom Link
      </NavLink>
    </>
  );
};

export default Links;
