import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";
import { Input } from "../components/ui/Inputs";

const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 10px;
  color: white;
  font-weight: 400;
`;
const Links = styled(Link)`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 50px;
  display: block;
  text-decoration: underline;
`;

const FormName = styled.h2`
  font-size: 51px;
`;
const Description = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 35.2px;
`;

const HalfPageForm = styled.form`
  width: 38%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

function LoginForm() {
  return (
    <HalfPageForm>
      <LoginTitle>Login details:</LoginTitle>
      <Links to={"/register"}>Would you like to register?</Links>
      <Input placeholder="Your email"></Input>
      <Input placeholder="Password"></Input>
      <RegisterButton type="submit">Login</RegisterButton>
    </HalfPageForm>
  );
}

export default LoginForm;
