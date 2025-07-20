// imports from 3rd party
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

// Custom context
import { useActiveSection } from "../../../context/ActiveSectionContext";

// Centralized link styles
const linkBaseStyles = `inline-block w-38 text-center text-xl font-light px-4 py-2 hover:shadow-button active:shadow-button-active rounded-2xl transition-all duration-300 bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-primary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white`;

const Links = ({ children, to, bg, relative }) => {
  // Section Context
  const { activeSection } = useActiveSection();

  // Location and pathnames
  const location = useLocation();
  const currentPath = location.pathname;

  // Check isLinkActive
  const isHashLink = to.includes("#");
  const targetHash = isHashLink ? to.split("#")[1] : null;
  const isActive = isHashLink
    ? activeSection === targetHash
    : currentPath === to;

  // isActive styles
  const activeStyles = isActive
    ? "bg-light-text-link text-white bg-[linear-gradient(240deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-secondary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white"
    : `${bg ? "bg-light-bg-body" : "bg-light-bg-card"}`;

  // Combined Styles
  const combinedStyles = `${linkBaseStyles} ${activeStyles}`;

  // Dynamically render HashLink or Link
  const Component = isHashLink ? HashLink : Link;

  return (
    <Component
      smooth={isHashLink ? isHashLink : ""}
      to={to}
      className={combinedStyles}
      relative={relative}
    >
      {children}
    </Component>
  );
};

export default Links;
