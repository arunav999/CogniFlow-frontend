import { useNavigate } from "react-router-dom";

import "./button.css";

const Button = ({
  children,
  design,
  secondary,
  disabled = true,
  redirect = "/auth?type=signup",
}) => {
  const navigate = useNavigate();

  const handlePageRedirects = () => {
    navigate(redirect, { replace: true });
  };

  return (
    <>
      <button
        className={`button ${secondary ? "secondary" : "primary"} ${
          disabled ? "disabled" : ""
        } ${design ? `${design}` : ""}`}
        disabled={disabled}
        onClick={handlePageRedirects}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
