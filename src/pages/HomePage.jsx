import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../components/ui/Responsive";
import { useAuthCtx } from "../store/AuthProvider";

const HalfHero = styled.div`
  width: 48%;
  ${media.mobile`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-bottom:20px;
  align-items:center;
  `}
`;
const LeftMainText = styled.h1`
  font-size: 67px;
  line-height: 73.7px;
  margin-bottom: 30px;
  color: white;

  ${media.mobile`
  font-size:47px;
  line-height: 53.7px;
  text-align: center;
  `}
`;

const HeroArea = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;

  ${media.mobile`
  margin-top: 35px;
  margin-bottom: 10px;
  flex-direction: column;
  `}
`;
const HeroPic = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  opacity: 0.5;
  display: block;
`;
const PicAboutArea = styled.div`
  background-color: #3b3b3b;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 20px 30px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 300;

  ${media.mobile`
  padding: 10px 20px;
  `}
`;
const PicText = styled.p`
  ${media.mobile`
  font-size:10px;
  `}
`;

const SignUpBtn = styled(Link)`
  background-color: #a259ff;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-align: center;

  ${media.mobile`
 max-width:50%;
 padding: 20px 50px;
  `}
`;

function HomePage() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <HeroArea className="container">
      <HalfHero>
        <LeftMainText>Explore Shops World</LeftMainText>
        {!isLoggedIn && <SignUpBtn to={"/register"}>Sign Up</SignUpBtn>}
      </HalfHero>
      <HalfHero>
        <HeroPic src="src/assets/img/shophero.jpg" alt="hero pic" />
        <PicAboutArea>
          <PicText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi laborum tempore exercitationem modi nobis libero earum provident ea harum.</PicText>
        </PicAboutArea>
      </HalfHero>
    </HeroArea>
  );
}

export default HomePage;
