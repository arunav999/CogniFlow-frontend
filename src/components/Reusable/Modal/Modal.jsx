import { createPortal } from "react-dom";

import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ children, onBackdropClick, modalRef }) => {
  // Close on click
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget && onBackdropClick) {
      onBackdropClick(); // Trigers close() from useModal hook.
    }
  };

  return createPortal(
    <>
      <dialog
        ref={modalRef}
        onClick={handleClickOutside}
        className="animate-modal-in open:flex open:items-center open:justify-center h-full w-full m-auto p-0 overflow-hidden fixed top-0 left-0 z-50 bg-transparent"
      >
        {/* Children */}
        <div className="bg-light-bg-body max-h-[90vh] w-[90%] max-w-[800px] rounded-lg shadow-lg p-6 overflow-y-auto relative">
          {/* Close button */}
          <button
            onClick={onBackdropClick}
            className="absolute top-4 right-4 cursor-pointer rounded-[50%] transition-all text-light-text-primary bg-light-bg-body hover:text-light-bg-body hover:bg-light-text-primary"
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
