import { useSignOut } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { LoginButton } from "../components/ui/Button";
import { auth } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut, loading, error] = useSignOut(auth);

  function logoutFireBaseHook() {
    signOut();
  }

  return !isLoggedIn ? null : (
    <LoginButton to={"/login"} onClick={logoutFireBaseHook}>
      Logout
    </LoginButton>
  );
}

export default Logout;
