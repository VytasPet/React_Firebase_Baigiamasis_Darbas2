import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "./Responsive";

export const ButtonFullLink = styled(Link)`
  background-color: #a259ff;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-align: center;

  ${media.mobile`
 max-width:50%;
  `}
`;
export const LoginButton = styled(ButtonFullLink)`
  margin-left: 30px;
  ${media.mobile`
  margin-left: 15px;
  padding: 10px 15px;
  font-size: 12px;
  `}
`;

export const RegisterButton = styled.button`
  background-color: #a259ff;
  border-radius: 30px;
  border: none;
  padding: 20px 30px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-align: center;
  width: 70%;
  margin-top: 30px;
  padding: 12px 30px;

  ${media.tablet`
  margin-top:30px;
  `}
`;
export const RegisterWithGoogle = styled(RegisterButton)`
  border: 1px solid #a259ff;
  background-color: #a159ff27;
  margin-top: 70px;
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
