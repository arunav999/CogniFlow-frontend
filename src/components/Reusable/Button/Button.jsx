import "./button.css";

const Button = ({ children, heading, secondary, disabled = true }) => {
  return (
    <>
      <button
        className={`button ${secondary ? "secondary" : "primary"} ${
          disabled ? "disabled" : ""
        }`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
