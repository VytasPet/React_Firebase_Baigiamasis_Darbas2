import styled from "styled-components";

const Flexas = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || ""};
  gap: ${(props) => props.gap || ""};
`;

export default Flexas;
