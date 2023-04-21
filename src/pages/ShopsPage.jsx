import React from "react";
import styled from "styled-components";
import SingleShopCard from "../components/shopcomponents/SingleShopCard";

const PageTitle = styled.h1`
  font-size: 67px;
  line-height: 73.7px;
  margin-bottom: 30px;
  color: white;
`;
const TitleDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  border-bottom: 1px solid white;
`;
const AboutLog = styled.p`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const ShopsSection = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`;

function ShopsPage() {
  return (
    <>
      <TitleDiv className="container">
        <PageTitle>Browse World Shops</PageTitle>
        <AboutLog>You can find shops from all around the world!</AboutLog>
      </TitleDiv>
      <ShopsSection className="container">
        <SingleShopCard />
      </ShopsSection>
    </>
  );
}

export default ShopsPage;
