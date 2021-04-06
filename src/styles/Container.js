import styled from 'styled-components';

export const StyledFlexContainer = styled.div`

  display: flex;
  height: 100vh;

  @media only screen and (max-width:799px) {
    flex-direction: column;
  }

`;
