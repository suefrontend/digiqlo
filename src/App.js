import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { StyledFlexLayout } from './styles/Layout';
import { StyledMain } from './styles/Main';
import './App.css';
import Closet from './pages/Closet';
import Detail from './pages/Detail';
import Wishlist from './pages/Wishlist';
import WishlistDetail from './pages/WishlistDetail';
import Organize from './pages/Organize';
import Reports from './pages/Reports';
import Navigation from './components/Navigation';
import AddItem from './pages/AddItem';
import Edit from './pages/Edit';
import firebase from './firebase/firestore';

const App = () => {

  const [clothes, setClothes] = useState([]);
  const [limit, setLimit] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {
      const closetData = await db.collection('closet').orderBy("createdAt", "desc").get();
      setClothes(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const limitData = await db.collection('limit').get();
      limitData.forEach((doc) => {setLimit(doc.data())})

      const wishlistData = await db.collection('wishlist').orderBy("createdAt", "desc").get();
      setWishlist(wishlistData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    fetchData();

  }, [])

  // Data for Reports
  const color = clothes.reduce((acc, cloth) => {
    acc[cloth.color] = (acc[cloth.color] || 0) + 1;
    return acc;
  }, {});

  // Data for Reports
  const price = clothes.reduce((acc, current) => {
    if(!acc[current.year]) {
      acc[current.year] =  0;
    }
    acc[current.year] += current.price;
    return acc;
  }, {});

  // Data for Reports
  const year = clothes.reduce((acc, cloth) => {
    acc[cloth.year] = (acc[cloth.year] || 0) + 1;
    return acc;
  }, {});

  // Data for Reports
  const season = clothes.reduce((acc, cloth) => {
    acc[cloth.season] = (acc[cloth.season] || 0) + 1;
    return acc;
  }, {});

  // Number of items per category
  const numByCategory = clothes.reduce((acc, current) => {
    if(!acc[current.category]) {
      acc[current.category] = 0;
    }
    acc[current.category] += 1;
    return acc;
  }, {});

  // Total numbers of cloth items
  const totalNumOfClothes = Object.values(numByCategory).reduce((acc, current) => {
    return acc + current
  }, 0);

  // Sum of limit
  const sumOfLimit = Object.values(limit).reduce((acc, current) => {
    return acc + current
  }, 0);

	return (
    <StyledFlexLayout>
        <Navigation />
        <StyledMain>
          <Switch>
            <Route exact path="/closet" component={Closet} />
            <Route
              path="/organize"
              render={() =>
                <Organize clothes={clothes} limit={limit} numByCategory={numByCategory} totalNumOfClothes={totalNumOfClothes} sumOfLimit={sumOfLimit} />
              }
            />
            <Route
              path="/reports"
              render={() =>
                <Reports color={color} year={year} season={season} price={price} />
              }
            />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/wishlist/:id" component={WishlistDetail} />
            <Route path="/additem" component={AddItem} />
            <Route path="/edit/:id" component={Edit} />
            <Route exact path="/closet/:id" component={Detail} />
          </Switch>
        </StyledMain>
    </StyledFlexLayout>
  )
}

export default App;
