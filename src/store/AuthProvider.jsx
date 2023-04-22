import React, { useContext } from "react";
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
  const [feedback, setFeedback] = useState({
    show: false,
    msg: "",
    type: "",
  });

  //   useEffect(() => {
  //     if (user) {
  //       setFeedback({
  //         show: true,
  //         msg: "Logged in!",
  //         type: "success",
  //       });
  //     } else {
  //       setFeedback({
  //         show: true,
  //         msg: "Logged out!",
  //         type: "success",
  //       });
  //     }
  //   }, [user]);

  const { show, msg } = feedback;

  useEffect(() => {
    if (show === true && msg !== "Loading") {
      setTimeout(() => {
        setFeedback({
          show: false,
          msg: "",
          type: "",
        });
      }, 3000);
    }
  }, [show, msg]);

  const ui = {
    showSuccess(msg = "") {
      setFeedback({
        show: true,
        msg: msg || "Success",
        type: "success",
      });
    },
    showError(msg = "") {
      setFeedback({
        show: true,
        msg: msg || "Klaida",
        type: "error",
      });
    },
    showLoading() {
      setFeedback({
        show: true,
        msg: "Loading",
        type: "info",
      });
    },
    closeAlert() {
      setFeedback({
        show: false,
        msg: "",
        type: "",
      });
    },
  };

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
