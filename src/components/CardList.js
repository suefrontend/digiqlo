import React from 'react';
import { StyledCardList } from '../styles/StyledCard';
import CardItem from './CardItem';

const CardList = ({ clothes }) => {

  const renderedList = clothes.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  return <StyledCardList>{renderedList}</StyledCardList>
}

export default CardList;
