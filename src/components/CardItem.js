import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Image, Title } from '../styles/Card';

const CardItem = ({ cloth }) => {

  return (
    <Card key={cloth.id}>
      <Image>
        <Link to={`/closet/${cloth.id}`}><img src={cloth.image} alt={cloth.label} /></Link>
      </Image>
      <Title>
        <Link to={`/closet/${cloth.id}`}>{cloth.label} [{cloth.category}]</Link>
      </Title>
    </Card>
  )
}

export default CardItem;
