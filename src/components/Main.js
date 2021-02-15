import React, { useState, useEffect } from 'react'
import Closet from '../Closet/Closet';
import Reports from '../Reports/Reports';
import Organize from '../Organize/Organize';
import Wishlist from '../Wishlist/Wishlist';
import Detail from '../Detail';
import WishlistDetail from '../WishlistDetail';
import Edit from '../Edit';
import WishlistEdit from '../WishlistEdit';
import AddItemWishlist from '../AddItemWishlist';
import AddItem from '../AddItem';
import { Switch,Route } from 'react-router-dom';
import { StyledMain } from '../styles/Container';
import firebase from '../firebase/firestore'

const Main = () => {

  const [clothes, setClothes] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [defaultValue] = useState('All Items');
  const [category, setCategory] = useState('All Items');

  const [limit, setLimit] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // props fpr Reports.js
  const [yearProp, setYearProp] = useState({})
  const [colorProp, setColorProp] = useState({});
  const [priceProp, setPriceProp] = useState({});

  const [selectedCategory] = useState('');

  const [loading, setLoading] = useState(false);

  // For Pagination
  const [filteredClothes, setFilteredClothes] = useState(clothes);

  const [activeLink, setActiveLink] = useState(1);

  const [num, setNums] = useState([])
  const [season, setSeason] = useState([])
  const [seasonProp, setSeasonProp] = useState([]);

  useEffect(() => {

    const db = firebase.firestore();

    const fetchData = async () => {
      setLoading(true);

      const closetData = await db.collection('closet').orderBy("createdAt", "desc").get();
      setClothes(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const wishlistData = await db.collection('wishlist').get();
      setWishlist(wishlistData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setFilteredClothes(clothes)

      setSeason(Array.from(new Set((closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))).map(el => el.season))))

      setSeasonProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        .reduce(function(r, a) {
          r[a.season] = (r[a.season] || 0) + 1;
          return r;
        }, {}))

      setColorProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        .reduce(function(r, a) {
          r[a.color] = (r[a.color] || 0) + 1;
          return r;
        }, {}))

      setYearProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        .reduce(function(r, a) {
          r[a.year] = (r[a.year] || 0) + 1;
          return r;
        }, {}))

      setNums(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reduce((result, user) => {
            (result[user.category] || (result[user.category] = [])).push(user);
            return result;
          }, {}))

      setLoading(false);
    };

      fetchData();
  }, []);


  useEffect(() => {

    const db = firebase.firestore();
    const limitData = db.collection('limit').doc('limit');

    limitData.get().then(function(doc) {
      if (doc.exists) {
          setLimit(doc.data());
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


  }, []);


  // Pagination
  const indexOfFirstPost = ((currentPage - 1) * postsPerPage);
  const indexOfLastPost = indexOfFirstPost + postsPerPage;

  let displayAllItems = (clothes.slice(indexOfFirstPost, indexOfLastPost));

  let displayItemsByCategory = (filteredClothes.slice(indexOfFirstPost, indexOfLastPost));

  // Dropdown
  const onSelectedChange = (e) => {

    setCategory(e);

    setFilteredClothes(clothes.filter(el => el.category === e));
    setCurrentPage(1);
    setActiveLink(1);

    if(e === 'All Items') {
      setFilteredClothes(clothes);
    } else {
      setFilteredClothes(clothes.filter(el => el.category === e));
    }
}

  // Pagination
  const paginate = (e) => {
    setCurrentPage(e);
    setActiveLink(e);
  }


  let totalPostsByCategory;

  if(category === 'All Items') {
    totalPostsByCategory = clothes.length;
  } else {
    totalPostsByCategory = filteredClothes.length
  }


var arr = [];

for (var color in colorProp) {
  arr.push([color, colorProp[color]]);
}

arr.sort(function(a, b) {
  return b[1] - a[1];
});

var firstThree = arr.slice(0, 5);


	return (
    <StyledMain>
      <Switch>
        <Route exact path="/digiqlo" render={() =>
          <Closet
            clothes={clothes}
            onSelectedChange={onSelectedChange}
            defaultValue={defaultValue}
            loading={loading}
            postsPerPage={postsPerPage}
            totalPosts={totalPostsByCategory}
            paginate={paginate}
            category={category}
            filteredClothes={filteredClothes}
            activeLink={activeLink}

            displayAllItems={displayAllItems}
            displayItemsByCategory={displayItemsByCategory}
          /> } />
        <Route exact path="/digiqlo/additem" component={AddItem} />
        <Route exact path="/digiqlo/closet/:id"   render={() =>
          <Detail
            clothes={clothes}
          /> } />
        <Route exact path="/digiqlo/reports" render={() =>
          <Reports
            clothes={clothes}
            season={season}
            seasonProp={seasonProp}
            colorProp={colorProp}
            yearProp={yearProp}
            />
          } />
        <Route exact path="/digiqlo/organize" render={() =>
          <Organize
            clothes={clothes}
            limit={limit}
            />
          } />
        <Route exact path="/digiqlo/wishlist" render={() =>
          <Wishlist
            wishlist={wishlist}
            clothes={clothes}
            num={num}
            limit={limit}
          />
        } />
        <Route exact path="/digiqlo/wishlist/:id" component={WishlistDetail} />
        <Route exact path="/digiqlo/edit/:id" component={Edit} />
        <Route exact path="/digiqlo/wishlist/edit/:id" component={WishlistEdit} />
        <Route exact path="/digiqlo/additemwishlist" component={AddItemWishlist} />
      </Switch>
    </StyledMain>
  )
}

export default Main;
