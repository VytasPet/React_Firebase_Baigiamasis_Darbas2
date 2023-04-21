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
const Content = styled.p`
  color: #cccccc;
  font-size: 22px;
  line-height: 35.2px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const AboutWhat = styled.p`
  color: #858584;
  font-family: Space Mono;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 30px;
`;

function SingleShopContent() {
  return (
    <>
      <MainImg src="src/assets/img/shophero.jpg" alt="" />

      <SingleShopMainDiv className="container">
        <PageTitle>Browse World Shops</PageTitle>
        <AboutWhat>Town:</AboutWhat>
        <Content>Kaunas</Content>
        <AboutWhat>Description:</AboutWhat>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, placeat officia veritatis nulla expedita, impedit ad quam saepe ipsum fuga dicta sed voluptate tempora debitis quo
          ratione repellendus fugiat incidunt ea beatae aliquid deserunt ipsam? Harum nemo quas quam! Cum eaque perferendis nisi eveniet. Totam esse ex excepturi molestias.
        </Content>
      </SingleShopMainDiv>
    </>
  );
}

export default SingleShopContent;
