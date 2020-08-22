import React from 'react'
import { StyledTable, StyledTableTd, StyledTableTr } from '../styles/StyledTable'
import { StyledContainerMain } from '../styles/StyledContainer';


const Table = () => (
  <StyledContainerMain>
    <StyledTable>
      <StyledTableTr>
        <StyledTableTd>T-shirts</StyledTableTd>
        <StyledTableTd>T-shirts</StyledTableTd>
        <StyledTableTd>T-shirts</StyledTableTd>
      </StyledTableTr>
    </StyledTable>
  </StyledContainerMain>
)

export default Table;