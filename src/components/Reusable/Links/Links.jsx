import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          ` text-xl font-light px-4 py-2 shadow-button active:shadow-button-active ${
            isActive
              ? "bg-light-text-link text-white bg-[linear-gradient(240deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-secondary)_50%)] bg-[length:220%] hover:bg-[position:100%] hover:text-white"
              : "bg-white"
          } rounded transition-all duration-300 bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-primary)_50%)] bg-[length:220%] hover:bg-[position:100%] hover:text-white `
        }
      >
        Custom Link
      </NavLink>
    </>
  );
};

export default Links;
