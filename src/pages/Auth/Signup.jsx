// React imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom component
import Input from "../../components/Reusable/Input/Input";
import ProfilePhoto from "../../components/Reusable/Input/ProfilePhoto";
import Button from "../../components/Reusable/Button/Button";

// Util
import { pageTitle } from "../../utils/utils";

// Icon
import { FiUser, FiLock, FiBriefcase, FiHash } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

// Validators
import * as validator from "../../utils/validation";

// Signup Action
// import { signupAction } from "./SignupAction";

const Signup = () => {
  // Page title
  pageTitle("Sign up - Cogniflow");

  const navigate = useNavigate();

  // toogle radio button
  const [role, setRole] = useState("admin");

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role,
    company: role === "admin" && "",
  });

  // Error
  const [error, setError] = useState({
    firstName: { hasError: false, hasErrorMessage: null },
    lastName: { hasError: false, hasErrorMessage: null },
    email: { hasError: false, hasErrorMessage: null },
    password: { hasError: false, hasErrorMessage: null },
    confirmPassword: { hasError: false, hasErrorMessage: null },
    company: { hasError: false, hasErrorMessage: null },
  });

  // handle blur
  const handleBlur = (field) => {
    const newErrors = { ...error };

    // first name
    if (field === "firstName") {
      const result = validator.firstNameIsValid(formData.firstName);

      newErrors.firstName = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    // last name
    if (field === "lastName") {
      const result = validator.lastNameIsValid(formData.lastName);

      newErrors.lastName = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    // email
    if (field === "email") {
      const result = validator.emailIsValid(formData.email);

      newErrors.email = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    // password
    if (field === "password") {
      const result = validator.passwordIsValid(formData.password);

      newErrors.password = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    // confirmPassword
    if (field === "confirmPassword") {
      const result = validator.confirmPasswordIsValid(
        formData.password,
        formData.confirmPassword
      );

      newErrors.confirmPassword = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    // company
    if (field === "company") {
      const result = validator.companyIsValid(formData.company);

      newErrors.company = result
        ? { hasError: true, hasErrorMessage: result.message }
        : { hasError: false, hasErrorMessage: null };
    }

    setError(newErrors);

    console.log(error.firstName.hasError, error.firstName.hasErrorMessage);
  };

  // handle change
  const handleChange = (e, field) => {
    const value = e.target.value;

    // first name
    if (field === "firstName") {
      setFormData({
        ...formData,
        firstName: value,
      });

      setError({
        ...error,
        firstName: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }

    // last name
    if (field === "lastName") {
      setFormData({
        ...formData,
        lastName: value,
      });

      setError({
        ...error,
        lastName: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }

    // email
    if (field === "email") {
      setFormData({
        ...formData,
        email: value,
      });

      setError({
        ...error,
        email: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }

    // password
    if (field === "password") {
      setFormData({
        ...formData,
        password: value,
      });

      setError({
        ...error,
        password: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }

    // confirmPassword
    if (field === "confirmPassword") {
      setFormData({
        ...formData,
        confirmPassword: value,
      });

      setError({
        ...error,
        confirmPassword: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }

    // company
    if (field === "company") {
      setFormData({
        ...formData,
        company: value,
      });

      setError({
        ...error,
        company: {
          hasError: false,
          hasErrorMessage: null,
        },
      });
    }
  };

  // handle register user
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section">
        {/* HEADING */}
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

        {/* SIGNUP FORM */}
        <form
          className="flex items-center justify-center"
          onSubmit={handleSignup}
          // noValidate
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Upload profile Image */}
            <ProfilePhoto />

            {/* First name */}
            <Input
              type="text"
              id="fName"
              name="firstName"
              icon={<FiUser />}
              placeholder="First"
              value={formData.firstName}
              onBlur={() => handleBlur("firstName")}
              onChange={(e) => handleChange(e, "firstName")}
              error={error.firstName.hasError}
              errorMessage={error.firstName.hasErrorMessage}
            />

            {/* Last name */}
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

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm password */}
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

            {/* ROLE */}
            <h4 className="font-body text-lg text-gray-500">
              What type of user are you?
            </h4>
            <div className="flex items-center justify-evenly w-full font-body">
              {/* Radio for admin */}
              <label htmlFor="admin" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p>Admin</p>
              </label>

              {/* Radio for manager */}
              <label htmlFor="manager" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="manager"
                  value="manager"
                  checked={role === "manager"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p>Manager</p>
              </label>

              {/* Radio for developer */}
              <label htmlFor="developer" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="developer"
                  value="developer"
                  checked={role === "developer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p>Developer</p>
              </label>
            </div>

            {/* CONDITIONAL RENDERING ADMIN / MEMBER */}
            {/* ADMIN */}
            <div className="mt-4 flex flex-col items-center justify-center">
              {role === "admin" && (
                <>
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

              {/* MANAGER */}
              {role === "manager" && (
                <>
                  <Input
                    type="text"
                    id="inviteCode"
                    name="inviteCode"
                    placeholder="Workspace code"
                    icon={<FiHash />}
                    value={""}
                    onChange={""}
                  />
                </>
              )}

              {/* DEVELOPER */}
              {role === "developer" && (
                <>
                  <Input
                    type="text"
                    id="inviteCode"
                    name="inviteCode"
                    placeholder="Workspace code"
                    icon={<FiHash />}
                    value={""}
                    onChange={""}
                  />
                </>
              )}
            </div>

            {/* Reset form */}
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
              }}
            >
              Reset
            </div>

            {/* Signup button */}
            <div className="my-4">
              <Button
                disabled={false}
                // redirect={`${role === "admin" ? "/admin" : "/u"}`}
                type="submit"
              >
                {role === "admin"
                  ? "Create Account & Get Started"
                  : "Join Workspace"}
              </Button>
            </div>

            {/* Re-direct to login */}
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
