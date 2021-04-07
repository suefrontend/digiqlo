import React from 'react';
import { StyledCard, StyledCardFigure, StyledCardBody } from '../styles/Card';

const ClosetItem = ({ item }) => {

  return (
    <StyledCard>
      <StyledCardFigure>
        <a href="#"><img src={item.url} alt={item.title} /></a>
      </StyledCardFigure>

      <StyledCardBody>
        <h3><a href="#">{item.title}</a></h3>
      </StyledCardBody>
    </StyledCard>
  )
}

export default ClosetItem;
