import React from "react";
import styled from "styled-components";

const ShopCard = styled.div`
  height: 469px;
  width: 330px;
  border: 1px solid white;
  border-radius: 20px;
`;
const CardImg = styled.img`
  width: 100%;
  height: 295px;
  max-height: 295px;
  display: block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  max-width: 100%;
  max-height: 174px;
  padding: 20px 30px;
  text-align: center;
  background-color: #3b3b3b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;
`;
const CardTown = styled.p`
  font-weight: 400;
  font-size: 16px;
  font-family: Space Mono;
  max-width: 100%;
  padding: 20px 30px;
  margin-top: 5px;
`;
const CardTitle = styled.h5`
  font-weight: 600;
  font-size: 22px;
  line-height: 30.8px;
`;
const CardTags = styled.p`
  padding: 5px 10px;
  font-weight: 600;
  background-color: #a259ff;
  font-size: 12px;
  margin-right: 5px;
  display: inline-block;
  border-radius: 20px;
`;

function SingleShopCard({ title, describe, town, tags }) {
  return (
    <ShopCard>
      <CardImg src="src/assets/img/addShop.jpg" alt="" />
      <CardInfo>
        <CardTitle>{}</CardTitle>
        <CardTown>Kaunas</CardTown>
        <CardTags>Mau</CardTags>
        <CardTags>pyp</CardTags>
      </CardInfo>
    </ShopCard>
  );
}

export default SingleShopCard;
