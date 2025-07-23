// ==================== 3rd-party Imports ====================
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

// ==================== Context ====================
import { useActiveSection } from "../../../context/ActiveSectionContext";

// ==================== Styles ====================
// Centralized link styles for all navigation links
const linkBaseStyles = `inline-block w-38 text-center text-xl font-light px-4 py-2 hover:shadow-button active:shadow-button-active rounded-2xl transition-all duration-300 bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-primary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white`;

// ==================== Links Component ====================
// Smart navigation link that supports hash links, active state, and custom backgrounds
const Links = ({ children, to, bg, relative }) => {
  // Get current active section from context
  const { activeSection } = useActiveSection();

  // Get current location for active path detection
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine if this is a hash link and if it is active
  const isHashLink = to.includes("#");
  const targetHash = isHashLink ? to.split("#")[1] : null;
  const isActive = isHashLink
    ? activeSection === targetHash
    : currentPath === to;

  // Styles for active/inactive state
  const activeStyles = isActive
    ? "bg-light-text-link text-white bg-[linear-gradient(240deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-secondary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white"
    : `${bg ? "bg-light-bg-body" : "bg-light-bg-card"}`;

  // Combine base and active styles
  const combinedStyles = `${linkBaseStyles} ${activeStyles}`;

  // Dynamically render HashLink or Link
  const Component = isHashLink ? HashLink : Link;

  // ==================== Render Link ====================
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
