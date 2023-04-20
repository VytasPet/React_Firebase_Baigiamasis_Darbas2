import React from "react";
import styled from "styled-components";
import img from "../../assets/img/shophero.jpg";

const HeroBgc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
  position: relative;
`;
const ShopHeroText = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  font-weight: 800;
  padding: 5rem;
  background-color: #cebbaad3;
`;

function Hero() {
  return (
    <HeroBgc>
      <ShopHeroText>Explore Shops World</ShopHeroText>
    </HeroBgc>
  );
}

export default Hero;
