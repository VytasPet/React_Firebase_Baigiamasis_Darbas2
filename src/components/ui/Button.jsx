import { Link } from "react-router-dom";
import styled from "styled-components";
Link;

export const ButtonFullLink = styled(Link)`
  background-color: #a259ff;
  border-radius: 2rem;
  padding: 2rem 3rem;
  font-size: 1.6rem;
  color: white;
`;
export const ButtonEmptyLink = styled(ButtonFullLink)`
  border: 1px solid #a259ff;
  background-color: #a159ff0;
`;
export const ButtonSubmit = styled.button`
  background-color: #a259ff;
  border-radius: 2rem;
  padding: 2rem 5rem;
`;
