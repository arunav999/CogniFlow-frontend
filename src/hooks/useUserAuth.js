// ==================== 3rd-party Imports ====================
import { useContext } from "react";

// ==================== Context ====================
import { UserContext } from "../context/UserContext";

// ==================== useUserAuth Hook ====================
// Custom hook to access user authentication context
const useUserAuth = () => {
  return useContext(UserContext);
};

export default useUserAuth;
