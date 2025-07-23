// ==================== 3rd-party Imports ====================
import { useSearchParams } from "react-router-dom";

// ==================== Auth Pages ====================
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

// ==================== Auth Page Component ====================
// Renders the appropriate authentication page based on URL search params
const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  if (type === "signup") return <Signup />;

  if (type === "reset") return <ResetPassword />;

  return <Login />;
};

export default AuthPage;
