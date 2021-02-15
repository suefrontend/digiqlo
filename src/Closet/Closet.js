import React, { useState, useEffect } from 'react'
import { StyledH2 } from '../styles/Heading';
import { StyledPagination } from '../styles/Pagination';
import { Flex } from '../styles/Container'
import CardList from '../components/CardList';
import { SelectContainer } from '../styles/Select'
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';

const Closet = ({clothes, selectedCategory, defaultValue, onSelectedChange, displayAllItems, displayItemsByCategory, loading, category, limited, activeLink, filteredClothes, postsPerPage, paginate, totalPosts}) => {

  let totalIems;
  if (category === 'All Items') {
    totalIems = clothes.length;
  } else {
    totalIems = filteredClothes.length;
  }

  return (
    <div>
      <StyledH2>Closet</StyledH2>
      <Flex>
        <Dropdown
          clothes={clothes}
          onSelectedChange={onSelectedChange}
          selectedCategory={selectedCategory}
          category={category}
          defaultValue={defaultValue}
        />
        <span>Total: {totalIems}</span>
      </Flex>

      <CardList
        clothes={clothes}
        loading={loading}
        category={category}
        limited={limited}
        displayAllItems={displayAllItems}
        displayItemsByCategory={displayItemsByCategory}
      />
      <nav>
      <StyledPagination>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          activeLink={activeLink}
        />
      </StyledPagination>
      </nav>
    </div>
  )
}

export default Closet;
