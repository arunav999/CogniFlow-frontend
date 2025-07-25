// ==================== Validation Utilities ====================

// Regex for validating names (letters, apostrophes, hyphens)
const nameRegx = /^[a-zA-Z'-]+$/;

// ==================== First Name Validation ====================
// Checks if first name is present, long enough, and valid format
export const firstNameIsValid = (fName) => {
  if (!fName) return { message: "First name is required" };
  let firstNameSanitized = fName.trim();
  if (firstNameSanitized.length < 3)
    return { message: "First name must be atleast 3 characters" };
  if (!nameRegx.test(firstNameSanitized))
    return { message: "Letters only (no numbers or symbols)" };
  return null;
};

// ==================== Last Name Validation ====================
// Checks if last name is valid (optional, but must be long enough and valid format)
export const lastNameIsValid = (lName) => {
  if (!lName) return null;
  let lastNameSanitized = lName.trim();
  if (lastNameSanitized.length > 0 && lastNameSanitized.length < 3)
    return { message: "Last name must be atleast 3 characters" };
  if (!nameRegx.test(lastNameSanitized))
    return { message: "Letters only (no numbers or symbols)" };
  return null;
};

// ==================== Email Validation ====================
// Checks if email is present, long enough, and valid format
export const emailIsValid = (email) => {
  if (!email) return { message: "Email is required" };
  let emailSanitized = email.trim().toLowerCase();
  if (emailSanitized.length < 5)
    return { message: "Email must be 5 characters" };
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegx.test(emailSanitized))
    return { message: "Invalid email format" };
  return null;
};

// ==================== Password Validation ====================
// Checks if password is present, length, case, and special character requirements
export const passwordIsValid = (password) => {
  if (!password) return { message: "Password is required" };
  let passwordSanitized = password.trim();
  const caseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
  const charRegex = /^(?=.*\d)(?=.*[\W_])/;
  if (passwordSanitized.length < 8 || passwordSanitized.length > 15)
    return { message: "8-15 characters only" };
  if (!caseRegex.test(passwordSanitized))
    return { message: "Need 1 UPPERCASE & 1 lowercase" };
  if (!charRegex.test(passwordSanitized))
    return { message: "Add number & special symbol like !@#$" };
  return null;
};

// ==================== Confirm Password Validation ====================
// Checks if password and confirm password match
export const confirmPasswordIsValid = (password, confirmPassword) => {
  if (password.trim() !== confirmPassword.trim())
    return { message: "Passwords do not match" };
  return null;
};

// ==================== Company Name Validation ====================
// Checks if company name is present and long enough
export const companyIsValid = (company) => {
  if (!company) return { message: "Company name is required" };
  const companySanitized = company.trim();
  if (companySanitized.length < 5)
    return { message: "Company must be 5 characters" };
  return null;
};

// ==================== (Placeholder) Invite Code Validation ====================
