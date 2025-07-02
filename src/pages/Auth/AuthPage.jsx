import { useSearchParams } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  if (type === "signup") return <Signup />;

  if (type === "reset") return <ResetPassword />;

  return <Login />;
};

export default AuthPage;
