import React, { useState, useEffect } from 'react';
import { StyledH3 } from '../styles/Typography';
import CardList from '../components/CardList';

const Closet = () => {

  const [data, setData] = useState([]);
  const slicedData = data.slice(0, 10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [])

  return (
    <>
      <StyledH3>Closet</StyledH3>
      <CardList data={slicedData} />
    </>
  )
}

export default Closet;
