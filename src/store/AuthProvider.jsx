import React, { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const AuthContext = createContext({
  user: {},
  //   login() {},
  //   logout() {},
  isLoggedIn: false,
  feedback: {
    show: false,
    msg: "",
    type: "",
  },
});

function AuthProvider({ children }) {
  const [user, userLoading, userError] = useAuthState(auth);

  const isLoggedIn = !!user;
  console.log("user ===", user);
  console.log("isLoggedIn ===", isLoggedIn);

  const authCtx = {
    user,
    isLoggedIn,
    feedback,
    ui,
  };

  return <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
