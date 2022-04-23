import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const userContext = createContext(null);

const AuthProvider = ({ children }) => {
  const userData = useFirebase();
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
};

export default AuthProvider;
