import React, { useState } from 'react';
import { StyledCardList } from '../styles/Card';
import CardItem from './CardItem';

const CardList = ({ clothes, selected }) => {
  // const [selectedCategory, setSelectedCategory] = useState(() => clothes.filter(el => console.log("el", el)));
  // console.log("selectedCategory", selectedCategory)

  const selectedCategory = clothes.filter(el => el.category === selected);
  // console.log(selectedCategory, selected);

  const renderedList = selectedCategory.map(cloth => {
    return (
      <CardItem cloth={cloth} />
    )
  });

  return <StyledCardList>{renderedList}</StyledCardList>
}

export default CardList;
