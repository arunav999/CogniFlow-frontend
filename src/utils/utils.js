// Checking for valid email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Checking for valid password


// Checking for both passwords match or not
export const confirmPassword = (pass1, pass2) => {
  if (pass1 === pass2) {
    return true;
  }
};
