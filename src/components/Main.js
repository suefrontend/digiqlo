import React, { useState, useEffect } from 'react'
import Closet from '../Closet/Closet';
import Reports from '../Reports/Reports';
import Organize from '../Organize/Organize';
import Wishlist from '../Wishlist/Wishlist';
import Detail from '../Detail';
import AddItem from '../AddItem';
import {
	Switch,
	Route
} from 'react-router-dom';
import { StyledMain } from '../styles/Container';
import firebase from '../firebase/firestore'

const Main = () => {

  const [clothes, setClothes] = useState([]);
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



  useEffect(() => {

    const db = firebase.firestore();

    const fetchData = async () => {
      setLoading(true);

      const data = await db.collection('closet').get();

      setClothes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredClothes(clothes)

      setLoading(false);
    };

      fetchData();
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



  // indexOfLastPost = 現在表示しているページナンバー * 1ページにいくつ表示するか
  // 10 = 1 * 10


  // // indexOfLastPost = indexOfLastPost - 1ページにいくつ表示するか
  //  0  = 10 - 10;

  // console.log("indexOfFirstPost", indexOfFirstPost)
  // console.log("indexOfLastPost", indexOfLastPost)


  // const [currentPosts1, setCurrentPosts1] = useState(clothes.slice(indexOfFirstPost, postsPerPage))
  // clothes.slice(indexOfFirstPost, postsPerPage)


  // const [currentPosts2, setCurrentPosts2] = useState(() => listOf10MillionItems.filter())
  // const [currentPosts2, setCurrentPosts2] = useState(filteredClothes.slice(indexOfFirstPost, postsPerPage));






  const paginate = (e) => {
    setCurrentPage(e);
    setActiveLink(e);

console.log("currentPage", currentPage)




  }

  // // 現在の投稿 = clothesの特定のobject( 最初の投稿のインデックス、最後の投稿のインデックス )
  //let currentPosts;
  // console.log("indexOfLastPost",indexOfLastPost,  currentPage, "postsPerPage", clothes.length / postsPerPage);

  //if(category === "All Items") {


    // setCurrentPosts1(clothes.slice(indexOfFirstPost, postsPerPage));
    // console.log("currentPosts", currentPosts)

    //currentPosts = test2.map(el => el)
  //}


  //if(category !== "All Items") {
    // console.log("aa", filteredClothes.filter((e, i) => i <= currentPage * 5 - 1 ));
    // currentPosts = filteredClothes.filter((e, i) => i <= indexOfLastPost )
    //setCurrentPosts2(filteredClothes.slice(indexOfFirstPost, postsPerPage));
    // console.log("currentPosts", currentPosts)
  //}

  // useEffect(category)

  let totalPostsByCategory;

  if(category === 'All Items') {
    totalPostsByCategory = clothes.length;
  } else {
    totalPostsByCategory = filteredClothes.length
  }

  const itemID = (e) => {
    console.log("Item ID", e);
  }

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
            itemID={itemID}
          /> } />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/organize" component={Organize} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/wishlist/:id" component={Detail} />
      </Switch>
    </StyledMain>
  )
}

export default Main;
