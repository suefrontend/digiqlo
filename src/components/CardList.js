import React, { useState } from 'react';
import { StyledCardList } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ clothes, selectedCategory, loading }) => {

  const category = clothes.filter(el => el.category === selectedCategory);

  const renderAllItems = clothes.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  })

  const renderedList = category.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  if(loading) {
    return <h2>Loading...</h2>
  }

if(selectedCategory === '') {
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
