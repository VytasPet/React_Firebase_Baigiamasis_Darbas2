import React from "react";
import styled from "styled-components";

const MainImg = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const PageTitle = styled.h1`
  font-size: 51px;
  line-height: 73.7px;
  margin-bottom: 10px;
  color: white;
`;
const SingleShopMainDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Town = styled.p`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const AboutWhat = styled.p`
  color: #858584;
  font-family: Space Mono;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  margin-top: 10px;
`;

function SingleShopContent() {
  return (
    <>
      <MainImg src="src/assets/img/shophero.jpg" alt="" />

      <SingleShopMainDiv className="container">
        <PageTitle>Browse World Shops</PageTitle>
        <AboutWhat>Town:</AboutWhat>
        <Town>Kaunas</Town>
      </SingleShopMainDiv>
    </>
  );
}

export default SingleShopContent;
