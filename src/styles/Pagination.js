import styled from 'styled-components';

export const StyledPagination = styled.ul`

  list-style-type: none;
  display: flex;
  margin-top: 25px;
  padding: 0;

  & {
    li {
      border: 1px solid #ccc;
      margin-right: 10px;
      padding: 10px;
    }
    li.active {
      border: none;
    }
  }


`;
