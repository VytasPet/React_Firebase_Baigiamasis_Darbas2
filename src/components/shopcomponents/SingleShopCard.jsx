import React from "react";
import styled from "styled-components";

const ShopCard = styled.div`
  height: 469px;
  max-height: 469px;
  max-width: 330px;
  border: 1px solid white;
  border-radius: 20px;
`;
const CardImg = styled.img`
  width: 100%;
  height: 68%;
  max-height: ;
  display: block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  max-width: 100%;
  height: 25%;
  max-height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-top: 5px;
`;
const CardTitle = styled.h5`
  font-weight: 600;
  font-size: 22px;
  line-height: 30.8px;
`;
const CardTags = styled.span`
  padding: 5px 10px;
  font-weight: 600;
  background-color: #a259ff;
  font-size: 12px;
  margin-right: 5px;
  display: inline-block;
  border-radius: 20px;
`;

function SingleShopCard({ item }) {
  console.log("item ===", item);
  const tagas = item?.tags.split(" ");

  return (
    <ShopCard>
      <CardImg src="src/assets/img/addShop.jpg" alt="" />
      <CardInfo>
        <CardTitle>{item?.title}</CardTitle>
        <CardTown>{item?.town}</CardTown>
        <div>
          {tagas?.map((obj) => (
            <CardTags key={obj}>{obj}</CardTags>
          ))}
        </div>
      </CardInfo>
    </ShopCard>
  );
}

export default SingleShopCard;
