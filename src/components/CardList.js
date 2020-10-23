import React from 'react';
import CardItem from './CardItem';

const CardList = ({ clothes }) => {

  const renderedList = clothes.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  return <>{renderedList}</>
}

export default CardList;
