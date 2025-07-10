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

// Get Name Initials
export const firstNameInitials = (name) => {
  if (!name) return;

  const firstLetter = name.split("")[0].toUpperCase();

  return firstLetter;
};

export const lastNameInitials = (name) => {
  if (!name) return;

  const firstLetter = name.split("")[0].toUpperCase();
  return firstLetter;
};
