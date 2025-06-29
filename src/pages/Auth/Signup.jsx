import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="">
        <Link to="/auth?type=signup">Sign Up Page</Link>
      </div>
    </>
  );
};

export default Signup;
