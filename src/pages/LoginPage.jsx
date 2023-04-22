import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { Input } from "../components/ui/Inputs";
import { Startas } from "../components/ui/StartDiv";
import LoginForm from "../forms/LoginForm";

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
  return (
    <MainDiv className="container">
      {/* <h1>Welcome to Login Page</h1> */}
      <LoginPic src="src/assets/img/registration.jpeg" alt="" />
      <LoginForm />
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
