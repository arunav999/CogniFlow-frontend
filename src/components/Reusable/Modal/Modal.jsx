import { createPortal } from "react-dom";

import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ children, onBackdropClick, modalRef }) => {
  // Close on click
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget && onBackdropClick) {
      onBackdropClick(); // Trigers close() from useModal hook.
    }
  };

  // max-h-[90vh] w-[100%] min-w-[300px] max-w-[800px] rounded-lg shadow-lg p-6 overflow-y-auto relative grid grid-rows-4 border

  return createPortal(
    <>
      <dialog
        ref={modalRef}
        onClick={handleClickOutside}
        onCancel={(e) => e.preventDefault()}
        className="animate-modal-in open:flex open:items-center open:justify-center h-full w-full m-auto p-0 overflow-hidden fixed top-0 left-0 z-50 bg-transparent"
      >
        {/* Children */}
        <div className="relative bg-light-bg-body xs:p-4 md:p-8 max-h-[80vh] rounded-lg shadow-lg min-w-[300px] w-[100%] max-w-[600px] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onBackdropClick}
            className="absolute xs:top-2 md:top-8 xs:right-2 md:right-6 cursor-pointer rounded-[50%] transition-all text-light-text-primary bg-light-bg-body hover:text-light-bg-body hover:bg-light-text-primary"
          >
            <span>
              <IoIosCloseCircleOutline size={25} />
            </span>
          </button>
          {children}
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
