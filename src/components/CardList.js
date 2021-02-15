import React from 'react';
import { CardContainer } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ clothes, loading, category, displayAllItems, displayItemsByCategory }) => {

  const renderedList = displayAllItems.map(cloth => {
      return (
        <CardItem cloth={cloth} />
      )
    });

  const renderedCategoryList = displayItemsByCategory.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  if(loading) {
    return <h2>Loading...</h2>
  }

  if(category === "All Items") {
    return  (
      <>
      <CardContainer>{renderedList}</CardContainer>
      </>
    )
  } else {
    return (
      <CardContainer>{renderedCategoryList}</CardContainer>
    )
  }

}

export default CardList;
