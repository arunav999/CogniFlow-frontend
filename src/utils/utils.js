// Page title
export const pageTitle = (newTitle) => {
  return (document.title = newTitle);
};

// Debounce utility
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
