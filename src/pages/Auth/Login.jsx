import { Link } from "react-router-dom";

import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

import { pageTitle } from "../../utils/utils";

import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {
  pageTitle("Login - Cogniflow");

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
        <form className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Email */}
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MdOutlineEmail />}
              placeholder="Email"
            />

            {/* Password */}
            <Input
              type="password"
              id="password"
              name="password"
              icon={<FiLock />}
              placeholder="Enter password"
            />

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between w-full text-light-text-primary">
              <span className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="remember" id="remember" />
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
                <Button disabled={false}>Login to Cogniflow</Button>
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
