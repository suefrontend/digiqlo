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
import * as S from '../styles/Container';
import firebase from '../firebase/firestore'

const Main = () => {

  const [clothes, setClothes] = useState([])

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('closet').get()
      .then(response => {
        const closetLists = [];
        response.forEach(function (doc) {
          const closetList = {
            id: doc.id,
            ...doc.data()
          }
          closetLists.push(closetList)
        })
        setClothes(closetLists)
      });
  }, [])

	return (
    <S.Main>
      <Switch>
        <Route exact path="/" render={() => <Closet clothes={clothes} /> } />
        <Route exact path="/additem" component={AddItem} />
        <Route exact path="/closet/:id" component={Detail} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/organize" component={Organize} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/wishlist/:id" component={Detail} />
      </Switch>
    </S.Main>
  )
}

export default Main;
