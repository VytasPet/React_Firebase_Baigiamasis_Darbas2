import React from "react";
import styled from "styled-components";
import { ButtonFullLink } from "../components/ui/Button";
import { useAuthCtx } from "../store/AuthProvider";

const HeroBgc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;
const HalfHero = styled.div`
  width: 48%;
`;
const LeftMainText = styled.h1`
  font-size: 67px;
  line-height: 73.7px;
  margin-bottom: 30px;
  color: white;
`;

const HeroImg = styled.img`
  border-radius: 25px;
  width: 50%;
`;

const ShopHeroText = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  font-weight: 800;
  padding: 5rem;
  background-color: #cebbaad3;
`;
const HeroArea = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
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
`;

function HomePage() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <HeroArea className="container">
      <HalfHero>
        <LeftMainText>Explore Shops World</LeftMainText>
        {!isLoggedIn && <ButtonFullLink to={"/register"}>Sign Up</ButtonFullLink>}
      </HalfHero>
      <HalfHero>
        <HeroPic src="src/assets/img/shophero.jpg" alt="" />
        <PicAboutArea>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi laborum tempore exercitationem modi nobis libero earum provident ea harum.</p>
        </PicAboutArea>
      </HalfHero>
    </HeroArea>
  );
}

export default HomePage;
