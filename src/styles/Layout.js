import styled from 'styled-components';

export const StyledFlexLayout = styled.div`

  display: flex;
  height: 100%;

  @media only screen and (max-width:1023px) {
    flex-direction: column;
  }

`;
