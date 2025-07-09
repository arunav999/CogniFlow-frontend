import { useNavigate } from "react-router-dom";

import "./button.css";

const Button = ({
  children,
  design,
  secondary,
  disabled = true,
  redirect,
  onClick,
  type = "button",
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    if (redirect) navigate(redirect, { replace: true });
  };

  return (
    <>
      <button
        className={`button ${secondary ? "secondary" : "primary"} ${
          disabled ? "disabled" : ""
        } ${design ? `${design}` : ""}`}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
