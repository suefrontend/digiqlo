import React from 'react'
import { StyledSelectContainer } from '../styles/StyledInput';

const Dropdown = ({ lists, selected, onSelectedChange }) => {

  // Get categories
  const categories = [...new Set(lists.map(item => item.category))];

  const renderedOptions = categories.map(category => {
      return (
        // optionをonChangeした時、valueを親に渡してフィルタリングする
        <option onClick={() => onSelectedChange(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
      )
  });

  return (
    <>
      <select>
        {renderedOptions}
      </select>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
    </>
  )
}

export default Dropdown;
