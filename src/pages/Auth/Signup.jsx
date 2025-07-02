import { useState } from "react";

import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

import { FiUser, FiLock, FiBriefcase, FiHash } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

const Signup = () => {
  // temp remove later
  const [value, setValue] = useState("");

  // toogle radio button
  const [role, setRole] = useState("admin");

  return (
    <>
      <section className="section">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="heading">
            Create your <span className="logo logo-gradient">Cogniflow</span>{" "}
            account
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            Join free and start flowing through your tasks
          </h4>
        </div>

        <form className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            {/* First name */}
            <Input
              type="text"
              id="fName"
              name="fName"
              icon={<FiUser />}
              placeholder="First"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {/* Last name */}
            <Input
              type="text"
              id="lName"
              name="lName"
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
              id="confirm-password"
              name="confirm-password"
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

              <label htmlFor="member" className="radio">
                <input
                  type="radio"
                  name="role"
                  id="member"
                  value="member"
                  checked={role === "member"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <p>Member</p>
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

                  <Input
                    type="text"
                    id="workspace"
                    name="workspace"
                    placeholder="Workspace"
                    required={false}
                    icon={<AiOutlineAppstore />}
                  />
                </>
              )}

              {/* MEMBER */}
              {role === "member" && (
                <>
                  <Input
                    type="text"
                    id="inviteCode"
                    name="inviteCode"
                    placeholder="Workspace code"
                    icon={<FiHash />}
                    required={false}
                  />

                  <p className="xs:text-xs md:text-sm text-center text-gray-500 font-text mt-4">
                    Don't have one? &rarr; We'll create a personal workspace for
                    you.
                  </p>
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
