import React from "react";
import styled from "styled-components";

const Footeris = styled.footer`
  background-color: #3b3b3b;
  padding: 40px 0px;
  width: 100%;
  margin-top: 40px;
`;
function Footer() {
  return (
    <Footeris>
      <p>labas</p>
    </Footeris>
  );
}

export default Footer;
