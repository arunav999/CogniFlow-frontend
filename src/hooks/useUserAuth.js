import { useContext } from "react";

// User contex
import { UserContext } from "../context/UserContext";

const useUserAuth = () => {
  return useContext(UserContext);
};

export default useUserAuth;
