import styled from 'styled-components';

export const StyledFlexLayout = styled.div`

  display: flex;
  height: 100%;

  @media only screen and (max-width:1023px) {
    flex-direction: column;
  }

`;
export const StyledHeaderContainer = styled.div`

  padding: 60px 30px 10px 30px;

  @media only screen and (max-width:1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 100;
  }
`;
