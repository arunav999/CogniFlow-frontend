import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Reusable/Input/Input";
import ProfilePhoto from "../../components/Reusable/Input/ProfilePhoto";
import Button from "../../components/Reusable/Button/Button";

import { pageTitle } from "../../utils/utils";

import { FiUser, FiLock, FiBriefcase, FiHash } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

const Signup = () => {
  pageTitle("Sign up - Cogniflow");

  // temp remove later
  const [value, setValue] = useState("");

  // toogle radio button
  const [role, setRole] = useState("admin");

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
        <form className="flex items-center justify-center">
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
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {/* Last name */}
            <Input
              type="text"
              id="lName"
              name="lastName"
              icon={<FiUser />}
              placeholder="Last"
              // required={false}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {/* Email */}
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MdOutlineEmail />}
              placeholder="Email"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {/* Password */}
            <Input
              type="password"
              id="password"
              name="password"
              icon={<FiLock />}
              placeholder="Enter password"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {/* Confirm password */}
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              icon={<FiLock />}
              placeholder="Confirm password"
              value={value}
              onChange={(event) => setValue(event.target.value)}
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
                  />

                  {/* <Input
                    type="text"
                    id="workspace"
                    name="workspace"
                    placeholder="Workspace"
                    required={false}
                    icon={<AiOutlineAppstore />}
                  /> */}
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
                    required={false}
                  />

                  {/* <p className="xs:text-xs md:text-sm text-center text-gray-500 font-text mt-4">
                    Don't have one? &rarr; We'll create a personal workspace for
                    you.
                  </p> */}
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
                    required={false}
                  />

                  {/* <p className="xs:text-xs md:text-sm text-center text-gray-500 font-text mt-4">
                    Don't have one? &rarr; We'll create a personal workspace for
                    you.
                  </p> */}
                </>
              )}
            </div>

            <div className="my-4">
              <Button
                disabled={false}
                redirect={`${role === "admin" ? "/admin" : "/u"}`}
              >
                {role === "admin"
                  ? "Create Account & Get Started"
                  : "Join Workspace"}
              </Button>
            </div>

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
