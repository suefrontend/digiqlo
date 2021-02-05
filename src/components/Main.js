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
import {
	Switch,
	Route
} from 'react-router-dom';
import { StyledMain } from '../styles/Container';
import firebase from '../firebase/firestore'

const Main = () => {

  const [clothes, setClothes] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [defaultValue] = useState('All Items');
  const [category, setCategory] = useState('All Items');

  // const [active, setActive] = useState('');

  const [test1, setTest1] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [yearProp, setYearProp] = useState({})
  const [colorProp, setColorProp] = useState({});
  const [priceProp, setPriceProp] = useState({});


  const [testPrice, setTestPrice] = useState({})

// console.log("filteredClothes", filteredClothes)
  //const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  // const [indexOfFirstPost, setIndexOfFirstPost] = useState((currentPage - 1) * postsPerPage);


  // const [currentPosts1, setCurrentPosts1] = useState(clothes.slice(indexOfFirstPost, postsPerPage))
  // // clothes.slice(indexOfFirstPost, postsPerPage)


  // // const [currentPosts2, setCurrentPosts2] = useState(() => listOf10MillionItems.filter())
  // const [currentPosts2, setCurrentPosts2] = useState(filteredClothes.slice(indexOfFirstPost, postsPerPage));








  const [selectedCategory] = useState('');
  // const [setSelectedCategoryClothes] = useState();
  const [loading, setLoading] = useState(false);


  const [activeLink, setActiveLink] = useState(1);

  const [currentPostsTest, setCurrentPostsTest] = useState();

  //const indexOfLastPost = indexOfFirstPost + postsPerPage;
  //const [indexOfLastPost, setIndexOfLastPost] = useState(indexOfFirstPost + postsPerPage);
// const [limited, setLimited] = useState(clothes.slice(indexOfFirstPost, postsPerPage))

  // const onSelectedChange = React.useCallback((e) => {
  //     setCategory(e);
  //     setFilteredClothes(clothes.filter(el => el.category === e));
  //     setActiveLink(1);
  // }, [clothes])

// const [num, setNums] = useState()
const [num, setNums] = useState([])
const [test, setTest] = useState([])
const [season, setSeason] = useState([])
const [seasonProp, setSeasonProp] = useState([]);

  useEffect(() => {

    const db = firebase.firestore();

    const fetchData = async () => {
      setLoading(true);

      const closetData = await db.collection('closet').orderBy("createdAt", "desc").get();
      const wishlistData = await db.collection('wishlist').get();
      const testData = await db.collection('test').get();

      setClothes(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTest(testData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setFilteredClothes(clothes)
      setWishlist(wishlistData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));



      setSeason(Array.from(new Set((closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))).map(el => el.season))))


      setSeasonProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      .reduce(function(r, a) {
        // (r[user.season] || (r[user.season] = [])).push(a);
        r[a.season] = (r[a.season] || 0) + 1;
        return r;
      }, {}))

      setColorProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      .reduce(function(r, a) {
        // (r[user.season] || (r[user.season] = [])).push(a);
        r[a.color] = (r[a.color] || 0) + 1;
        return r;
      }, {}))

      setYearProp(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      .reduce(function(r, a) {
        // (r[user.season] || (r[user.season] = [])).push(a);
        r[a.year] = (r[a.year] || 0) + 1;
        return r;
      }, {}))







      // setNums(clothes)
      setNums(closetData.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reduce((result, user) => {

            (result[user.category] || (result[user.category] = [])).push(user);
            return result;
          }, {}))

      setLoading(false);
    };

      fetchData();
  }, []);

  const [limit, setLimit] = useState([])
  // console.log(createdAt);


  useEffect(() => {
    const db = firebase.firestore();

    const fetchData2 = async () => {

    // const db = await ;
      // var testObj = await firebase.firestore().collection('closet')
      // .where("category", "==", "shoes");




      // console.log("testObj", testObj)

      const yearDataTest = await db.collection('closet').where("year", "==", 2017).get();

      setTestPrice(yearDataTest.docs.map((doc) => ({ ...doc.data(), id: doc.id })));


  //   var citiesRef = await db.collection('closet')
  //   .get().then(function(doc) {
  //     if (doc.exists) {
  //         // console.log("Document data:", );
  //         console.log((doc.data()));

  //     } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //     }
  // }).catch(function(error) {
  //     console.log("Error getting document:", error);
  // });

    // setTestPrice(citiesRef.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    // citiesRef.forEach((postDoc) => {
    //   console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
    // })

    }

  fetchData2();
  console.log("testPrice", testPrice)
  }, [])

  console.log("testPrice", testPrice)

  useEffect(() => {

    const db = firebase.firestore();

    // const fetchData = async () => {

      const limitData = db.collection('limit').doc('limit');

    //   setLimit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));



    // };

    //   fetchData();


    limitData.get().then(function(doc) {
      if (doc.exists) {
          // console.log("Document data:", );
          setLimit(doc.data());

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });


  }, []);


console.log("yearProp", yearProp)
  const [filteredClothes, setFilteredClothes] = useState(clothes);


  const indexOfFirstPost = ((currentPage - 1) * postsPerPage);
  const indexOfLastPost = indexOfFirstPost + postsPerPage;

  // const currentDisplayedItems = (clothes.slice(indexOfFirstPost, indexOfLastPost));
  let currentDisplayedItems = (clothes.slice(indexOfFirstPost, indexOfLastPost));

  let currentDisplayedItems2 = (filteredClothes.slice(indexOfFirstPost, indexOfLastPost));

  const onSelectedChange = (e) => {
    //console.log("changed")
    setCategory(e);
    //console.log("category", category)

    setFilteredClothes(clothes.filter(el => el.category === e));
    setCurrentPage(1);
    setActiveLink(1);

    //console.log("filteredClothes", filteredClothes)

    if(e === 'All Items') {
      //console.log("category: All Items")
      setFilteredClothes(clothes);
    } else {
      //console.log("category: ", e);
      setFilteredClothes(clothes.filter(el => el.category === e));
    }
}


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


console.log("season", season)

  const numShoes = clothes.reduce(function(n, cloth) {
    return n + (cloth.category === 'shoes');
  }, 0);

const [topColor, setTopColor] = useState([])
  // create an array
var arr = [];


// console.log("ttttt", Object.values(colorProp).sort((a, b) => b - a))

// loop through the object and add values to the array
for (var color in colorProp) {
  arr.push([color, colorProp[color]]);
}

arr.sort(function(a, b) {
  return b[1] - a[1];
});

// grab the first 10 numbers
var firstThree = arr.slice(0, 5);



  // target1.forEach(el => {
  //   console.log("el", el)
  // })


////








	return (
    <StyledMain>
      <Switch>
        <Route exact path="/" render={() =>
          <Closet

            // currentPosts2={currentPosts2}
            clothes={clothes}
            onSelectedChange={onSelectedChange}
            // selectedCategory={selectedCategory}
            defaultValue={defaultValue}
            loading={loading}
            postsPerPage={postsPerPage}
            totalPosts={totalPostsByCategory}
            paginate={paginate}
            // setSelectedCategoryClothes={setSelectedCategoryClothes}
            cat={category}
            filteredClothes={filteredClothes}
            activeLink={activeLink}
            testCat={category}
            currentDisplayedItems={currentDisplayedItems}
            currentDisplayedItems2={currentDisplayedItems2}
          /> } />
        <Route exact path="/additem" component={AddItem} />
        <Route exact path="/closet/:id"   render={() =>
          <Detail
            clothes={clothes}
            // currentPosts1={currentPosts1}
            // currentPosts2={currentPosts2}

          /> } />
        <Route exact path="/reports" render={() =>
          <Reports
            clothes={clothes}
            season={season}
            seasonProp={seasonProp}
            colorProp={colorProp}
            yearProp={yearProp}
            />
          } />
        <Route exact path="/organize" render={() =>
          <Organize
            clothes={clothes}
            numShoes={numShoes}
            limit={limit}
            />
          } />
        <Route exact path="/wishlist" render={() =>
          <Wishlist
            wishlist={wishlist}
            clothes={clothes}
            num={num}
            limit={limit}
          />
        } />
        <Route exact path="/wishlist/:id" component={WishlistDetail} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/wishlist/edit/:id" component={WishlistEdit} />
        <Route exact path="/additemwishlist" component={AddItemWishlist} />
      </Switch>
    </StyledMain>
  )
}

export default Main;
