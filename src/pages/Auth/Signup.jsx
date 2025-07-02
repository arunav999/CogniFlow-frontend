import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Reusable/Input/Input";
import { validateEmail, confirmPassword } from "../../utils/utils";
import Button from "../../components/Reusable/Button/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginRedirect = () => {
    navigate("/auth?type=login", { replace: true });
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    // Just a placeholder for password validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword(password, confirmPass)) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // proceed with signup logic
      console.log("Form is valid");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex flex-col gap-4 items-center justify-center"
    >
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        errorMessage={errors.email}
      />

      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        errorMessage={errors.password}
      />

      <Input
        type="password"
        id="confirm-password"
        name="confirm-password"
        placeholder="Confirm password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword}
      />

      <Button disabled={false}>Sign up</Button>

      <div className="flex items-end text-gray-500 gap-4 font-body">
        <p className="">Already have an account?</p>
        <Button secondary disabled={false} redirect="/auth?type=login">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Signup;
