import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthCtx } from "../../store/AuthProvider";

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
  const { isLoggedIn } = useAuthCtx();
  const [emailSent, setemailSent] = useState(false);

  function submitIn(e) {
    event.preventDefault();
    setemailSent(true);

    setTimeout(() => {
      setemailSent(false);
      e.target.subEmail.value = "";
    }, 3000);
  }
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setemailSent(false);
  //     }, 3000);
  //   }, [submitIn]);

  return (
    <Footeris>
      <FooterContent className="container">
        <FooterDiv>
          <Logo>Shops explorer</Logo>
          <AboutLog>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nesciunt itaque recusandae quasi aliquam eum.</AboutLog>
        </FooterDiv>
        <FooterDiv>
          <Logo>Explore</Logo>
          {isLoggedIn && <FooterLinks to={"/shops"}>All Shops</FooterLinks>}
          {!isLoggedIn && <FooterLinks to={"/register"}>All Shops</FooterLinks>}
          {/* <FooterLinks>Luxury shops</FooterLinks>
          <FooterLinks>Cheap shops</FooterLinks> */}
        </FooterDiv>
        <FooterDiv>
          <Logo>Join our weekly digest</Logo>
          <form onSubmit={submitIn}>
            <InputFoot type="email" id="subEmail" placeholder="Enter your email here:" />
            <SubButton type="submit">Submit</SubButton>
            {emailSent && <SucEmail>You just successfully subscribed!</SucEmail>}
          </form>
        </FooterDiv>
      </FooterContent>
    </Footeris>
  );
}

export default Footer;
