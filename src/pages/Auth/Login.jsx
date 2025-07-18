// React imports
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom component
import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

// Util
import { pageTitle } from "../../utils/utils";

// Icon
import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

// Spinners
import { SyncLoader } from "react-spinners";

// Validators
import { emailIsValid, passwordIsValid } from "../../utils/validation";

// Service
import { loginUser } from "../../services/Auth/authService";

// Custom User hook
import useUserAuth from "../../hooks/useUserAuth";

const Login = () => {
  // Page title
  pageTitle("Login - Cogniflow");

  // Extracting setUser
  const { setUser } = useUserAuth();

  // Focus on first field
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const navigate = useNavigate();

  // Remember me
  const [rememberMe, setRememberMe] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Error
  const [error, setError] = useState({
    email: { hasError: false, hasErrorMessage: null },
    password: { hasError: false, hasErrorMessage: null },
  });

  // Submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Blur
  const handleBlur = (field) => {
    // Email
    if (field === "email") {
      const result = emailIsValid(formData.email);

      if (result) {
        setError((prev) => ({
          ...prev,
          email: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
      }
    }

    // Password
    if (field === "password") {
      const result = passwordIsValid(formData.password);

      if (result) {
        setError((prev) => ({
          ...prev,
          password: {
            hasError: true,
            hasErrorMessage: result.message,
          },
        }));
      }
    }
  };

  // Handle Chnage
  const handleChange = (e, field) => {
    const value = e.target.value;

    // email
    if (field === "email") {
      setFormData((prev) => ({
        ...prev,
        email: value,
      }));

      setError((prev) => ({
        ...prev,
        email: {
          hasError: false,
          hasErrorMessage: null,
        },
      }));
    }

    // password
    if (field === "password") {
      setFormData((prev) => ({
        ...prev,
        password: value,
      }));

      setError((prev) => ({
        ...prev,
        password: {
          hasError: false,
          hasErrorMessage: null,
        },
      }));
    }
  };

  // check for errors
  const hasErrors = Object.values(error).some((field) => field.hasError);

  // User login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (hasErrors) return;

    const payload = {
      ...formData,
      remember: rememberMe,
    };

    setIsSubmitting(true);

    try {
      const res = await loginUser(payload);

      // Set userContext
      setUser(res.user);

      // If redirect
      navigate(res.redirect);

      setFormData({
        email: "",
        password: "",
      });

      setRememberMe(false);
    } catch (error) {
      setIsSubmitting(false);

      // Backend error message
      const backendError = error?.response;

      if (backendError?.data?.field === "login") {
        setError((prev) => ({
          ...prev,
          email: {
            hasError: true,
            hasErrorMessage: backendError?.data?.message,
          },
          password: {
            hasError: true,
            hasErrorMessage: backendError?.data?.message,
          },
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section">
        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="heading">
            Welcome back to{" "}
            <span className="logo logo-gradient">
              <Link to="/">Cogniflow</Link>
            </span>
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            Login and flow through your tasks
          </h4>
        </div>

        {/* LOGIN FORM */}
        <form
          className="flex items-center justify-center"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Email */}
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MdOutlineEmail />}
              placeholder="Email"
              ref={emailRef}
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

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between w-full text-light-text-primary">
              <span className="flex items-center gap-1 justify-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe((prev) => !prev)}
                />
                <label htmlFor="remember" className="cursor-pointer">
                  Stay logged in
                </label>
              </span>

              <span className="border-b-1">
                <a href="/auth?type=reset">Forgot password?</a>
              </span>
            </div>

            {/* Login button and Signup page */}
            <div className="flex flex-col items-center justify-center gap-6 mt-8">
              <span>
                <Button disabled={hasErrors || isSubmitting} type="submit">
                  {isSubmitting ? (
                    <>
                      <span className="font-body">Logging in</span>
                      <SyncLoader size={8} color="#eee" />
                    </>
                  ) : (
                    "Login to Cogniflow"
                  )}
                </Button>
              </span>

              <span className="flex items-center gap-2 text-gray-600">
                <p>Don't have an account?</p>
                <Button secondary disabled={false} redirect="/auth?type=signup">
                  Sign up
                </Button>
              </span>
            </div>

            {/* Reset form */}
            <div
              className="underline cursor-pointer font-body text-gray-500"
              onClick={() => {
                // Reset form data
                setFormData({
                  email: "",
                  password: "",
                });

                // Reset remember
                setRememberMe(false);

                // Reset errors
                setError({
                  email: { hasError: false, hasErrorMessage: null },
                  password: { hasError: false, hasErrorMessage: null },
                });

                // Reset focus
                emailRef.current?.focus();
              }}
            >
              Reset
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
