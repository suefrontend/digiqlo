import React, { useState, useEffect } from 'react'
import Closet from '../Closet/Closet';
import Reports from '../Reports/Reports';
import Organize from '../Organize/Organize';
import Wishlist from '../Wishlist/Wishlist';
import Detail from '../Detail';
import AddItem from '../AddItem';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { StyledMain } from '../styles/Container';
import firebase from '../firebase/firestore'

const Main = () => {

  const [clothes, setClothes] = useState([]);
  const [defaultValue, setDefaultValue] = useState('All Items');
  const [category, setCategory] = useState('All Items');
  const [filteredClothes, setFilteredClothes] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryClothes, setSelectedCategoryClothes] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const onSelectedChange = (e) => {
      setCategory(e);
      setFilteredClothes(clothes.filter(el => el.category === e));
  }

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {
      setLoading(true);

      const data = await db.collection('closet').get();

      setClothes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setLoading(false);
    };

      fetchData();
  }, []);

  // indexOfLastPost = 現在表示しているページナンバー * 1ページにいくつ表示するか
  // indexOfLastPost = 3 * 10 (30?)
  const indexOfLastPost = currentPage * postsPerPage;

  // // indexOfLastPost = indexOfLastPost - 1ページにいくつ表示するか
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // // 現在の投稿 = clothesの特定のobject( 最初の投稿のインデックス、最後の投稿のインデックス )
  let currentPosts;

  if(category === "All Items") {
    currentPosts = clothes.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = filteredClothes.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let totalPostsByCategory;

  if(category === 'All Items') {
    totalPostsByCategory = clothes.length;
  } else {
    totalPostsByCategory = filteredClothes.length
  }

	return (
    <StyledMain>
      <Switch>
        <Route exact path="/" render={() =>
          <Closet
            // clothes={currentPosts}
            clothes={clothes}
            onSelectedChange={onSelectedChange}
            selectedCategory={selectedCategory}
            defaultValue={defaultValue}
            loading={loading}
            postsPerPage={postsPerPage}
            totalPosts={totalPostsByCategory}
            paginate={paginate}
            setSelectedCategoryClothes={setSelectedCategoryClothes}
            cat={category}
            filteredClothes={filteredClothes}
          /> } />
        <Route exact path="/additem" component={AddItem} />
        <Route exact path="/closet/:id" component={Detail} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/organize" component={Organize} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/wishlist/:id" component={Detail} />
      </Switch>
    </StyledMain>
  )
}

export default Main;
