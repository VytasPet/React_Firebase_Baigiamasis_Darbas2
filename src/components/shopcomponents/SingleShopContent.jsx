import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase/firebase";
import { media } from "../ui/Responsive";

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
  ${media.mobile`
  font-size: 41px;
  `}
`;
const SingleShopMainDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  ${media.mobile`
  margin: 0;
  `}
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
  const { shopUid } = useParams();
  console.log("shopUid ===", shopUid);

  const docRef = doc(db, "shops", shopUid);
  const [value, loading, error] = useDocument(docRef);
  const [shopObj, setShopObj] = useState(null);
  const [picShop, setPicShop] = useState(null);

  useEffect(() => {
    if (value) {
      const obj = value.data();
      setShopObj(obj);
      setPicShop(obj?.imageUrl || "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png");
    }
  }, [value]);

  return (
    <>
      {shopObj && (
        <>
          <MainImg src={picShop} alt={shopObj.title} />

          <SingleShopMainDiv className="container">
            <PageTitle>{shopObj.shopName}</PageTitle>
            <AboutWhat>Town:</AboutWhat>
            <Content>{shopObj.town}</Content>
            <AboutWhat>Year:</AboutWhat>
            <Content>{shopObj.startYear}</Content>
            <AboutWhat>Description:</AboutWhat>
            <Content>{shopObj.description}</Content>
          </SingleShopMainDiv>
        </>
      )}
    </>
  );
}

export default SingleShopContent;
