import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/auth?type=signup", { replace: true });
  };

  return (
    <>
      <div className="">
        Don't have an account create one.
        <button onClick={handleSignupRedirect}>SignUp</button>
      </div>
    </>
  );
};

export default Login;
