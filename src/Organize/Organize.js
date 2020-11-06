import React from 'react'
import ListItem from '../components/ListItem'
import { StyledHeadingH2 } from '../styles/StyledHeading'
import { StyledFlexContainer } from '../styles/Container';
import { StyledListItem, StyledImage, StyledTitle, StyledIcons } from '../styles/StyledListItem';
import { StyledTable } from '../styles/StyledTable'
import { StyledTypographyRight, StyledTypography } from '../styles/StyledTypography'

const Organize = () => {
  return (
    <div>
    <StyledHeadingH2>Organize</StyledHeadingH2>

      <div>
        <p>Your Closet Plan</p>
      </div>
      <StyledFlexContainer>
        <StyledTypography><span>89</span>Total</StyledTypography>
        <StyledTypography><span>65</span>Limit</StyledTypography>
        <StyledTypography><span>-24</span>Adjust</StyledTypography>
      </StyledFlexContainer>




      <StyledTable>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Limit</th>
          <th>Adjust</th>
          <th></th>
        </tr>
        <tr>
          <td>Outerwear</td>
          <td>14</td>
          <td>30</td>
          <td>-16</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
        </tr>
        <tr>
          <td>Dress</td>
          <td>12</td>
          <td>5</td>
          <td>+7</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
        </tr>
        <tr>
          <td>Skirt</td>
          <td>6</td>
          <td>6</td>
          <td>0</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
        </tr>
        <tr>
          <td>Pants</td>
          <td>4</td>
          <td>10</td>
          <td>-6</td>
          <td>
            <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
          </td>
        </tr>
        <tr>
          <td>T-Shirt</td>
          <td>8</td>
          <td>18</td>
          <td>10</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
        </tr>
      </StyledTable>
      <StyledTypographyRight>Last Update 07/31/2020</StyledTypographyRight>


  </div>
  )
}

export default Organize;
