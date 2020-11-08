import React, { useState, useEffect } from 'react'
import { StyledHeadingH2 } from './styles/StyledHeading';
import { Flex } from './styles/StyledContainer'
import { StyledSelectContainer } from './styles/StyledInput';
import firebase from './firebase/firestore'
import { storage } from "./firebase/firestore"
import CardList from './components/CardList';

const Closet = ({clothes}) => {

  return (
    <>

      <StyledHeadingH2>Closet</StyledHeadingH2>
      <Flex>
        <StyledSelectContainer>
          <select>
            <option>Jacket</option>
            <option>Outerwear</option>
            <option>Bottoms</option>
            <option>Tops</option>
            <option>Skirt</option>
            <option>Shirt</option>
            <option>Shoes</option>
            <option>Tanks</option>
          </select>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </StyledSelectContainer>
        <span>Total: 102</span>
      </Flex>

        <CardList clothes={clothes} />
    </>
  )
}

export default Closet;
