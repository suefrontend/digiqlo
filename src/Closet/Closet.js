import React, { useState, useEffect } from 'react'
import { StyledH2 } from '../styles/Heading';
import { Flex } from '../styles/Container'
import CardList from '../components/CardList';
import { SelectContainer } from '../styles/Select'
import Dropdown from '../components/Dropdown';

const Closet = ({clothes, selected, onSelectedChange}) => {

  return (
    <div>
      <StyledH2>Closet</StyledH2>
      <Flex>
        <Dropdown
          clothes={clothes}
          onSelectedChange={onSelectedChange}
        />
        <span>Total: 102</span>
      </Flex>

      <CardList
        clothes={clothes}
        selected={selected}
      />
    </div>
  )
}

export default Closet;
