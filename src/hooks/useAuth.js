import { useContext } from "react";
import { userContext } from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(userContext);
};

export default useAuth;
