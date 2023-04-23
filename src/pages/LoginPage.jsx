import React from "react";
import { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { Input } from "../components/ui/Inputs";
import { Startas } from "../components/ui/StartDiv";
import { auth } from "../firebase/firebase";
import LoginForm from "../forms/LoginForm";
import { useAuthCtx } from "../store/AuthProvider";

const MainDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  max-wight: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const FormName = styled.h2`
//   font-size: 51px;
// `;
// const Description = styled.p`
//   font-size: 22px;
//   font-weight: 400;
//   line-height: 35.2px;
// `;

// const HalfPageForm = styled.form`
//   width: 38%;
//   display: flex;
//   align-items: center;

//   flex-direction: column;
// `;

const LoginPic = styled.img`
  opacity: 0.5;
  display: block;
  max-width: 50%;
  max-height: 60vh;
  border-radius: 25px;
`;
// const LoginTitle = styled.h2`
//   font-size: 41px;
//   margin-bottom: 10px;
//   color: white;
//   font-weight: 400;
// `;
// const Links = styled(Link)`
//   color: #cccccc;
//   font-size: 16px;
//   font-weight: 400;
//   margin-bottom: 50px;
//   display: block;
//   text-decoration: underline;
// `;

function LoginPage() {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  // const loginWithFirebaseHook = async ({ email, password }) => {
  //   const loadingToastId = toast.loading("Signing in...");

  //   try {
  //     await signInWithEmailAndPassword(email, password);
  //     toast.success("Signed in successfully!");
  //   } catch (error) {
  //     toast.error(`Failed to sign in: ${error.message}`);
  //   }
  // };

  function loginWithFirebaseHook({ email, password }) {
    const loadingToastId = toast.loading("Signing in...");
    // console.log("funkcija suveike");
    // console.log(email, password);
    signInWithEmailAndPassword(email, password).then(() => {
      toast.dismiss(loadingToastId);
    });
  }

  useEffect(() => {
    if (user) {
      toast.success("Signed in successfully!");
      navigate("/shops");
      // Navigate to another page or perform any other action upon successful sign-in.
    } else if (error) {
      toast.error(`Failed to sign in: ${error.message}`);
    }
  }, [user, error]);

  // useEffect(() => {}, [loading]);

  // if (error) {
  //   toast.error("Login failed!");
  // }
  // if (loading) {
  //   toast.loading("Loading...");
  // }

  // if (user) {
  //   toast.success("Login success!");
  //   navigate("/shops");
  // }

  return (
    <MainDiv className="container">
      {/* <h1>Welcome to Login Page</h1> */}
      <LoginPic src="src/assets/img/registration.jpeg" alt="" />
      <LoginForm onLog={loginWithFirebaseHook} />
    </MainDiv>
  );
}

export default LoginPage;
