import { useSignOut } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import styled from "styled-components";
import { LoginButton } from "../components/ui/Button";
import { auth } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut, loading, error] = useSignOut(auth);

  function logoutFireBaseHook() {
    signOut();
    toast.success("You just logged out!");
  }

  return !isLoggedIn ? null : (
    <LoginButton to={"/login"} onClick={logoutFireBaseHook}>
      Logout
    </LoginButton>
  );
}

export default Logout;
