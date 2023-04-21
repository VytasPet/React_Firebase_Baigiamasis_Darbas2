import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RegisterButton } from "../components/ui/Button";

const MainDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  max-wight: 100%;
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
  flex-direction: column;
`;

const LoginPic = styled.img`
  opacity: 0.5;
  display: block;
  max-width: 50%;
  max-height: 60vh;
  border-radius: 25px;
`;
const LoginTitle = styled.h2`
  font-size: 41px;
  margin-bottom: 40px;
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

const InputBig = styled.input`
  font-size: 16px;
  color: #254969;
  min-width: 70%;
  min-height: 40px;
  border-radius: 10px;
  padding: 10px 16px;
  text-align: center;
  margin-bottom: 10px;
  border: 2px solid #a259ff;
  margin-bottom: 20px;
`;
const InputSmall = styled(InputBig)`
  width: 100px;
  min-height: 20px;
`;

function AddNewShop() {
  return (
    <MainDiv className="container">
      {/* <h1>Welcome to Login Page</h1> */}

      <HalfPageForm>
        <LoginTitle>Add New Shop:</LoginTitle>
        <InputSmall placeholder="Title"></InputSmall>
        <InputBig placeholder="Describe your shop"></InputBig>
        <InputSmall placeholder="Town"></InputSmall>
        <InputSmall placeholder="Image Url"></InputSmall>
        <InputSmall placeholder="Tags"></InputSmall>
        <RegisterButton type="submit">Submit</RegisterButton>
      </HalfPageForm>
    </MainDiv>
  );
}

export default AddNewShop;
