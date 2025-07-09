// React imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom component
import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

// Util
import { pageTitle } from "../../utils/utils";

// Icon
import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

// Service
import { loginUser } from "../../services/authService";

const Login = () => {
  // Page title
  pageTitle("Login - Cogniflow");

  const navigate = useNavigate();

  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // remember: "",
  });

  // User login
  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
    };

    try {
      const res = await loginUser(payload);
      console.log("Login success:", res);

      // If redirect
      navigate(res.redirect);
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            {/* Password */}
            <Input
              type="password"
              id="password"
              name="password"
              icon={<FiLock />}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between w-full text-light-text-primary">
              <span className="flex items-center gap-1 justify-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  onChange={(e) => console.log(e.target.value)}
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
                <Button disabled={false} type="submit">
                  Login to Cogniflow
                </Button>
              </span>

              <span className="flex items-center gap-2 text-gray-600">
                <p>Don't have an account?</p>
                <Button secondary disabled={false} redirect="/auth?type=signup">
                  Sign up
                </Button>
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
