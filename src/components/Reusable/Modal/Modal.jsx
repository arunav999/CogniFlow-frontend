import { createPortal } from "react-dom";

const Modal = ({ ref, children }) => {
  // Close on click
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      ref?.current?.close();
    }
  };

  return createPortal(
    <>
      <dialog
        className="open:flex open:items-center open:justify-center h-full w-full m-auto p-0 overflow-hidden border fixed top-0 left-0 z-50 bg-transparent"
        ref={ref} onClick={closeModal}
      >
        <div className="bg-white max-h-[90vh] w-[90%] max-w-[800px] rounded-lg shadow-lg p-6 overflow-y-auto relative">
          {children}

          <button
            onClick={() => ref?.current?.close()}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            x
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
