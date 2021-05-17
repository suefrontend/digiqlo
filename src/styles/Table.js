import styled from 'styled-components';

export const StyledTable = styled.table`

  background: #fff;
  border-left: 2px solid #ddd;
  border-right: 2px solid #ddd;
  border-top: 2px solid #ddd;
  border-bottom: 3px solid #ddd;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;

  th, td {
    padding: 15px;
    margin: 0;
  }
  td figure {
    margin: 0;
    padding: 0;
  }
  td img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  tr:not(:last-child) td {
    border-bottom: 2px solid #eee;
  }
  th {
    border-bottom: 2px solid #eee;
  }
  td {

  }
  tr:nth-child(2n+1) td {
    background: #;
  }
  td:first-child {
    width: 30%;
  }
  td:not(:first-child) {
    text-align: center;
  }

`;
