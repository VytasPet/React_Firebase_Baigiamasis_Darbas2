import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../ui/Responsive";

const ShopCard = styled.div`
  height: 469px;
  max-height: 469px;
  min-width: 100%;
  max-width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;

  ${media.tablet`
  height: 369px;
  max-height: 369px;
  `}

  ${media.mobile`
  height: 229px;
  max-height: 229px;
  `}
`;
const CardImg = styled.img`
  width: 100%;
  height: 68%;
  display: block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  max-width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 30px;
  text-align: center;
  background-color: #3b3b3b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;

  ${media.mobile`
  padding: 10px 15px;
  `}
`;
const CardTown = styled.p`
  font-weight: 400;
  font-size: 16px;
  font-family: Space Mono;
  max-width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;

  ${media.mobile`
  margin-top:0;
  margin-bottom: 0;
  font-size: 12px;
  `}
`;
const CardTitle = styled.h5`
  font-weight: 600;
  font-size: 22px;
  line-height: 30.8px;

  ${media.mobile`
  font-size: 16px;
  `}
`;
const CardTags = styled.span`
  padding: 5px 10px;
  font-weight: 600;
  background-color: #a259ff;
  font-size: 12px;
  margin-right: 5px;
  border-radius: 20px;
  :last-child {
    margin-right: 0;
  }

  ${media.mobile`
  font-size: 8px;
  padding: 3px 6px;
  `}
`;

function SingleShopCard({ item }) {
  const navigate = useNavigate();
  const tagas = item?.tags.split(",").map((tag) => tag.trim());
  const picShop = item?.imageUrl;

  return (
    <ShopCard>
      <Link to={`/shops/${item?.uid}`}>
        <CardImg src={picShop} alt="" />
      </Link>
      <CardInfo>
        <CardTitle>{item?.shopName}</CardTitle>
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
