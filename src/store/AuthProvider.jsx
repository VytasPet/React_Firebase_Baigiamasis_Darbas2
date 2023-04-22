import React, { useContext } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext({
  user: {},
  login() {},
  logout() {},
  isLoggedIn: false,
});

function AuthProvider({ children }) {
  const [user, userLoading, userError] = useAuthState(auth);

  const isLoggedIn = !!user;
  console.log("user ===", user);
  console.log("isLoggedIn ===", isLoggedIn);

  const authCtx = {
    user,
    isLoggedIn,
  };

  return <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
