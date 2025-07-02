import Input from "../../components/Reusable/Input/Input";
import Button from "../../components/Reusable/Button/Button";

import { MdOutlineEmail } from "react-icons/md";

const ForgotPassword = () => {
  return (
    <>
      <section className="section">
        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="heading">Reset your password</h2>
          <h4 className="sub-heading text-light-text-secondary">
            Enter your email to receive a password reset link
          </h4>
        </div>

        {/* RESET FORM */}
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

            <div className="flex flex-col items-center justify-center gap-6">
              <span>
                <Button disabled={false}>Reset password</Button>
              </span>

              <span className="flex items-center gap-2 text-gray-600">
                <p>Remembered your password?</p>
                <Button secondary disabled={false} redirect="/auth?type=login">
                  Login
                </Button>
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;
