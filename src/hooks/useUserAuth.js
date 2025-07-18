import { useContext } from "react";

// User contex
import { UserContext } from "../context/user";

const useUserAuth = () => {
  return useContext(UserContext);
};

export default useUserAuth;
