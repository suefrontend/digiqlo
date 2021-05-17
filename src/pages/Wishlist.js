import React, { useState, useEffect } from 'react';
import { StyledH3 } from '../styles/Typography';
import { StyledTable } from '../styles/Table';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firestore';

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {
      const wishlistData = await db.collection('wishlist').orderBy("createdAt", "desc").get();
      setWishlist(wishlistData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const closetData = await db.collection('closet').orderBy("createdAt", "desc").get();
      setClothes(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const limitData = await db.collection('limit').get();
      limitData.forEach((doc) => {setLimit(doc.data())})
    }

    fetchData();

  }, [])

    // Number of items per category
    const numByCategory = clothes.reduce((acc, current) => {
      if(!acc[current.category]) {
        acc[current.category] = 0;
      }
      acc[current.category] += 1;
      return acc;
    }, {});

    console.log("numByCategory", numByCategory)
    console.log("limit", limit)

  const renderTable = wishlist.map(item => {

    return (
        <tr key={item.id}>
          <td><Link to={`/wishlist/${item.id}`}><figure><img src={item.image} alt={item.label} /></figure></Link></td>
          <td>{item.category}</td>
          <td>{numByCategory[item.category]}</td>
          <td>{limit[item.category]}</td>
          <td>{numByCategory[item.category] - limit[item.category]}</td>
        </tr>
    )
  })

  return (
    <>
      <StyledH3>Wishlist</StyledH3>
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            <th>Category</th>
            <th>Total</th>
            <th>Limit</th>
            <th>Adjust</th>
          </tr>
        </thead>
        <tbody>
          {renderTable}
        </tbody>
    </StyledTable>
    </>
  )
}

export default Wishlist;
