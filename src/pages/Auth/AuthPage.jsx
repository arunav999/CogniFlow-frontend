import { useSearchParams } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  if (type === "signup") return <Signup />;

  return <Login />;
};

export default AuthPage;
