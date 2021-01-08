import React, { useState, useEffect } from 'react'
import { StyledH2 } from '../styles/Heading';
import { StyledPagination } from '../styles/Pagination';
import { Flex } from '../styles/Container'
import CardList from '../components/CardList';
import { SelectContainer } from '../styles/Select'
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';

const Closet = ({clothes, selectedCategory, defaultValue, onSelectedChange, loading, postsPerPage, paginate,totalPosts, setSelectedCategoryClothes}) => {

  return (
    <div>
      <StyledH2>Closet</StyledH2>
      <Flex>
        <Dropdown
          clothes={clothes}
          onSelectedChange={onSelectedChange}
          selectedCategory={selectedCategory}
          defaultValue={defaultValue}
        />
        {/* clothes.length ではなく、該当カテゴリーのobjects.lengthでないといけない */}
        {/* <span>Total: {clothes.length}</span> */}
        <span>Total: {setSelectedCategoryClothes.length}</span>
      </Flex>

      <CardList
        clothes={clothes}
        selectedCategory={selectedCategory}
        loading={loading}
        defaultValue={defaultValue}
      />
      <nav>
      <StyledPagination>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </StyledPagination>
      </nav>
    </div>
  )
}

export default Closet;
