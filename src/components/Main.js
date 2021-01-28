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



  const numShoes = clothes.reduce(function(n, cloth) {
    return n + (cloth.category === 'shoes');
  }, 0);



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
        <Route exact path="/reports" component={Reports} />
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
