import styled from "styled-components";

const Begin = styled.div`
  margin-top: 10rem;
`;

export const Startas = ({ children }) => {
  return <Begin className="container">{children}</Begin>;
};
