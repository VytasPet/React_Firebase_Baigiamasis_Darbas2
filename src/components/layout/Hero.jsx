import React from "react";
import styled from "styled-components";

const HeroBgc = styled.div`
  padding: 3rem;
`;
const Pic = styled.div`
  background: url(./hero.jpg);
  background-size: cover;
`;

function Hero() {
  return (
    <HeroBgc>
      <img src="./hero.jpg" alt="" />
      <Pic>
        <p>labas</p>
      </Pic>
    </HeroBgc>
  );
}

export default Hero;
