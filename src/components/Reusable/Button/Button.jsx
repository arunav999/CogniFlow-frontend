const Button = ({ heading, secondary, disabled = true }) => {
  return (
    <>
      <button
        className={`inline-block relative text-white py-4 px-10 font-body rounded-4xl ${
          !disabled
            ? `${
                secondary ? "bg-light-ui-secondary" : "bg-light-ui-primary"
              }  transition-all duration-200  cursor-pointer hover:-translate-y-[3px] hover:shadow-button active:-translate-y-[1px] active:shadow-button-active after:content-[''] after:inline-block after:h-full after:w-full after:rounded-4xl after:${
                secondary ? "bg-light-ui-secondary" : "bg-light-ui-primary"
              } after:transition-all after:duration-500 after:absolute after:top-0 after:left-0 after:-z-[1] hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0`
            : ""
        } disabled:bg-light-ui-disabled disabled:cursor-not-allowed`}
        disabled={disabled}
      >
        Custom Button
      </button>
    </>
  );
};

export default Button;
