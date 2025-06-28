import { useState, useEffect } from "react";
import { typingConfig } from "./data";

const TypingLogic = () => {
  const { texts, typingDuration, deletingDuration, blinkSpeed, pauseDuration } =
    typingConfig[0];

  const [state, setState] = useState({
    text: "",
    isDeleting: false,
    index: 0,
    blink: true,
    pause: false,
  });

  useEffect(() => {
    const currentWord = texts[state.index];
    const totalTime = state.isDeleting
      ? deletingDuration / currentWord.length
      : typingDuration / currentWord.length;

    const timeout = setTimeout(
      () => {
        if (state.pause) {
          setState((prev) => ({ ...prev, pause: false }));
        } else if (state.isDeleting) {
          const newText = currentWord.slice(0, state.text.length - 1);
          setState((prev) => ({
            ...prev,
            text: newText,
            isDeleting: newText.length === 0 ? false : prev.isDeleting,
            index:
              newText.length === 0
                ? (prev.index + 1) % texts.length
                : prev.index,
          }));
        } else {
          const newText = currentWord.slice(0, state.text.length + 1);
          setState((prev) => ({
            ...prev,
            text: newText,
            isDeleting:
              newText.length === currentWord.length ? true : prev.isDeleting,
            pause: newText.length === currentWord.length,
          }));
        }
      },
      state.pause ? pauseDuration : totalTime
    );
    return () => clearTimeout(timeout);
  }, [state.text, state.isDeleting, state.index, state.pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        blink: !prev.blink,
      }));
    }, blinkSpeed);

    return () => clearInterval(blinkInterval);
  }, []);

  return state;
};

export default TypingLogic;
