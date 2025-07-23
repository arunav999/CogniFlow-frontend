// ==================== React & Router Imports ====================
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// ==================== Reusable Components ====================
import Input from "../../components/Reusable/Input/Input";
import ProfilePhoto from "../../components/Reusable/Input/ProfilePhoto";
import Button from "../../components/Reusable/Button/Button";

// ==================== Utilities & Icons ====================
import { pageTitle, debounce } from "../../utils/utils";
import { FiUser, FiLock, FiBriefcase, FiHash } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SyncLoader } from "react-spinners";

// ==================== Validation & Services ====================
import * as validator from "../../utils/validation";
import { checkUser, registerUser } from "../../services/authService";
import { uploadProfilePic } from "../../services/uploadService";

// ==================== Custom Hooks ====================
import useUserAuth from "../../hooks/useUserAuth";

// ==================== Signup Page Component ====================
// Handles user registration, validation, and form state
const Signup = () => {
  // ========== Page Title ==========
  pageTitle("Sign up - Cogniflow");

  // ========== Navigation ==========
  const navigate = useNavigate();

  // ========== User Context ==========
  const { setUser } = useUserAuth();

  // ========== Profile Picture State ==========
  const [avatarFile, setavAtarFile] = useState(null);

  // ========== Input Focus Ref ==========
  const firstNameRef = useRef(null);
  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  // ========== Form Data State ==========
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin",
    company: "",
  });

  // ========== Error State ==========
  const [error, setError] = useState({
    firstName: { hasError: false, hasErrorMessage: null },
    lastName: { hasError: false, hasErrorMessage: null },
    email: { hasError: false, hasErrorMessage: null },
    password: { hasError: false, hasErrorMessage: null },
    confirmPassword: { hasError: false, hasErrorMessage: null },
    company: { hasError: false, hasErrorMessage: null },
  });

  // ========== Submission State ==========
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ========== Handlers ==========
  // Handle profile picture selection
  const handleAvatarSelect = (file) => setavAtarFile(file);

  // Debounced email check for uniqueness
  const debouncedCheckEmail = debounce(async (email) => {
    const res = await checkUser(email);
    setError((prev) => ({
      ...prev,
      email: {
        hasError: !res.success,
        hasErrorMessage: res.success ? null : res.message,
      },
    }));
  }, 500);

  // Validate fields on blur
  const handleBlur = (field) => {
    if (field === "firstName") {
      const result = validator.firstNameIsValid(formData.firstName);
      if (result) {
        setError((prev) => ({
          ...prev,
          firstName: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
    }
    if (field === "lastName") {
      const result = validator.lastNameIsValid(formData.lastName);
      if (result) {
        setError((prev) => ({
          ...prev,
          lastName: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
    }
    if (field === "email") {
      const email = formData.email.trim();
      const result = validator.emailIsValid(formData.email);
      if (result) {
        setError((prev) => ({
          ...prev,
          email: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
      debouncedCheckEmail(email);
    }
    if (field === "password") {
      const result = validator.passwordIsValid(formData.password);
      if (result) {
        setError((prev) => ({
          ...prev,
          password: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
    }
    if (field === "confirmPassword") {
      const result = validator.confirmPasswordIsValid(
        formData.password,
        formData.confirmPassword
      );
      if (result) {
        setError((prev) => ({
          ...prev,
          confirmPassword: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
    }
    if (field === "company") {
      const result = validator.companyIsValid(formData.company);
      if (result) {
        setError((prev) => ({
          ...prev,
          company: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
        return;
      }
    }
  };

  // Handle input changes
  const handleChange = (e, field) => {
    const value = e.target.value;
    if (field === "firstName") {
      setFormData((prev) => ({ ...prev, firstName: value }));
      setError((prev) => ({
        ...prev,
        firstName: { hasError: false, hasErrorMessage: null },
      }));
    }
    if (field === "lastName") {
      setFormData((prev) => ({ ...prev, lastName: value }));
      setError((prev) => ({
        ...prev,
        lastName: { hasError: false, hasErrorMessage: null },
      }));
    }
    if (field === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      setError((prev) => ({
        ...prev,
        email: { hasError: false, hasErrorMessage: null },
      }));
    }
    if (field === "password") {
      setFormData((prev) => ({ ...prev, password: value }));
      setError((prev) => ({
        ...prev,
        password: { hasError: false, hasErrorMessage: null },
      }));
    }
    if (field === "confirmPassword") {
      setFormData((prev) => ({ ...prev, confirmPassword: value }));
      setError((prev) => ({
        ...prev,
        confirmPassword: { hasError: false, hasErrorMessage: null },
      }));
    }
    if (field === "company") {
      setFormData((prev) => ({ ...prev, company: value }));
      setError((prev) => ({
        ...prev,
        company: { hasError: false, hasErrorMessage: null },
      }));
    }
  };

  // Check if any field has errors
  const hasErrors = Object.values(error).some((field) => field.hasError);

  // Handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    if (hasErrors) return;
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
      company: formData.company,
    };
    setIsSubmitting(true);
    try {
      const response = await registerUser(payload);
      setUser(response.user); // Set user context
      if (avatarFile) {
        try {
          const uploadRes = await uploadProfilePic(avatarFile);
          console.log("Avatar uploaded:", uploadRes.avatar);
        } catch (uploadError) {
          console.warn("Avatar upload failed:", uploadError.message);
        }
      }
      navigate(response.redirect); // Redirect after signup
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "admin",
        company: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      // Handle backend error
      const backendError = error.response?.data;
      if (backendError && backendError.field) {
        setError((prev) => ({
          ...prev,
          [backendError.field]: {
            hasErrors: true,
            hasErrorMessage: backendError.message,
          },
        }));
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==================== Render Signup Form ====================
  return (
    <>
      <section className="section">
        {/* ========== Heading Section ========== */}
        <div className="text-center mb-8">
          <h2 className="heading">
            Create your{" "}
            <span className="logo logo-gradient">
              <Link to="/">Cogniflow</Link>
            </span>{" "}
            account
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            Join free and start flowing through your tasks
          </h4>
        </div>

        {/* ========== Signup Form ========== */}
        <form
          className="flex items-center justify-center"
          onSubmit={handleSignup}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Profile Photo Upload */}
            <ProfilePhoto
              fName={formData.firstName}
              lName={formData.lastName}
              onSelect={handleAvatarSelect}
            />

            {/* First Name Input */}
            <Input
              type="text"
              id="fName"
              name="firstName"
              icon={<FiUser />}
              placeholder="First"
              ref={firstNameRef}
              value={formData.firstName}
              onBlur={() => handleBlur("firstName")}
              onChange={(e) => handleChange(e, "firstName")}
              error={error.firstName.hasError}
              errorMessage={error.firstName.hasErrorMessage}
            />

            {/* Last Name Input */}
            <Input
              type="text"
              id="lName"
              name="lastName"
              required={false}
              icon={<FiUser />}
              placeholder="Last"
              value={formData.lastName}
              onBlur={() => handleBlur("lastName")}
              onChange={(e) => handleChange(e, "lastName")}
              error={error.lastName.hasError}
              errorMessage={error.lastName.hasErrorMessage}
            />

            {/* Email Input */}
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MdOutlineEmail />}
              placeholder="Email"
              value={formData.email}
              onBlur={() => handleBlur("email")}
              onChange={(e) => handleChange(e, "email")}
              error={error.email.hasError}
              errorMessage={error.email.hasErrorMessage}
            />

            {/* Password Input */}
            <Input
              type="password"
              id="password"
              name="password"
              icon={<FiLock />}
              placeholder="Enter password"
              value={formData.password}
              onBlur={() => handleBlur("password")}
              onChange={(e) => handleChange(e, "password")}
              error={error.password.hasError}
              errorMessage={error.password.hasErrorMessage}
            />

            {/* Confirm Password Input */}
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              icon={<FiLock />}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onBlur={() => handleBlur("confirmPassword")}
              onChange={(e) => handleChange(e, "confirmPassword")}
              error={error.confirmPassword.hasError}
              errorMessage={error.confirmPassword.hasErrorMessage}
            />

            {/* User Role Selection */}
            <h4 className="font-body text-lg text-gray-500">
              What type of user are you?
            </h4>
            <div className="flex items-center justify-evenly w-full font-body">
              {/* Admin Role Radio */}
              <label htmlFor="admin" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                />
                <p>Admin</p>
              </label>
              {/* Manager Role Radio */}
              <label htmlFor="manager" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="manager"
                  value="manager"
                  checked={formData.role === "manager"}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                />
                <p>Manager</p>
              </label>
              {/* Developer Role Radio */}
              <label htmlFor="developer" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="developer"
                  value="developer"
                  checked={formData.role === "developer"}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                />
                <p>Developer</p>
              </label>
            </div>

            {/* Conditional Fields for Role */}
            <div className="mt-4 flex flex-col items-center justify-center">
              {formData.role === "admin" && (
                <>
                  {/* Company Input for Admin */}
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    icon={<FiBriefcase />}
                    value={formData.company}
                    onBlur={() => handleBlur("company")}
                    onChange={(e) => handleChange(e, "company")}
                    error={error.company.hasError}
                    errorMessage={error.company.hasErrorMessage}
                  />
                </>
              )}
              {formData.role === "manager" && (
                <>
                  {/* Invite Code Input for Manager */}
                  <Input
                    type="text"
                    id="inviteCode"
                    name="inviteCode"
                    placeholder="Workspace code"
                    icon={<FiHash />}
                    // value={""}
                    // onChange={""}
                  />
                </>
              )}
              {formData.role === "developer" && (
                <>
                  {/* Invite Code Input for Developer */}
                  <Input
                    type="text"
                    id="inviteCode"
                    name="inviteCode"
                    placeholder="Workspace code"
                    icon={<FiHash />}
                    // value={""}
                    // onChange={""}
                  />
                </>
              )}
            </div>

            {/* Reset Form Button */}
            <div
              className="w-[100%] underline cursor-pointer text-right font-body text-gray-500"
              onClick={() => {
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  company: "",
                  role: "admin",
                  inviteCode: "",
                });
                setError({
                  firstName: { hasError: false, hasErrorMessage: null },
                  lastName: { hasError: false, hasErrorMessage: null },
                  email: { hasError: false, hasErrorMessage: null },
                  password: { hasError: false, hasErrorMessage: null },
                  confirmPassword: { hasError: false, hasErrorMessage: null },
                  company: { hasError: false, hasErrorMessage: null },
                });
                firstNameRef.current?.focus();
              }}
            >
              Reset
            </div>

            {/* Signup Button */}
            <div className="my-4">
              <Button disabled={hasErrors || isSubmitting} type="submit">
                {isSubmitting ? (
                  <>
                    <span className="font-body">Signing up</span>{" "}
                    <SyncLoader size={8} color="#eee" />
                  </>
                ) : formData.role === "admin" ? (
                  "Create Account & Get Started"
                ) : (
                  "Join Workspace"
                )}
              </Button>
            </div>

            {/* Redirect to Login */}
            <div className="flex items-center text-gray-500 gap-4 font-body">
              <p>Already have an account?</p>
              <Button secondary disabled={false} redirect="/auth?type=login">
                Login
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
