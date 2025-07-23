// ==================== 3rd-party Imports ====================
// React Router navigation
import { useNavigate } from "react-router-dom";

// ==================== Styles ====================
// Button component styles
import "./button.css";

// ==================== Button Component ====================
// Reusable button with support for primary/secondary styles, disabled state, and optional redirect
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

  // Handle button click: call onClick and optionally redirect
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
