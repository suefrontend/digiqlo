import React from 'react';
import { StyledCardContainer } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ data }) => {

  const renderedList = data.map(item => {
    return (
      <CardItem item={item}  key={item.title} />
    )
  });

  return (
    <StyledCardContainer>
      {renderedList}
    </StyledCardContainer>
  )
}

export default CardList;
