import "./button.css";

const Button = ({ children, design, secondary, disabled = true }) => {
  return (
    <>
      <button
        className={`button ${secondary ? "secondary" : "primary"} ${
          disabled ? "disabled" : ""
        } ${design ? `${design}` : ""}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
