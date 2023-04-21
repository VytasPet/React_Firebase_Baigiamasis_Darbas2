import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footeris = styled.footer`
  background-color: #3b3b3b;
  padding: 40px 0px;
  width: 100%;
  margin-top: 20px;
`;
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const FooterDiv = styled.div``;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-family: Space Mono;
  display: block;
  margin-bottom: 25px;
`;
const AboutLog = styled.p`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const FooterLinks = styled(Link)`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  display: block;
  text-decoration: underline;
`;
const SubButton = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #a259ff;
  color: white;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px 16px;
  margin-left: 10px;
  border: none;
`;

const InputFoot = styled.input`
  border: none;
  font-size: 16px;
  color: #254969;
  border-radius: 20px;
  padding: 10px 16px;
  text-align: center;
  margin-bottom: 15px;
`;
const SucEmail = styled(AboutLog)`
  color: white;
`;

function Footer() {
  const [emailSent, setemailSent] = useState(false);

  function submitIn(e) {
    event.preventDefault();
    const emailVal = e.target.subEmail.value;
    setemailSent(true);

    console.log("inputval ===", e.target.subEmail.value);
  }
  useEffect(() => {
    setTimeout(() => {
      setemailSent(false);
    }, 3000);
  }, [submitIn]);

  return (
    <Footeris>
      <FooterContent className="container">
        <FooterDiv>
          <Logo>Shops explorer</Logo>
          <AboutLog>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nesciunt itaque recusandae quasi aliquam eum.</AboutLog>
        </FooterDiv>
        <FooterDiv>
          <Logo>Explore</Logo>
          <FooterLinks>Largest shops</FooterLinks>
          <FooterLinks>Luxury shops</FooterLinks>
          <FooterLinks>Cheap shops</FooterLinks>
        </FooterDiv>
        <FooterDiv>
          <Logo>Join our weekly digest</Logo>
          <form onSubmit={submitIn}>
            <InputFoot type="email" id="subEmail" placeholder="Enter your email here:" />
            {emailSent && <SucEmail>You just successfully subsribed!</SucEmail>}
            <SubButton type="submit">Submit</SubButton>
          </form>
        </FooterDiv>
      </FooterContent>
    </Footeris>
  );
}

export default Footer;
