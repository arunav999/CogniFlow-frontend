import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Links = ({ children, to, bg }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const targetHash = to.split("#")[1];
    setIsActive(location.hash === `#${targetHash}`);
  }, [location, to]);

  return (
    <HashLink
      smooth
      to={to}
      className={`
        inline-block w-38 text-center text-xl font-light px-4 py-2 hover:shadow-button active:shadow-button-active
        ${
          isActive
            ? "bg-light-text-link text-white bg-[linear-gradient(240deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-secondary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white"
            : `${bg ? "bg-light-bg-body" : "bg-light-bg-card"}`
        }
        rounded-2xl transition-all duration-300 bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_var(--color-light-ui-primary)_50%)] bg-[length:230%] hover:bg-[position:100%] hover:text-white
      `}
    >
      {children}
    </HashLink>
  );
};

export default Links;
