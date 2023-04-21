import { createGlobalStyle } from "styled-components";
import React from "react";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Space Mono', monospace, 'Work Sans', sans-serif;
    font-family: 'Work Sans', sans-serif;
    background-color: #2B2B2B;
    padding-left: 10px;
  padding-right: 10px;
  /* apridboti tik maximalu ploti */
  max-width: 114rem;
  /* skaiciuoti parastes automatiskai vienodai is kaires ir is desines */
  margin: 0 auto;
  }
`;
