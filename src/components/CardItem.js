import React from 'react';
import { Link } from 'react-router-dom'
import { StyledCard } from '../styles/Card';

const CardItem = ({ cloth }) => {

  return (
    <StyledCard key={cloth.id}>
      <div>
        <Link to={`/closet/${cloth.id}`}><img src={cloth.image} alt={cloth.label} /></Link>
      </div>
  <p><Link to={`/closet/${cloth.id}`}>{cloth.label} [{cloth.category}]</Link></p>
    </StyledCard>
  )
}

export default CardItem;
