import React from "react";
import styled from "styled-components";
import { ButtonFullLink } from "../components/ui/Button";
import Flexas from "../components/ui/Flex";

const HeroBgc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;
const TextBox = styled.div`
  width: 48%;
`;
const LeftMainText = styled.h1``;

const HeroImg = styled.img`
  border-radius: 25px;
  width: 48%;
`;

const ShopHeroText = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  font-weight: 800;
  padding: 5rem;
  background-color: #cebbaad3;
`;

function HomePage() {
  return (
    <Flexas>
      <TextBox>
        <LeftMainText>Explore Shops World</LeftMainText>
        <ButtonFullLink>Sign Up</ButtonFullLink>
      </TextBox>
    </Flexas>
  );
}

export default HomePage;
