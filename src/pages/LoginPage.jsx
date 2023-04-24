import React from "react";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../components/ui/Responsive";
import { auth } from "../firebase/firebase";
import LoginForm from "../forms/LoginForm";

const MainDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  max-wight: 100%;
  display: flex;
  align-items: flex-start;

  ${media.tablet`
  flex-direction: column;
  `};
`;

const LoginPic = styled.img`
  opacity: 0.5;
  display: block;
  max-width: 50%;
  max-height: 60vh;
  border-radius: 25px;

  ${media.tablet`
  max-width: 100%;
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
  margin-bottom: 30px;
  `}
`;

function LoginPage() {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function loginWithFirebaseHook({ email, password }) {
    const loadingToastId = toast.loading("Signing in...");
    signInWithEmailAndPassword(email, password).then(() => {
      toast.dismiss(loadingToastId);
    });
  }

  useEffect(() => {
    if (user) {
      navigate("/shops");
      toast.success("Signed in successfully!");
    } else if (error) {
      toast.error(`Failed to sign in: ${error.message}`);
    }
  }, [user, error]);

  return (
    <MainDiv className="container">
      <LoginPic src="src/assets/img/registration.jpeg" alt="" />
      <LoginForm onLog={loginWithFirebaseHook} />
    </MainDiv>
  );
}

export default LoginPage;
