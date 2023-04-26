import React from "react";
import styled from "styled-components";
import SingleShopCard from "../components/shopcomponents/SingleShopCard";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { media } from "../components/ui/Responsive";
import { Link } from "react-router-dom";

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
  grid-row-gap: 20px;
  `}

  ${media.mobile`
  grid-template-columns: repeat(1, 1fr);
  `}
`;
const Filters = styled.p`
  color: #858584;
  font-family: Space Mono;
  font-size: 22px;
  font-weight: 700;
  display: inline-block;
  margin-right: 20px;
`;

const CardTags = styled.button`
  border: none;
  padding: 5px 10px;
  font-weight: 600;
  background-color: #a28dbe;
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
const ShowAll = styled(CardTags)`
  background-color: #ffffff;
  color: #3b3b3b;
`;

function ShopsPage() {
  const [fullFiltersArr, setfullFiltersArr] = useState([]);
  const [arrToShow, setarrToShow] = useState([]);
  const shopsCollRef = collection(db, "shops");
  const [value, loading, error] = useCollection(shopsCollRef);
  const [loadingToast, setloadingToast] = useState(null);

  function filterWord(word) {
    console.log("filt ===", word);
    if (word === "Show all") {
      setarrToShow(shopsWithUid);
    } else {
      setarrToShow(shopsWithUid.filter((shop) => shop.tags.includes(word)));
    }
  }

  let filts;
  useEffect(() => {
    filts = [];
    if (shopsWithUid) {
      shopsWithUid.map((shop) => shop.tags.map((tag) => filts.push(tag)));
      setarrToShow(shopsWithUid);
    }
    setfullFiltersArr(filts);
  }, [value]);

  // let filts;
  // useEffect(() => {
  //   if (shopsWithUid) {
  //     console.log("shopsWithUid ===", shopsWithUid);
  //     // shopsWithUid.map((tags) => tags.map((tag) => filts.push(tag)));
  //   }
  //   console.log("filts ===", filts);
  //   setfullFiltersArr();
  // }, [value]);

  async function deleteShopFunc(shopUid) {
    try {
      const itemRef = doc(db, "shops", shopUid);
      await deleteDoc(itemRef);
      console.log("Item deleted successfully");
      toast.success("Successfully deleted shop!");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error to delet shop!");
    }
  }

  const shopsWithUid = value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));

  return (
    <>
      <TitleDiv className="container">
        <PageTitle>Browse World Shops</PageTitle>
        {value && shopsWithUid.length > 1 && <AboutLog>You can find shops from all around the world!</AboutLog>}
      </TitleDiv>
      {value && shopsWithUid.length < 1 && <NoShops>No shops at the moment...</NoShops>}
      <div className="container">
        <Filters>Filters:</Filters>
        <ShowAll onClick={() => filterWord("Show all")}>Show all</ShowAll>
        {fullFiltersArr.map((filt) => (
          <CardTags onClick={() => filterWord(filt)}>{` ${filt}`}</CardTags>
        ))}
      </div>
      <ShopsSection className="container">{value && arrToShow.map((shop) => <SingleShopCard deleteShop={deleteShopFunc} key={shop.uid} item={shop} />)}</ShopsSection>
    </>
  );
}
export default ShopsPage;
