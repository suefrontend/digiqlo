import React, { useState, useEffect } from 'react';
import { StyledTable } from '../styles/Table';
import { StyledH3 } from '../styles/Typography';
import firebase from '../firebase/firestore'

const Organize = ({ limit, numByCategory, totalNumOfClothes, sumOfLimit }) => {

  console.log("numByCategory", numByCategory)
  console.log("limit", limit)
  console.log("sumOfLimit", sumOfLimit)

  const renderTable =  Object.entries(numByCategory).map(([key, value]) => {
    return (
      <tr>
        <td>{key}</td>
        <td>{value}</td>
        <td>{limit[key]}</td>
        <td>{limit[key] - value}</td>
      </tr>
    )
  })

  return (
    <>
      <StyledH3>Organize</StyledH3>
      <div className="summary">
        <div className="summary__title">
          <h4>Your Closet Plan</h4>
        </div>
        <div className="summary__body">
          <p><span>{totalNumOfClothes}</span>Total</p>
          <p><span>{sumOfLimit}</span>Limit</p>
          <p><span>{totalNumOfClothes - sumOfLimit}</span>Adjust</p>
        </div>
      </div>
      <StyledTable>
        <tr>
          <th>Category</th>
          <th>Total</th>
          <th>Limit</th>
          <th>Adjust</th>
        </tr>
        {renderTable}
      </StyledTable>
    </>
  )
}

export default Organize;
