import React, { useState, useEffect } from 'react';
import { StyledH3 } from '../styles/Typography';
import CardList from '../components/CardList';
import firebase from '../firebase/firestore'

const Closet = () => {

  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {

      const closetData = await db.collection('closet').orderBy("createdAt", "desc").get();
      setClothes(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }

    fetchData();
  }, [])

  return (
    <>
      <StyledH3>Closet</StyledH3>
      <CardList data={clothes} />
    </>
  )
}

export default Closet;
