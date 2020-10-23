import React from 'react';
import { Link } from 'react-router-dom'
import { StyledCard } from '../styles/StyledCard';

const CardItem = ({ cloth }) => {

  return (
    <StyledCard>
      <div>
        <Link to={`/closet/${cloth.id}`}><img src={cloth.image} alt={cloth.label} /></Link>
      </div>
      <p><Link to={`/closet/${cloth.id}`}>{cloth.label}</Link></p>
    </StyledCard>
  )
}

export default CardItem;
