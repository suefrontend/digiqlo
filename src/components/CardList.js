import React from 'react';
import { StyledCardList } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ clothes, selectedCategory, loading, cat, limited,currentPosts, currentDisplayedItems2,filteredClothes, currentDisplayedItems, activeLink, testCat, currentPosts1, currentPosts2 }) => {

  const selectedCategoryDropown = clothes.filter(el => el.category === testCat);
  // console.log("selectedCategoryDropown", selectedCategoryDropown)

  // console.log("currentPosts1", currentPosts1)
  // console.log("currentPosts2", currentPosts2)
  const renderedList = currentDisplayedItems.map(cloth => {
      return (
        <CardItem cloth={cloth} />
      )
    });




  // const renderedCategoryList = currentPosts.filter(el => el.category === testCat).map(cloth => {
  //   return (
  //     <CardItem cloth={cloth} />
  //   )
  // });
  const renderedCategoryList = currentDisplayedItems2.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  if(loading) {
    return <h2>Loading...</h2>
  }

  // return  (
  //   <>
  //   <StyledCardList>{renderedList}</StyledCardList>
  //   </>
  // )
  if(cat === "All Items") {
    return  (
      <>
      <StyledCardList>{renderedList}</StyledCardList>
      </>
    )
  } else {
    return (
      <StyledCardList>{renderedCategoryList}</StyledCardList>
    )
  }

}

export default CardList;
