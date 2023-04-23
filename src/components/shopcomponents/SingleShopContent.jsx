import { doc } from "firebase/firestore";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase/firebase";

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
  const { shopUid } = useParams();
  console.log("shopUid ===", shopUid);

  const docRef = doc(db, "shops", shopUid);
  const [value, loading, error] = useDocument(docRef);
  const shopObj = value?.data();

  console.log("shopObj ===", shopObj);

  return (
    <>
      <MainImg src={shopObj?.imageUrl} alt="" />

      <SingleShopMainDiv className="container">
        <PageTitle>{shopObj?.title}</PageTitle>
        <AboutWhat>Town:</AboutWhat>
        <Content>{shopObj?.town}</Content>
        <AboutWhat>Description:</AboutWhat>
        <Content>{shopObj?.description}</Content>
      </SingleShopMainDiv>
    </>
  );
}

export default SingleShopContent;
