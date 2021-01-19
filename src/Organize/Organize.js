import React from 'react'
import ListItem from '../components/ListItem'
import { StyledH2 } from '../styles/Heading';
import { StyledFlexContainer } from '../styles/Container';
import { StyledListItem, StyledImage, StyledTitle, StyledIcons } from '../styles/StyledListItem';
import { StyledTable } from '../styles/StyledTable'
import { StyledTypographyRight, StyledTypography } from '../styles/StyledTypography'

const Organize = ({ clothes }) => {
  const uniqueCategory = Array.from(new Set(clothes.map(cloth => cloth.category)))
  .map(category => {
    return clothes.find(cloth => cloth.category === category)
  })

  // const scoreSum = members.reduce((prev, current) => {
  //   return prev + current.score;
  // }, 0);
  // console.log(scoreSum);


  const total = clothes.length;
  const limit = 73;
  const adjust = limit - total;


  return (
    <div>
    <StyledH2>Organize</StyledH2>

      <div>
        <p>Your Closet Plan</p>
      </div>
      <StyledFlexContainer>
        <StyledTypography><span>{total}</span>Total</StyledTypography>
        <StyledTypography><span>{limit}</span>Limit</StyledTypography>
        <StyledTypography><span>{adjust}</span>Adjust</StyledTypography>
      </StyledFlexContainer>


      <StyledTable>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Limit</th>
          <th>Adjust</th>
          <th></th>
        </tr>
        {uniqueCategory.map( (cloth) =>
        <tr>
          <td>{cloth.category}</td>
          <td></td>
          <td></td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" className="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
        </tr>
      )}
      </StyledTable>
      <StyledTypographyRight>Last Update 07/31/2020</StyledTypographyRight>


  </div>
  )
}

export default Organize;
