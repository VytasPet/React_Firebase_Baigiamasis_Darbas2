import React from "react";
import styled from "styled-components";
import SingleShopCard from "../components/shopcomponents/SingleShopCard";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { media } from "../components/ui/Responsive";
import { useAuthCtx } from "../store/AuthProvider";

const PageTitle = styled.h1`
  font-size: 67px;
  line-height: 73.7px;
  margin-bottom: 30px;
  color: white;

  ${media.mobile`
  font-size: 47px;
    line-height: 53.7px;
    text-align: center;
  `}
`;
const TitleDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  border-bottom: 1px solid white;

  ${media.mobile`
margin: 0;
  `}
`;
const AboutLog = styled.p`
  color: #cccccc;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const NoShops = styled(AboutLog)`
  margin-top: 30px;
  font-size: 32px;
  text-align: center;
`;

const ShopsSection = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;

  ${media.tablet`
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 10px;
  `}

  ${media.mobile`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

function MyShopsPage() {
  const { user } = useAuthCtx();
  const [toShowArr, settoShowArr] = useState([]);
  const shopsCollRef = collection(db, "shops");
  const [value, loading, error] = useCollection(shopsCollRef);
  const [loadingToast, setloadingToast] = useState(null);

  useEffect(() => {
    if (loading) {
      setloadingToast(toast.loading("Loading..."));
    } else {
      toast.dismiss(loadingToast);
    }
  }, [loading]);

  useEffect(() => {
    if (value) {
      const shopsWithUid = value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
      const filteredArr = shopsWithUid.filter((shop) => shop.userUid === user.uid);
      console.log("filteredArr ===", filteredArr);
      settoShowArr(filteredArr);
    }
  }, [value, user.uid]);

  return (
    <>
      <TitleDiv className="container">
        <PageTitle>My Uploaded Shops</PageTitle>
      </TitleDiv>
      {value && toShowArr.length < 1 && <NoShops>No shops at the moment...</NoShops>}
      <ShopsSection className="container">{value && toShowArr.map((shop) => <SingleShopCard key={shop.uid} item={shop} />)}</ShopsSection>
    </>
  );
}
export default MyShopsPage;
