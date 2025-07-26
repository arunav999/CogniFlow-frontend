import { useState, useRef } from "react";

export const useModal = () => {
  const dialogRef = useRef(null);
  const [modalContent, setModalContent] = useState(null);

  // Modal open function
  const open = (content = null) => {
    if (content) setModalContent(content);
    dialogRef.current?.showModal();
  };

  // Modal close function
  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.classList.remove("animate-modal-in");
    dialog.classList.add("animate-modal-out");

    const onAnimationEnd = () => {
      dialog.removeEventListener("animationend", onAnimationEnd);
      dialog.close();
      dialog.classList.remove("animate-modal-out");
      dialog.classList.add("animate-modal-in");
    };

    dialog.addEventListener("animationend", onAnimationEnd);
  };

  return {
    dialogRef,
    open,
    close,
    modalContent,
    setModalContent,
  };
};
