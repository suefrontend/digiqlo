import React, { useState, useEffect } from 'react'
import { StyledH2 } from '../styles/Heading';
import { StyledPagination } from '../styles/Pagination';
import { Flex } from '../styles/Container'
import CardList from '../components/CardList';
import { SelectContainer } from '../styles/Select'
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';

const Closet = ({clothes, selectedCategory, defaultValue, onSelectedChange, currentDisplayedItems, currentDisplayedItems2, loading, cat, currentPosts,limited, activeLink, currentPosts1, currentPosts2, filteredClothes, postsPerPage, paginate,totalPosts, setSelectedCategoryClothes}) => {

  let totalIems;
  if (cat === 'All Items') {
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
          cat={cat}
          defaultValue={defaultValue}
        />
        {/* clothes.length ではなく、該当カテゴリーのobjects.lengthでないといけない */}
        {/* <span>Total: {clothes.length}</span> */}
        <span>Total: {totalIems}</span>
      </Flex>

      <CardList
        clothes={clothes}
        currentPosts={currentPosts}
        selectedCategory={selectedCategory}
        loading={loading}
        defaultValue={defaultValue}
        filteredClothes={filteredClothes}
        cat={cat}
        postsPerPage={postsPerPage}
        limited={limited}
            currentPosts2={currentPosts2}
            currentDisplayedItems={currentDisplayedItems}
            currentDisplayedItems2={currentDisplayedItems2}
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
