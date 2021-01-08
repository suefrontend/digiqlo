import React, { useState } from 'react'

const Dropdown = ({ clothes, onSelectedChange, defaultValue, selectedCategory }) => {

  const uniqueCategory = Array.from(new Set(clothes.map(cloth => cloth.category)))
    .map(category => {
      return clothes.find(cloth => cloth.category === category)
    })

  const options = uniqueCategory.map(cloth => {
      return (
        <option key={cloth.id} value={cloth.category}>
          {/* 一文字目を大文字にする */}
          {cloth.category.charAt(0).toUpperCase() + cloth.category.slice(1)}
          </option>
      )
  });

  return (
    <>
      <select
        onChange={e => onSelectedChange(e.target.value)}
      >
        <option key="default" value={defaultValue}>All Items</option>

        {options}
      </select>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div> */}
    </>
  )
}

export default Dropdown;
