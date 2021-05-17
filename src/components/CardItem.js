import React from 'react';
import { Link } from "react-router-dom";
import { StyledCard, StyledCardFigure, StyledCardBody } from '../styles/Card';

const ClosetItem = ({ item }) => {

  return (
    <StyledCard>
      <StyledCardFigure>
        <Link to={`/closet/${item.id}`}><img src={item.image} alt={item.label} /></Link>
      </StyledCardFigure>

      <StyledCardBody>
        <h3><Link to={`/closet/${item.id}`}>{item.label}</Link></h3>
      </StyledCardBody>
    </StyledCard>
  )
}

export default ClosetItem;
