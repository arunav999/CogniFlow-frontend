const Button = ({ heading, disabled = true }) => {
  return (
    <>
      <button
        className={`relative inline-block px-10 py-4 bg-light-ui-primary text-white  rounded-4xl cursor-pointer transition-all duration-200 disabled:bg-[#badfd9] disabled:text-[#b3b3b3] disabled:cursor-not-allowed ${
          !disabled
            ? "hover:-translate-y-[3px] hover:shadow-button active:-translate-y-[1px] active:shadow-button-active  after:content-[''] after:h-full after:w-full after:rounded-4xl after:inline-block after:bg-light-ui-primary after:absolute after:top-0 after:left-0 after:-z-[1] after:transition-all after:duration-500 hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0"
            : ""
        }`}
        disabled={disabled}
      >
        Custom Button
      </button>
    </>
  );
};

export default Button;
