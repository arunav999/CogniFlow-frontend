// ==================== PAGE TITLE UTILITY ====================
// Sets the document's title to the provided string
export const pageTitle = (newTitle) => {
  return (document.title = newTitle);
};

// ==================== DEBOUNCE UTILITY ====================
// Returns a debounced version of the given function, delaying execution until after 'delay' ms have elapsed
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// ==================== NAME INITIALS UTILITIES ====================
// Returns the uppercase first letter of the given name (first name)
export const firstNameInitials = (name) => {
  if (!name) return;
  const firstLetter = name.split("")[0].toUpperCase();
  return firstLetter;
};

// Returns the uppercase first letter of the given name (last name)
export const lastNameInitials = (name) => {
  if (!name) return;
  const firstLetter = name.split("")[0].toUpperCase();
  return firstLetter;
};
