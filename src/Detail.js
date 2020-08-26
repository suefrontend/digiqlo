import React from 'react';
import { StyledContainerNoBg, StyledFlexContainerHalf, StyledContainerMain, StyledFlexContainer } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'

const Detail = () => (
  <>
    <StyledContainerMain>
      <StyledContainerNoBg>
        <div>
          <img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" />

        </div>

        <div>
          <h2>T-shirts [summer]</h2>

          <StyledDetailTable>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Walmart</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>$12.00</td>
            </tr>
            <tr>
              <td>Sleeve</td>
              <td>Short</td>
            </tr>
            <tr>
              <td>Season</td>
              <td>Summer</td>
            </tr>
            <tr>
              <td>Note</td>
              <td></td>
            </tr>
          </StyledDetailTable>
        </div>

      </StyledContainerNoBg>

    </StyledContainerMain>
  </>
)

export default Detail;