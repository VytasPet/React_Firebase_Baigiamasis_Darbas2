import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonFullLink = styled(Link)`
  background-color: #a259ff;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-align: center;
`;
export const LoginButton = styled(ButtonFullLink)`
  margin-left: 30px;
`;
export const RegisterButton = styled(ButtonFullLink)`
  width: 70%;
  margin-top: 30px;
  padding: 12px 30px;
`;

export const ButtonEmptyLink = styled(ButtonFullLink)`
  border: 1px solid #a259ff;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  background-color: #a259ff;
  border-radius: 20px;
  padding: 20px 50px;
  display: inline-block;
`;
