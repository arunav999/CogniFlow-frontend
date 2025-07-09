export const emailIsValid = (email) => {
  if (!email) return { message: "Email is required" };

  let emailSanitized = email.trim().toLowerCase();

  if (emailSanitized.length < 5)
    return { message: "Email must be 5 characters" };

  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegx.test(emailSanitized))
    return { message: "Invalid email format" };

  // No error
  return null;
};
