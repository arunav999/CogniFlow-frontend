// ==================== React & Router Imports ====================
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// ==================== Reusable Components ====================
import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

// ==================== Utilities & Icons ====================
import { pageTitle } from "../../utils/utils";
import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SyncLoader } from "react-spinners";

// ==================== Validation & Services ====================
import { emailIsValid, passwordIsValid } from "../../utils/validation";
import { loginUser } from "../../services/authService";

// ==================== Custom Hooks ====================
import useUserAuth from "../../hooks/useUserAuth";

// ==================== Login Page Component ====================
// Handles user login, validation, and form state
const Login = () => {
  // Set page title
  pageTitle("Login - Cogniflow");

  // Extract setUser from context
  const { setUser } = useUserAuth();

  // Ref for focusing email input
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const navigate = useNavigate();

  // State for remember me checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for error messages
  const [error, setError] = useState({
    email: { hasError: false, hasErrorMessage: null },
    password: { hasError: false, hasErrorMessage: null },
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate fields on blur
  const handleBlur = (field) => {
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

  // Handle input changes
  const handleChange = (e, field) => {
    const value = e.target.value;
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
  };

  // Check if any field has errors
  const hasErrors = Object.values(error).some((field) => field.hasError);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if (hasErrors) return;
    const payload = { ...formData, remember: rememberMe };
    setIsSubmitting(true);
    try {
      const res = await loginUser(payload);
      setUser(res.user); // Set user context
      navigate(res.redirect); // Redirect after login
      setFormData({ email: "", password: "" }); // Reset form
      setRememberMe(false);
    } catch (error) {
      setIsSubmitting(false);
      // Handle backend error
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

  // ==================== Render Login Form ====================
  return (
    <>
      <section className="section">
        {/* ========== Heading Section ========== */}
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

        {/* ========== Login Form ========== */}
        <form
          className="flex items-center justify-center"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Email Input */}
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

            {/* Remember Me & Forgot Password */}
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

            {/* Login Button & Signup Redirect */}
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

            {/* Reset Form Button */}
            <div
              className="underline cursor-pointer font-body text-gray-500"
              onClick={() => {
                setFormData({ email: "", password: "" });
                setRememberMe(false);
                setError({
                  email: { hasError: false, hasErrorMessage: null },
                  password: { hasError: false, hasErrorMessage: null },
                });
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
