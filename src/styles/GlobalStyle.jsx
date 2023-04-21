import { createGlobalStyle } from "styled-components";
import React from "react";

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Space Mono', monospace, 'Work Sans', sans-serif;
    font-family: 'Work Sans', sans-serif;
    background-color: #2B2B2B;
    margin: 0;
    box-sizing: border-box;
  }

  .container{
    padding: 20px 50px;
  /* apridboti tik maximalu ploti */
  max-width: 1140px;
  margin:0;
  /* skaiciuoti parastes automatiskai vienodai is kaires ir is desines */
  margin: 0 auto;
  box-sizing: border-box;
  }
  
  footer{
    min-width: 100%;
  }
  a {
  text-decoration: none;
  color: inherit;
}
button {
  cursor: pointer;
}


img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
`;
