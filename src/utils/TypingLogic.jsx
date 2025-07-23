// ==================== React Imports ====================
import { useState, useEffect } from "react";
import { typingConfig } from "./data";

// ==================== TypingLogic Hook/Component ====================
// Provides animated typing effect for hero/landing text
// Handles typing, deleting, blinking, and cycling through phrases
const TypingLogic = () => {
  // Destructure typing animation config
  const { texts, typingDuration, deletingDuration, blinkSpeed, pauseDuration } =
    typingConfig[0];

  // State for current text, animation phase, and blinking
  const [state, setState] = useState({
    text: "",
    isDeleting: false,
    index: 0,
    blink: true,
    pause: false,
  });

  // Effect: Handles typing and deleting logic
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

  // Effect: Handles blinking cursor animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        blink: !prev.blink,
      }));
    }, blinkSpeed);
    return () => clearInterval(blinkInterval);
  }, []);

  // Return current typing state for use in UI
  return state;
};

export default TypingLogic;
