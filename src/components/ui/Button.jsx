import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonFullLink = styled(Link)`
  background-color: #a259ff;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 16px;
  color: white;
`;
export const ButtonEmptyLink = styled(ButtonFullLink)`
  border: 1px solid #a259ff;
  background-color: #a159ff0;
`;
export const ButtonSubmit = styled.button`
  background-color: #a259ff;
  border-radius: 20px;
  padding: 20px 50px;
`;
