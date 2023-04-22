import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
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

  function loginWithFirebaseHook({ email, password }) {
    // console.log("funkcija suveike");
    // console.log(email, password);
    signInWithEmailAndPassword(email, password).then(() => {
      console.log("user ===", user);
    });
  }
  if (user) {
    navigate("/shops");
  }

  return (
    <MainDiv className="container">
      {/* <h1>Welcome to Login Page</h1> */}
      {error && <p>nepavyko prisijungti!</p>}
      <LoginPic src="src/assets/img/registration.jpeg" alt="" />
      <LoginForm onLog={loginWithFirebaseHook} />
      {/* <HalfPageForm>
        <LoginTitle>Login details:</LoginTitle>
        <Links to={"/register"}>Would you like to register?</Links>
        <Input placeholder="Your email"></Input>
        <Input placeholder="Password"></Input>
        <RegisterButton type="submit">Login</RegisterButton>
      </HalfPageForm> */}
    </MainDiv>
  );
}

export default LoginPage;
