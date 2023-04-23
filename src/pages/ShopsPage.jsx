import React from "react";
import styled from "styled-components";
import SingleShopCard from "../components/shopcomponents/SingleShopCard";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
`;

function ShopsPage() {
  const shopsCollRef = collection(db, "shops");
  const [value, loading, error] = useCollection(shopsCollRef);
  const loadingToast = toast.loading("Loading...");

  const shopsWithUid = value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  console.log("shopsWithUid ===", shopsWithUid);
  toast.dismiss(loadingToast);
  // useEffect(() => {
  //   console.log("shopsWithUid ===", shopsWithUid);
  //   settoShowShops(shopsWithUid);
  // }, [value]);

  // const displayShops = toShowShops;

  // settoShowShops(shopsWithUid);

  return (
    <>
      <TitleDiv className="container">
        <PageTitle>Browse World Shops</PageTitle>
        <AboutLog>You can find shops from all around the world!</AboutLog>
        {value && shopsWithUid.length < 1 && <AboutLog>No shops at the moment...</AboutLog>}
      </TitleDiv>
      <ShopsSection className="container">{value && shopsWithUid.map((shop) => <SingleShopCard key={shop.uid} item={shop} />)}</ShopsSection>
    </>
  );
}

export default ShopsPage;
