import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="">
        <Link to="/auth?type=login">Login Page</Link>
      </div>
    </>
  );
};

export default Login;
