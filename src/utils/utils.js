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

// ==================== RANDOM COLOR UTILITIES ====================
export const randomColor = (id) => {
  let seed = 0;
  for (let i = 0; i < id.length; i++) {
    seed += id.charCodeAt(i) * (i + 1);
  }

  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const r = Math.floor(random() * 256);
  const g = Math.floor(random() * 256);
  const b = Math.floor(random() * 256);

  const toHex = (num) => num.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
