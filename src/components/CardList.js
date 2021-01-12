import React, { useState } from 'react';
import { StyledCardList } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ clothes, selectedCategory, loading, defaultValue, filteredClothes, cat,currentPosts }) => {

  const category = clothes.filter(el => el.category === selectedCategory);
  console.log("currentPosts", currentPosts);

  const renderAllItems = currentPosts.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  })

  const renderedList = currentPosts.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  if(loading) {
    return <h2>Loading...</h2>
  }

  if(cat === "All Items") {
    return  (
      <>
      <StyledCardList>{renderAllItems}</StyledCardList>
      </>
    )
  } else {
    return <StyledCardList>{renderedList}</StyledCardList>
  }


}

export default CardList;
